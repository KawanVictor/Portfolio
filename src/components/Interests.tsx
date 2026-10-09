import type { Content } from '../content';

function Interests({ t }: { t: Content }) {
  return (
    <section id="interests" className="interests">
      <h2>{t.interests.title}</h2>
      <div className="card-grid">
        {t.interests.list.map((interest, idx) => (
          <div className="card reveal" key={idx}>
            <h3>{interest.title}</h3>
            <p>{interest.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Interests;
