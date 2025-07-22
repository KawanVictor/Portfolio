function Projects() {
  const projectList = [
    {
      name: "UNICHATO",
      desc: "Plataforma inovadora para trocas anônimas entre universitários, promovendo integração fora de redes convencionais.",
      tags: ["React", "Node.js", "WebSocket", "UX Design"]
    },
    {
      name: "Dashboard de Layouts",
      desc: "Projetos de dashboards e temas modernos inspirados em tendências de design compartilhadas nas redes sociais.",
      tags: ["React", "TypeScript", "CSS3"]
    },
    {
      name: "Scripts de Automação",
      desc: "Scripts para automação e análise técnica publicados no GitHub.",
      tags: ["Shell", "Python", "Infraestrutura"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projetos em Destaque</h2>
      <div className="projects-grid">
        {projectList.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <h3>{proj.name}</h3>
            <p>{proj.desc}</p>
            <div className="tags">
              {proj.tags.map((tag, tIdx) => (
                <span className="tag" key={tIdx}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p>
        Veja mais no <a href="https://github.com/KawanVictor" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
    </section>
  );
}
export default Projects;
