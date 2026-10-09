import HeroHighlight from './components/HeroHighlight';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroHighlight />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
