import { useEffect, useRef, useState } from 'react';
import type { Content } from '../content';

// Ids das seções, na ordem da página; o texto de cada link vem de t.nav[id]
const NAV_IDS = ["about", "projects", "skills", "experience", "education", "interests", "contact"] as const;

function Header({ t, onToggleLang }: { t: Content; onToggleLang: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Destaca no menu a seção que está no meio da tela; no topo ("top"), nenhuma
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    for (const id of ["top", ...NAV_IDS]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  // Menu aberto no celular: Esc ou um toque fora do cabeçalho fecham
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  return (
    <header className="header" ref={headerRef}>
      <div className="header-inner">
        <a href="#top" className="brand">Kawan Victor Cavalcante</a>
        <div className="header-actions">
          <button type="button" className="lang-toggle" onClick={onToggleLang} aria-label={t.nav.switchLangLabel}>
            {t.nav.switchLang}
          </button>
          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
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
          {NAV_IDS.map((id) => (
            <a
              href={`#${id}`}
              key={id}
              className={activeId === id ? "active" : undefined}
              aria-current={activeId === id ? "true" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
export default Header;
