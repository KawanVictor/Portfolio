import type { Content } from '../content';

function Education({ t }: { t: Content }) {
  return (
    <section id="education" className="education">
      <h2>{t.education.title}</h2>
      <div className="card-grid">
        {t.education.items.map((item) => (
          <div className="card reveal" key={item.title}>
            <span className="contact-label">{item.status}</span>
            <h3>{item.title}</h3>
            {item.desc && <p>{item.desc}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
export default Education;
