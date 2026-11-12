/// <reference types="vite/client" />
import { describe, expect, it } from 'vitest';
import html from '../index.html?raw';
import { content } from './content';
import { initialLang, localizeHtml, urlForLang } from './lang';

describe('initialLang', () => {
  it('"/en/" é sempre inglês, mesmo com português salvo', () => {
    expect(initialLang('/en/', null)).toBe('en');
    expect(initialLang('/en', 'pt')).toBe('en');
  });

  it('a raiz é português, a menos que o visitante já tenha escolhido inglês', () => {
    expect(initialLang('/', null)).toBe('pt');
    expect(initialLang('/', 'pt')).toBe('pt');
    expect(initialLang('/', 'en')).toBe('en');
  });

  it('não confunde caminhos que só começam com "en"', () => {
    expect(initialLang('/english', null)).toBe('pt');
  });
});

describe('urlForLang', () => {
  it('mantém a busca e a âncora', () => {
    expect(urlForLang('en', '?ref=linkedin', '#projects')).toBe('/en/?ref=linkedin#projects');
    expect(urlForLang('pt', '', '#contact')).toBe('/#contact');
  });
});

describe('localizeHtml', () => {
  const en = localizeHtml(html, content.en.meta);

  it('troca idioma, título e descrição', () => {
    expect(en).toContain('<html lang="en">');
    expect(en).toContain(`<title>${content.en.meta.title}</title>`);
    expect(en).toContain(`<meta name="description" content="${content.en.meta.description}"`);
  });

  it('aponta o canônico e a prévia de link para /en/', () => {
    expect(en).toContain('<link rel="canonical" href="https://kawanvictor.vercel.app/en/"');
    expect(en).toContain('<meta property="og:url" content="https://kawanvictor.vercel.app/en/"');
    expect(en).toContain(`<meta property="og:title" content="${content.en.meta.title}"`);
    expect(en).toContain('<meta property="og:locale" content="en_US"');
    expect(en).toContain('<meta property="og:locale:alternate" content="pt_BR"');
  });

  it('mantém os links hreflang dos dois idiomas', () => {
    expect(en).toContain('hreflang="pt-BR" href="https://kawanvictor.vercel.app/"');
    expect(en).toContain('hreflang="en" href="https://kawanvictor.vercel.app/en/"');
  });

  it('não deixa texto em português nas tags de prévia', () => {
    expect(en).not.toMatch(/content="[^"]*(Portfólio|Desenvolvedor)[^"]*"/);
  });

  it('falha se o index.html mudar e um trecho esperado sumir', () => {
    expect(() => localizeHtml(html.replace(/<title>[^<]*<\/title>/, ''), content.en.meta)).toThrow(/trecho não encontrado/);
  });
});
