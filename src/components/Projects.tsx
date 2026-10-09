import type { Content } from '../content';

function Projects({ t }: { t: Content }) {
  return (
    <section id="projects" className="projects">
      <h2>{t.projects.title}</h2>
      <div className="projects-grid">
        {t.projects.list.map((proj, idx) => (
          <div className="card project-card reveal" key={idx}>
            <div className="project-body">
              <h3>{proj.name}</h3>
              <p>{proj.desc}</p>
              <div className="tags">
                {proj.tags.map((tag, tIdx) => (
                  <span className="tag" key={tIdx}>{tag}</span>
                ))}
              </div>
              <a className="project-link" href={proj.url} target="_blank" rel="noopener noreferrer">{t.projects.viewOnGithub}</a>
            </div>
            {proj.image && (
              <img className="project-thumb" src={proj.image} alt={proj.imageAlt} width="520" height="720" loading="lazy" />
            )}
          </div>
        ))}
      </div>
      <p className="projects-more">
        {t.projects.more} <a className="text-link" href="https://github.com/KawanVictor" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>

      <h3 className="subsection-title">{t.projects.workTitle}</h3>
      <p className="subsection-note">{t.projects.workNote}</p>
      <div className="card-grid work-grid">
        {t.projects.work.map((item, idx) => (
          <div className="card reveal" key={idx}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="tags">
              {item.tags.map((tag, tIdx) => (
                <span className="tag" key={tIdx}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
