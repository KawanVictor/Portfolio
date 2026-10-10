// Versão em TypeScript do parser e do gerador de SQL do projeto SQL-Interface
// (backend/app/nlp_parser.py e backend/app/sql_builder.py), para a demo rodar no navegador.

type GroupBy = 'canal' | 'equipamento' | 'tipo_erro';

interface LogRow {
  canal: string;
  equipamento: string;
  tipo_erro: string;
  severidade: 'critico' | 'alta' | 'media' | 'baixa';
  // dias desde o evento; os dados de exemplo do repositório usam NOW() - INTERVAL N DAY
  diasAtras: number;
}

export interface ParsedQuestion {
  groupBy: GroupBy;
  where: string[];
  params: Record<string, string | number>;
  order: 'ASC' | 'DESC';
  limit: number;
  hoje: boolean;
}

export interface QueryResult {
  sql: string;
  params: Record<string, string | number>;
  groupBy: GroupBy;
  rows: { label: string; total: number }[];
}

// Mesmas linhas de database/init.sql
const SAMPLE_LOGS: LogRow[] = [
  { canal: "Globo", equipamento: "Rewrapper-01", tipo_erro: "Perda de sinal", severidade: "critico", diasAtras: 1 },
  { canal: "SporTV", equipamento: "Rewrapper-02", tipo_erro: "Erro de áudio", severidade: "media", diasAtras: 0 },
  { canal: "Discovery", equipamento: "Rewrapper-01", tipo_erro: "Erro de vídeo", severidade: "alta", diasAtras: 3 },
  { canal: "Globo", equipamento: "Rewrapper-03", tipo_erro: "Perda de sinal", severidade: "alta", diasAtras: 2 },
  { canal: "Record", equipamento: "Rewrapper-02", tipo_erro: "Erro de áudio", severidade: "media", diasAtras: 5 },
  { canal: "Band", equipamento: "Rewrapper-01", tipo_erro: "Erro de vídeo", severidade: "critico", diasAtras: 1 }
];

const CANAIS_CONHECIDOS = new Set(["globo", "sportv", "discovery", "record", "band"]);

const SEVERIDADES: Record<string, LogRow['severidade']> = {
  critico: "critico", criticos: "critico", critica: "critico", criticas: "critico",
  alta: "alta", altas: "alta",
  media: "media", medias: "media",
  baixa: "baixa", baixas: "baixa"
};

const DIAS_POR_EXTENSO: Record<string, number> = { sete: 7, trinta: 30 };
const MAX_DIAS = 365;

const TOKEN_RE = /[a-z0-9]+(?:-[a-z0-9]+)*/g;
const DIAS_RE = /\b(\d{1,3}|sete|trinta)\s+dias?\b/;
const LIMIT_RE = /\btop\s+(\d{1,4})\b|\b(\d{1,4})\s+(?:primeiros|primeiras|principais|maiores)\b/;

// Minúsculas e sem acentos, para comparar "crítico" e "critico" da mesma forma
function normalize(text: string): string {
  return text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

export function parseQuestion(question: string): ParsedQuestion {
  const q = normalize(question);
  const tokens = q.match(TOKEN_RE) ?? [];
  const words = new Set(tokens);

  const parsed: ParsedQuestion = { groupBy: "canal", where: [], params: {}, order: "DESC", limit: 50, hoje: false };

  if (words.has("tipo") || words.has("tipos")) {
    parsed.groupBy = "tipo_erro";
  } else if (words.has("equipamento") || words.has("equipamentos")) {
    parsed.groupBy = "equipamento";
  }

  // um filtro de data só: "hoje" tem prioridade sobre "N dias"
  const diasMatch = DIAS_RE.exec(q);
  if (words.has("hoje")) {
    parsed.where.push("DATE(data_evento) = CURDATE()");
    parsed.hoje = true;
  } else if (diasMatch) {
    const dias = DIAS_POR_EXTENSO[diasMatch[1]] ?? Number(diasMatch[1]);
    if (dias >= 1 && dias <= MAX_DIAS) {
      parsed.where.push("data_evento >= DATE_SUB(NOW(), INTERVAL :dias DAY)");
      parsed.params.dias = dias;
    }
  }

  const severidade = tokens.find((token) => token in SEVERIDADES);
  if (severidade) {
    parsed.where.push("severidade = :severidade");
    parsed.params.severidade = SEVERIDADES[severidade];
  }

  const canal = tokens.find((token) => CANAIS_CONHECIDOS.has(token));
  if (canal) {
    parsed.where.push("LOWER(canal) = :canal");
    parsed.params.canal = canal;
  }

  const equipamento = tokens.find((token) => token.startsWith("rewrapper"));
  if (equipamento) {
    parsed.where.push("LOWER(equipamento) LIKE :equipamento");
    parsed.params.equipamento = `%${equipamento}%`;
  }

  if (words.has("menos")) parsed.order = "ASC";

  const limitMatch = LIMIT_RE.exec(q);
  if (limitMatch) parsed.limit = Number(limitMatch[1] ?? limitMatch[2]);

  return parsed;
}

function buildSql(parsed: ParsedQuestion): string {
  const limit = parsed.limit < 1 || parsed.limit > 1000 ? 50 : parsed.limit;
  const whereClause = parsed.where.length > 0 ? parsed.where.join(" AND ") : "1=1";
  return [
    `SELECT ${parsed.groupBy}, COUNT(*) AS total`,
    "FROM logs",
    `WHERE ${whereClause}`,
    `GROUP BY ${parsed.groupBy}`,
    `ORDER BY total ${parsed.order}`,
    `LIMIT ${limit}`
  ].join("\n");
}

// Aplica sobre os dados de exemplo os mesmos filtros que o SQL gerado descreve
function matches(row: LogRow, parsed: ParsedQuestion): boolean {
  const { dias, severidade, canal, equipamento } = parsed.params;
  if (parsed.hoje && row.diasAtras !== 0) return false;
  if (typeof dias === "number" && row.diasAtras >= dias) return false;
  if (severidade && row.severidade !== severidade) return false;
  if (canal && row.canal.toLowerCase() !== canal) return false;
  if (typeof equipamento === "string" && !row.equipamento.toLowerCase().includes(equipamento.replace(/%/g, ""))) return false;
  return true;
}

export function runQuestion(question: string): QueryResult {
  const parsed = parseQuestion(question);
  const limit = parsed.limit < 1 || parsed.limit > 1000 ? 50 : parsed.limit;

  const totals = new Map<string, number>();
  for (const row of SAMPLE_LOGS) {
    if (!matches(row, parsed)) continue;
    const label = row[parsed.groupBy];
    totals.set(label, (totals.get(label) ?? 0) + 1);
  }

  const rows = [...totals.entries()]
    .map(([label, total]) => ({ label, total }))
    .sort((a, b) => (parsed.order === "ASC" ? a.total - b.total : b.total - a.total))
    .slice(0, limit);

  return { sql: buildSql(parsed), params: parsed.params, groupBy: parsed.groupBy, rows };
}
