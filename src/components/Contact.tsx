function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contato</h2>
      <div className="card-grid">
        <div className="card reveal">
          <span className="contact-label">E-mail</span>
          <a className="contact-value" href="mailto:kawan.cavalcante@outlook.com">kawan.cavalcante@outlook.com</a>
        </div>
        <div className="card reveal">
          <span className="contact-label">Telefone</span>
          <span className="contact-value">(41) 99119-9082</span>
        </div>
        <div className="card reveal">
          <span className="contact-label">Localização</span>
          <span className="contact-value">Curitiba, Paraná, Brasil</span>
        </div>
      </div>
    </section>
  );
}
export default Contact;
