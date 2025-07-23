import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';


const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      {/* <Services /> */}
      <Projects />
      <Contact />
      
    </>
  );
};

export default Home;