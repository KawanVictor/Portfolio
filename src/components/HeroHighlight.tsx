import type { Content } from '../content';

function HeroHighlight({ t }: { t: Content }) {
  return (
    <section id="top" className="hero-highlight">
      <div className="hero-main">
        <span className="hero-eyebrow">{t.hero.eyebrow}</span>
        <h1>{t.hero.greeting} <span className="gradient-text">Kawan Victor</span>!</h1>
        <p className="hero-lead">{t.hero.lead}</p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">{t.hero.ctaProjects}</a>
          <a href={t.hero.cvUrl} className="btn btn-ghost" download>{t.hero.ctaCv}</a>
          <a href="#contact" className="btn btn-ghost">{t.hero.ctaContact}</a>
        </div>
      </div>
      <ul className="hero-highlights">
        {t.hero.highlights.map((item, idx) => (
          <li className="card" key={idx}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default HeroHighlight;
