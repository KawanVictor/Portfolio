import { describe, expect, it } from 'vitest';
import { parseQuestion, runQuestion } from './sqlInterface';

// Dados de exemplo (SAMPLE_LOGS):
// Globo (1 dia, crítico, Rewrapper-01), SporTV (hoje, média, Rewrapper-02),
// Discovery (3 dias, alta, Rewrapper-01), Globo (2 dias, alta, Rewrapper-03),
// Record (5 dias, média, Rewrapper-02), Band (1 dia, crítico, Rewrapper-01)

function totals(question: string): Record<string, number> {
  return Object.fromEntries(runQuestion(question).rows.map((row) => [row.label, row.total]));
}

describe('agrupamento', () => {
  it('agrupa por canal quando a pergunta não diz outra coisa', () => {
    const result = runQuestion('quantos erros aconteceram');
    expect(result.groupBy).toBe('canal');
    expect(result.sql).toContain('GROUP BY canal');
    expect(result.sql).toContain('WHERE 1=1');
    expect(totals('quantos erros aconteceram')).toEqual({ Globo: 2, SporTV: 1, Discovery: 1, Record: 1, Band: 1 });
  });

  it('agrupa por tipo de erro', () => {
    expect(parseQuestion('erros por tipo').groupBy).toBe('tipo_erro');
    expect(totals('erros por tipo')).toEqual({ 'Perda de sinal': 2, 'Erro de áudio': 2, 'Erro de vídeo': 2 });
  });

  it('agrupa por equipamento', () => {
    expect(parseQuestion('erros por equipamento').groupBy).toBe('equipamento');
    expect(totals('erros por equipamento')).toEqual({ 'Rewrapper-01': 3, 'Rewrapper-02': 2, 'Rewrapper-03': 1 });
  });
});

describe('filtro de data', () => {
  it('"hoje" filtra só os eventos do dia', () => {
    const result = runQuestion('erros de hoje');
    expect(result.sql).toContain('DATE(data_evento) = CURDATE()');
    expect(totals('erros de hoje')).toEqual({ SporTV: 1 });
  });

  it('"hoje" tem prioridade sobre "N dias"', () => {
    const parsed = parseQuestion('erros de hoje nos últimos 7 dias');
    expect(parsed.hoje).toBe(true);
    expect(parsed.params).not.toHaveProperty('dias');
  });

  it('"N dias" vira parâmetro e filtra pelo período', () => {
    const result = runQuestion('erros dos últimos 2 dias');
    expect(result.params.dias).toBe(2);
    expect(result.sql).toContain('INTERVAL :dias DAY');
    expect(totals('erros dos últimos 2 dias')).toEqual({ Globo: 1, SporTV: 1, Band: 1 });
  });

  it('entende dias por extenso', () => {
    expect(parseQuestion('últimos sete dias').params.dias).toBe(7);
    expect(parseQuestion('últimos trinta dias').params.dias).toBe(30);
  });

  it('ignora períodos acima de 365 dias', () => {
    expect(parseQuestion('últimos 400 dias').params).not.toHaveProperty('dias');
  });
});

describe('filtros por valor', () => {
  it('reconhece severidade com ou sem acento', () => {
    expect(parseQuestion('erros críticos').params.severidade).toBe('critico');
    expect(parseQuestion('erros criticos').params.severidade).toBe('critico');
    expect(totals('erros críticos')).toEqual({ Globo: 1, Band: 1 });
  });

  it('não confunde nomes internos do JavaScript com severidade', () => {
    for (const word of ['constructor', 'toString', 'valueOf', 'hasOwnProperty', '__proto__']) {
      const result = runQuestion(`erros ${word}`);
      expect(result.params).not.toHaveProperty('severidade');
      expect(result.rows).toHaveLength(5);
    }
  });

  it('filtra por canal conhecido', () => {
    expect(parseQuestion('erros da Globo').params.canal).toBe('globo');
    expect(totals('erros da Globo')).toEqual({ Globo: 2 });
  });

  it('filtra por equipamento com LIKE', () => {
    expect(parseQuestion('erros no rewrapper-01').params.equipamento).toBe('%rewrapper-01%');
    expect(totals('erros no rewrapper-01')).toEqual({ Globo: 1, Discovery: 1, Band: 1 });
  });

  it('nunca coloca os valores digitados dentro do SQL', () => {
    const result = runQuestion('erros críticos da Globo no rewrapper-01 nos últimos 7 dias');
    expect(result.sql).toContain(':severidade');
    expect(result.sql).toContain(':canal');
    expect(result.sql).toContain(':equipamento');
    expect(result.sql).not.toMatch(/globo|critico|rewrapper/i);
  });
});

describe('ordem e limite', () => {
  it('ordena do maior para o menor por padrão', () => {
    expect(runQuestion('erros por canal').rows[0]).toEqual({ label: 'Globo', total: 2 });
  });

  it('"menos" inverte a ordem', () => {
    const result = runQuestion('canais com menos erros');
    expect(result.sql).toContain('ORDER BY total ASC');
    expect(result.rows.at(-1)).toEqual({ label: 'Globo', total: 2 });
  });

  it('aceita "top N" e "N maiores"', () => {
    expect(runQuestion('top 2 canais').rows).toHaveLength(2);
    expect(runQuestion('top 2 canais').sql).toContain('LIMIT 2');
    expect(parseQuestion('3 maiores canais').limit).toBe(3);
  });

  it('volta para 50 quando o limite é inválido', () => {
    expect(runQuestion('top 0 canais').sql).toContain('LIMIT 50');
    expect(runQuestion('top 5000 canais').sql).toContain('LIMIT 50');
  });
});
