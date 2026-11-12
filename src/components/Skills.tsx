import type { Content } from '../content';

function Skills({ t }: { t: Content }) {
  return (
    <section id="skills" className="skills">
      <h2>{t.skills.title}</h2>
      <div className="card-grid">
        {t.skills.groups.map((group) => (
          <div className="card reveal" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.desc}</p>
            <div className="tags">
              {group.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;
