import type { Lang } from './content';

export const SITE_URL = 'https://kawanvictor.vercel.app';

// Cada idioma tem o próprio endereço: assim dá para compartilhar o link em inglês,
// e buscadores e prévias de link (que não rodam JavaScript) recebem o HTML certo.
export const LANG_PATHS: Record<Lang, string> = { pt: '/', en: '/en/' };

const EN_PATH_RE = /^\/en(\/|$)/;

/**
 * O caminho manda: "/en/" é inglês e "/" é português. Na raiz, vale a escolha que o
 * visitante já fez antes (`saved`). O idioma do navegador não é usado de propósito:
 * o robô do Google navega em inglês e indexaria a página em português como inglesa.
 */
export function initialLang(pathname: string, saved: string | null): Lang {
  if (EN_PATH_RE.test(pathname)) return 'en';
  return saved === 'en' ? 'en' : 'pt';
}

/** Endereço da página no idioma `lang`, mantendo a busca e a âncora atuais. */
export function urlForLang(lang: Lang, search: string, hash: string): string {
  return LANG_PATHS[lang] + search + hash;
}

interface PageMeta {
  title: string;
  description: string;
}

function replaceOnce(html: string, pattern: RegExp, replacement: string): string {
  if (!pattern.test(html)) throw new Error(`localizeHtml: trecho não encontrado em index.html: ${pattern}`);
  return html.replace(pattern, replacement);
}

function escapeAttr(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

/**
 * Gera o index.html em inglês a partir do português, trocando idioma, título,
 * descrição, endereço canônico e as tags de prévia de link (Open Graph).
 * Falha se algum trecho esperado sumir do index.html, para o build não sair errado.
 */
export function localizeHtml(html: string, meta: PageMeta): string {
  const url = SITE_URL + LANG_PATHS.en;
  const title = escapeAttr(meta.title);
  const description = escapeAttr(meta.description);
  let out = html;
  out = replaceOnce(out, /<html lang="[^"]*">/, '<html lang="en">');
  out = replaceOnce(out, /<title>[^<]*<\/title>/, `<title>${title}</title>`);
  out = replaceOnce(out, /(<meta name="description" content=")[^"]*(")/, `$1${description}$2`);
  out = replaceOnce(out, /(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  out = replaceOnce(out, /(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
  out = replaceOnce(out, /(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`);
  out = replaceOnce(out, /(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`);
  out = replaceOnce(out, /(<meta property="og:locale" content=")[^"]*(")/, '$1en_US$2');
  out = replaceOnce(out, /(<meta property="og:locale:alternate" content=")[^"]*(")/, '$1pt_BR$2');
  return out;
}
