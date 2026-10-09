import type { Content } from '../content';

function Contact({ t }: { t: Content }) {
  return (
    <section id="contact" className="contact">
      <h2>{t.contact.title}</h2>
      <div className="card-grid">
        <div className="card reveal">
          <span className="contact-label">{t.contact.email}</span>
          <a className="contact-value" href="mailto:kawan.cavalcante@outlook.com">kawan.cavalcante@outlook.com</a>
        </div>
        <div className="card reveal">
          <span className="contact-label">LinkedIn</span>
          <a className="contact-value" href="https://www.linkedin.com/in/kawan-cavalcante/" target="_blank" rel="noopener noreferrer">in/kawan-cavalcante</a>
        </div>
        <div className="card reveal">
          <span className="contact-label">GitHub</span>
          <a className="contact-value" href="https://github.com/KawanVictor" target="_blank" rel="noopener noreferrer">KawanVictor</a>
        </div>
        <div className="card reveal">
          <span className="contact-label">{t.contact.location}</span>
          <span className="contact-value">{t.contact.locationValue}</span>
        </div>
      </div>
    </section>
  );
}
export default Contact;
