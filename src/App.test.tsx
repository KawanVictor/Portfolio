import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';
import { content } from './content';

describe('App', () => {
  it('abre em português na raiz', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Kawan Victor');
    expect(screen.getByRole('heading', { name: content.pt.projects.title })).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('pt-br');
    expect(document.title).toBe(content.pt.meta.title);
  });

  it('abre em inglês em /en/', () => {
    window.history.replaceState(null, '', '/en/');
    render(<App />);
    expect(screen.getByRole('heading', { name: content.en.projects.title })).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('en');
    expect(document.title).toBe(content.en.meta.title);
  });

  it('o botão de idioma troca o texto, o endereço e guarda a escolha', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: content.pt.nav.switchLangLabel }));
    expect(screen.getByRole('heading', { name: content.en.projects.title })).toBeInTheDocument();
    expect(window.location.pathname).toBe('/en/');
    expect(localStorage.getItem('lang')).toBe('en');

    await user.click(screen.getByRole('button', { name: content.en.nav.switchLangLabel }));
    expect(screen.getByRole('heading', { name: content.pt.projects.title })).toBeInTheDocument();
    expect(window.location.pathname).toBe('/');
  });

  it('mostra cada projeto em destaque com imagem e link para o GitHub', () => {
    render(<App />);
    for (const project of content.pt.projects.list) {
      const card = screen.getByRole('heading', { name: project.name }).closest('.project-card') as HTMLElement;
      expect(within(card).getByRole('link', { name: content.pt.projects.viewOnGithub })).toHaveAttribute('href', project.url);
      if (project.image) {
        expect(within(card).getByRole('img', { name: project.imageAlt })).toHaveAttribute('src', project.image);
      }
      if (project.liveUrl) {
        expect(within(card).getByRole('link', { name: project.liveLabel ?? content.pt.projects.liveSite })).toHaveAttribute('href', project.liveUrl);
      }
    }
  });

  it.each(['pt', 'en'] as const)('o botão do currículo baixa o PDF do idioma (%s)', (lang) => {
    if (lang === 'en') window.history.replaceState(null, '', '/en/');
    render(<App />);
    const cv = screen.getByRole('link', { name: content[lang].hero.ctaCv });
    expect(cv).toHaveAttribute('href', content[lang].hero.cvUrl);
    expect(cv).toHaveAttribute('download');
  });

  it('links externos abrem em nova aba sem expor a página de origem', () => {
    render(<App />);
    for (const link of screen.getAllByRole('link')) {
      if (link.getAttribute('target') === '_blank') {
        expect(link.getAttribute('rel')).toContain('noopener');
      }
    }
  });
});
