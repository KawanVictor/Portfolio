import { useEffect, useState } from 'react';
import type { Content } from '../content';

const SECTION_IDS = ["about", "experience", "projects", "skills", "education", "interests", "contact"];

function Header({ t, onToggleLang }: { t: Content; onToggleLang: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const links = [
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "projects", label: t.nav.projects },
    { id: "skills", label: t.nav.skills },
    { id: "education", label: t.nav.education },
    { id: "interests", label: t.nav.interests },
    { id: "contact", label: t.nav.contact }
  ];

  // Destaca no menu a seção que está no meio da tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    for (const id of SECTION_IDS) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#top" className="brand">Kawan Victor Cavalcante</a>
        <div className="header-actions">
          <button type="button" className="lang-toggle" onClick={onToggleLang} aria-label={t.nav.switchLangLabel}>
            {t.nav.switchLang}
          </button>
          <button
            type="button"
            className="nav-toggle"
            aria-label={t.nav.openMenu}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <nav id="main-nav" className={menuOpen ? "open" : undefined}>
          {links.map((link) => (
            <a
              href={`#${link.id}`}
              key={link.id}
              className={activeId === link.id ? "active" : undefined}
              aria-current={activeId === link.id ? "true" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
export default Header;
