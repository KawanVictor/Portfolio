import { useEffect, useState } from 'react';
import type { Content } from '../content';

const SHOW_AFTER = 600;

function BackToTop({ t }: { t: Content }) {
  const [visible, setVisible] = useState(() => window.scrollY > SHOW_AFTER);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#top"
      className={visible ? "back-to-top visible" : "back-to-top"}
      aria-label={t.nav.backToTop}
      title={t.nav.backToTop}
      tabIndex={visible ? 0 : -1}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
export default BackToTop;
