function Interests() {
  const interests = [
    { title: "Basquete", desc: "Golden State Warriors, NBA, registros esportivos com amigos." },
    { title: "Futebol", desc: "São Paulo FC e Barcelona, vivências em estádios e campeonatos." },
    { title: "Design & Layouts", desc: "Temas arroxeados, composições criativas, compartilhamento visual." },
    { title: "Motivação", desc: "Frases e conteúdos sobre superação, carreira tech, crescimento pessoal." }
  ];

  return (
    <section id="interests" className="interests">
      <h2>Interesses Pessoais</h2>
      <div className="card-grid">
        {interests.map((interest, idx) => (
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
