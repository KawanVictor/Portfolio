import type { Content } from '../content';

function Experience({ t }: { t: Content }) {
  return (
    <section id="experience" className="experience">
      <h2>{t.experience.title}</h2>

      <div className="experience-layout">
      <ol className="timeline">
        {t.experience.roles.map((role, idx) => (
          <li className="timeline-item" key={idx}>
            <div className="card reveal">
              <div className="timeline-head">
                <h3>{role.title}</h3>
                <span className="timeline-period">{role.period}</span>
              </div>
              <p className="timeline-company">{role.company}</p>
              <p className="timeline-summary">{role.summary}</p>
              {role.items.length > 0 && (
                <ul>
                  {role.items.map((item, iIdx) => (
                    <li key={iIdx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="competencies card reveal">
        <h4>{t.experience.competenciesTitle}</h4>
        <ul>
          {t.experience.competencies.map((item, idx) => (
            <li key={idx}>
              <b>{item.title}</b> {item.desc}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </section>
  );
}
export default Experience;
