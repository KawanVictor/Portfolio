function Skills() {
  const skillGroups = [
    {
      title: "Desenvolvimento Web",
      desc: "Desenvolvimento web moderno, com criação de layouts e identidade visual.",
      tags: ["JavaScript", "TypeScript", "React", "HTML5", "CSS3"]
    },
    {
      title: "Dados",
      desc: "Análise de dados e dashboards para visualização de indicadores.",
      tags: ["SQL", "Dashboards"]
    },
    {
      title: "Infraestrutura & Automação",
      desc: "Monitoramento, troubleshooting e automação de rotinas técnicas.",
      tags: ["Shell Script", "Monitoramento", "Troubleshooting"]
    },
    {
      title: "Comunicação",
      desc: "Comunicação visual, produção de conteúdo tecnológico/motivacional, apresentação de resultados e redação técnica.",
      tags: []
    },
    {
      title: "Trabalho em Equipe",
      desc: "Atuação colaborativa em times multidisciplinares e proatividade em soluções.",
      tags: []
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Principais Habilidades</h2>
      <div className="card-grid">
        {skillGroups.map((group, idx) => (
          <div className="card reveal" key={idx}>
            <h3>{group.title}</h3>
            <p>{group.desc}</p>
            {group.tags.length > 0 && (
              <div className="tags">
                {group.tags.map((tag, tIdx) => (
                  <span className="tag" key={tIdx}>{tag}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;
