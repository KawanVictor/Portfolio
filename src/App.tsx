import { useEffect, useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { content, type Lang } from './content';
import HeroHighlight from './components/HeroHighlight';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const LANG_KEY = 'lang';

function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'pt' || saved === 'en') return saved;
  } catch {
    // localStorage indisponível: segue com o idioma do navegador
  }
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

function App() {
  const [lang, setLang] = useState<Lang>(getInitialLang);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-br' : 'en';
    document.title = content[lang].meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', content[lang].meta.description);
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      // sem persistência, o idioma vale só para esta visita
    }
  }, [lang]);

  return (
    <>
      <Header t={t} onToggleLang={() => setLang(lang === 'pt' ? 'en' : 'pt')} />
      <main>
        <HeroHighlight t={t} />
        <About t={t} />
        <Experience t={t} />
        <Projects t={t} />
        <Skills t={t} />
        <Education t={t} />
        <Interests t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <BackToTop t={t} />
      <SpeedInsights />
    </>
  );
}

export default App;
