import { useState, type FormEvent } from 'react';
import type { Content } from '../content';
import { runQuestion } from '../demo/sqlInterface';

function SqlDemo({ t }: { t: Content }) {
  const demo = t.projects.demo;
  const [draft, setDraft] = useState(demo.examples[0]);
  const [question, setQuestion] = useState(demo.examples[0]);
  const result = runQuestion(question);
  const params = Object.entries(result.params);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setQuestion(draft);
  }

  function pickExample(example: string) {
    setDraft(example);
    setQuestion(example);
  }

  return (
    <div id="sql-demo" className="card sql-demo">
      <span className="kind-badge">{demo.badge}</span>
      <h3>{demo.title}</h3>
      <p className="sql-demo-intro">{demo.intro}</p>

      <form className="sql-demo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder={demo.placeholder}
          aria-label={demo.inputLabel}
          maxLength={200}
        />
        <button type="submit" className="btn btn-primary">{demo.run}</button>
      </form>

      <div className="sql-demo-examples" aria-label={demo.examplesLabel}>
        {demo.examples.map((example) => (
          <button type="button" className="tag" key={example} onClick={() => pickExample(example)}>
            {example}
          </button>
        ))}
      </div>

      <div className="sql-demo-output" aria-live="polite">
        <div>
          <h4>{demo.sqlLabel}</h4>
          <pre><code>{result.sql}</code></pre>
          {params.length > 0 && (
            <p className="sql-demo-params">
              {demo.paramsLabel}{" "}
              {params.map(([name, value]) => (
                <code key={name}>:{name} = {JSON.stringify(value)}</code>
              ))}
            </p>
          )}
        </div>
        <div>
          <h4>{demo.resultLabel}</h4>
          {result.rows.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>{demo.columns[result.groupBy]}</th>
                  <th>{demo.totalLabel}</th>
                </tr>
              </thead>
              <tbody>
                {result.rows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="sql-demo-empty">{demo.empty}</p>
          )}
        </div>
      </div>

      <p className="sql-demo-note">{demo.note}</p>
    </div>
  );
}
export default SqlDemo;
