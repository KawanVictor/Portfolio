import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { content } from '../content';
import SqlDemo from './SqlDemo';

const demo = content.pt.projects.demo;

function setup() {
  const user = userEvent.setup();
  render(<SqlDemo t={content.pt} />);
  const input = screen.getByRole('textbox', { name: demo.inputLabel });
  const sql = () => document.querySelector('.sql-demo pre code')?.textContent ?? '';
  return { user, input, sql };
}

async function ask(user: ReturnType<typeof userEvent.setup>, input: HTMLElement, question: string) {
  await user.clear(input);
  await user.type(input, question);
  await user.click(screen.getByRole('button', { name: demo.run }));
}

describe('SqlDemo', () => {
  it('começa com o primeiro exemplo já respondido', () => {
    const { input, sql } = setup();
    expect(input).toHaveValue(demo.examples[0]);
    expect(sql()).toContain('INTERVAL :dias DAY');
    expect(screen.getByText(':dias = 7')).toBeInTheDocument();
  });

  it('gera o SQL e a tabela para uma pergunta digitada', async () => {
    const { user, input, sql } = setup();
    await ask(user, input, 'erros por equipamento');
    expect(sql()).toContain('GROUP BY equipamento');
    const table = screen.getByRole('table');
    expect(within(table).getByRole('columnheader', { name: demo.columns.equipamento })).toBeInTheDocument();
    const firstRow = within(table).getAllByRole('row')[1];
    expect(firstRow).toHaveTextContent('Rewrapper-01');
    expect(firstRow).toHaveTextContent('3');
  });

  it('só troca o resultado ao enviar, não a cada tecla', async () => {
    const { user, input, sql } = setup();
    const before = sql();
    await user.clear(input);
    await user.type(input, 'erros por tipo');
    expect(sql()).toBe(before);
  });

  it('um exemplo preenche a pergunta e responde na hora', async () => {
    const { user, input, sql } = setup();
    const examples = screen.getByRole('group', { name: demo.examplesLabel });
    await user.click(within(examples).getByRole('button', { name: demo.examples[1] }));
    expect(input).toHaveValue(demo.examples[1]);
    expect(sql()).toContain('severidade = :severidade');
  });

  it('avisa quando não há registros', async () => {
    const { user, input } = setup();
    await ask(user, input, 'erros da Globo hoje');
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
    expect(screen.getByText(demo.empty)).toBeInTheDocument();
  });
});
