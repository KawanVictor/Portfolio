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
      name: "ChessGame",
      desc: "Xadrez com interface gráfica para dois jogadores ou contra a IA (minimax com poda alfa-beta). Aplica as regras oficiais, incluindo roque, en passant e promoção, detecta xeque-mate e empates e permite desfazer jogadas.",
      tags: ["Java", "Swing", "IA Minimax", "POO"],
      url: "https://github.com/KawanVictor/ChessGame"
    },
    {
      name: "War",
      desc: "Jogo de tabuleiro War (inspirado em Risk) com motor de regras próprio, modo interativo no terminal e servidor web para partidas online em tempo real.",
      tags: ["Python", "Flask", "Socket.IO"],
      url: "https://github.com/KawanVictor/War"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projetos em Destaque</h2>
      <div className="projects-grid">
        {projectList.map((proj, idx) => (
          <div className="card project-card reveal" key={idx}>
            <h3>{proj.name}</h3>
            <p>{proj.desc}</p>
            <div className="tags">
              {proj.tags.map((tag, tIdx) => (
                <span className="tag" key={tIdx}>{tag}</span>
              ))}
            </div>
            <a className="project-link" href={proj.url} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
          </div>
        ))}
      </div>
      <p className="projects-more">
        Veja mais no <a className="text-link" href="https://github.com/KawanVictor" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
    </section>
  );
}
export default Projects;
