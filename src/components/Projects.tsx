function Projects() {
  const projectList = [
    {
      name: "SQL-Interface",
      desc: "Converte perguntas em português em consultas SQL sobre logs de falhas de transmissão. API com parser, gerador e validador de SQL, interface web e tudo sobe com um comando via Docker.",
      tags: ["Python", "FastAPI", "React", "MySQL", "Docker"],
      url: "https://github.com/KawanVictor/SQL-Interface"
    },
    {
      name: "Tetris Java PRO",
      desc: "Tetris com interface gráfica Swing, cinco modos de jogo, peça fantasma, hold e ranking das melhores pontuações salvo em PostgreSQL. Projeto final de Programação Orientada a Objetos.",
      tags: ["Java", "Swing", "PostgreSQL", "POO"],
      url: "https://github.com/KawanVictor/TetrisV2-java"
    },
    {
      name: "War",
      desc: "Jogo de tabuleiro War (inspirado em Risk) com motor de regras próprio, modo interativo no terminal e servidor web para partidas online em tempo real.",
      tags: ["Python", "Flask", "Socket.IO"],
      url: "https://github.com/KawanVictor/War"
    },
    {
      name: "UNICHATO",
      desc: "Plataforma inovadora para trocas anônimas entre universitários, promovendo integração fora de redes convencionais.",
      tags: ["React", "Node.js", "WebSocket", "UX Design"]
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
            {proj.url && (
              <a className="project-link" href={proj.url} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
            )}
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
