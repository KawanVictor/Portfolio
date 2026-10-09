import { useState } from 'react';
import type { Content } from '../content';

function Header({ t, onToggleLang }: { t: Content; onToggleLang: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#education", label: t.nav.education },
    { href: "#interests", label: t.nav.interests },
    { href: "#contact", label: t.nav.contact }
  ];

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
            <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
export default Header;
