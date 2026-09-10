import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import TechStack from './components/TechStack';
import TeamLead from './components/TeamLead';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <SmoothScroll>
      <div className="bg-black min-h-screen text-white font-sans relative">
        <CustomCursor />
        <Navbar />
        <Hero />
        <TechStack />
        <Services />
        <Process />
        <About />
        <TeamLead />
        <Contact />
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
