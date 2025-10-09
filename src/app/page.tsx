import { About, Contact, Experience, Hero, Projects } from './components';
import { Footer, Navbar, ScrollComponent } from './components/shared';

const Home = () => {
  return (
    <>
      <ScrollComponent />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
