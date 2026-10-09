import type { Content } from '../content';

function About({ t }: { t: Content }) {
  return (
    <section id="about" className="about">
      <h2>{t.about.title}</h2>
      <div className="about-layout">
        <div className="about-text">
          {t.about.paragraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
        <div className="about-side">
          <blockquote>{t.about.quote}</blockquote>
          <div className="social">
            <a className="btn btn-ghost" href="https://www.linkedin.com/in/kawan-cavalcante/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn btn-ghost" href="https://github.com/KawanVictor" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="btn btn-ghost" href="https://www.instagram.com/kavictor20/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
