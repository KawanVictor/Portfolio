import type { Content } from '../content';

function HeroHighlight({ t }: { t: Content }) {
  return (
    <section id="top" className="hero-highlight">
      <span className="hero-eyebrow">{t.hero.eyebrow}</span>
      <h1>{t.hero.greeting} <span className="gradient-text">Kawan Victor</span>!</h1>
      <p className="hero-lead">{t.hero.lead}</p>
      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">{t.hero.ctaProjects}</a>
        <a href="#contact" className="btn btn-ghost">{t.hero.ctaContact}</a>
      </div>
    </section>
  );
}
export default HeroHighlight;
