/// <reference types="vite/client" />
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import indexHtml from '../../index.html?raw';
import readme from '../../README.md?raw';
import { content } from '../content';
import { WHATSAPP_PLACEHOLDER, whatsappNumber, whatsappUrl } from '../whatsapp';
import Contact from './Contact';
import WhatsAppLink from './WhatsAppLink';

const message = content.pt.contact.whatsappMessage;

describe('whatsapp', () => {
  it('o número decodificado está no formato do wa.me (DDI + DDD + número)', () => {
    expect(whatsappNumber()).toMatch(/^55\d{10,11}$/);
  });

  it('o link leva a mensagem com acentos e espaços', () => {
    const url = new URL(whatsappUrl(message));
    expect(url.pathname).toBe(`/${whatsappNumber()}`);
    expect(url.searchParams.get('text')).toBe(message);
  });
});

describe('WhatsAppLink', () => {
  it('antes de qualquer interação o HTML não tem o número', () => {
    render(<WhatsAppLink message={message}>WhatsApp</WhatsAppLink>);
    const link = screen.getByRole('link', { name: 'WhatsApp' });
    expect(link).toHaveAttribute('href', WHATSAPP_PLACEHOLDER);
    expect(document.body.innerHTML).not.toContain(whatsappNumber());
  });

  it('passar o mouse monta o link completo', async () => {
    const user = userEvent.setup();
    render(<WhatsAppLink message={message}>WhatsApp</WhatsAppLink>);
    const link = screen.getByRole('link', { name: 'WhatsApp' });
    await user.hover(link);
    expect(link).toHaveAttribute('href', whatsappUrl(message));
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('focar pelo teclado também monta o link', async () => {
    const user = userEvent.setup();
    render(<WhatsAppLink message={message}>WhatsApp</WhatsAppLink>);
    await user.tab();
    expect(screen.getByRole('link', { name: 'WhatsApp' })).toHaveAttribute('href', whatsappUrl(message));
  });

  it('a seção de contato mostra o convite, não o número', () => {
    render(<Contact t={content.pt} />);
    expect(screen.getByRole('link', { name: content.pt.contact.whatsappCta })).toBeInTheDocument();
    expect(document.body.textContent).not.toMatch(/\d{4,5}-?\d{4}/);
  });

  it('nenhum arquivo do código-fonte traz o número em texto', () => {
    const sources = import.meta.glob('/src/**/*.{ts,tsx}', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
    const files = { ...sources, 'index.html': indexHtml, 'README.md': readme };
    const number = whatsappNumber();
    const local = number.slice(4); // sem o 55 e o DDD
    const formatted = `${local.slice(0, 5)}-${local.slice(5)}`;
    for (const [file, text] of Object.entries(files)) {
      expect(text.includes(number) || text.includes(local) || text.includes(formatted), file).toBe(false);
    }
  });
});
