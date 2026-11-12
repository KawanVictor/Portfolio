import type { Content } from '../content';

function Interests({ t }: { t: Content }) {
  return (
    <section id="interests" className="interests">
      <h2>{t.interests.title}</h2>
      <div className="card-grid">
        {t.interests.list.map((interest) => (
          <div className="card reveal" key={interest.title}>
            <h3>{interest.title}</h3>
            <p>{interest.desc}</p>
            {interest.tags.length > 0 && (
              <div className="tags">
                {interest.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
export default Interests;
