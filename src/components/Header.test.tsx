import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { content } from '../content';
import Header from './Header';

const t = content.pt;

function setup() {
  const onToggleLang = vi.fn();
  const user = userEvent.setup();
  render(<Header t={t} onToggleLang={onToggleLang} />);
  const toggle = screen.getByRole('button', { name: t.nav.openMenu });
  const nav = screen.getByRole('navigation');
  return { user, toggle, nav, onToggleLang };
}

describe('Header', () => {
  it('tem um link para cada seção', () => {
    setup();
    for (const label of [t.nav.about, t.nav.projects, t.nav.skills, t.nav.experience, t.nav.education, t.nav.interests, t.nav.contact]) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument();
    }
  });

  it('o botão abre o menu e troca o rótulo para "fechar"', async () => {
    const { user, toggle, nav } = setup();
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(toggle).toHaveAccessibleName(t.nav.closeMenu);
    expect(nav).toHaveClass('open');
  });

  it('Esc fecha o menu e devolve o foco ao botão', async () => {
    const { user, toggle, nav } = setup();
    await user.click(toggle);
    await user.keyboard('{Escape}');
    expect(nav).not.toHaveClass('open');
    expect(toggle).toHaveFocus();
  });

  it('um toque fora do cabeçalho fecha o menu', async () => {
    const { user, toggle, nav } = setup();
    await user.click(toggle);
    await user.click(document.body);
    expect(nav).not.toHaveClass('open');
  });

  it('escolher uma seção fecha o menu', async () => {
    const { user, toggle, nav } = setup();
    await user.click(toggle);
    await user.click(screen.getByRole('link', { name: t.nav.skills }));
    expect(nav).not.toHaveClass('open');
  });

  it('o botão de idioma avisa o App', async () => {
    const { user, onToggleLang } = setup();
    await user.click(screen.getByRole('button', { name: t.nav.switchLangLabel }));
    expect(onToggleLang).toHaveBeenCalledOnce();
  });
});
