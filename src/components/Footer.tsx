import type { Content } from '../content';

function Footer({ t }: { t: Content }) {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Kawan Victor Cavalcante — {t.footer}
      </p>
    </footer>
  );
}
export default Footer;
