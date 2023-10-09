import Intro from '../Intro/Intro';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default Main;