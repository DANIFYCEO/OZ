import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import TeamLead from './components/TeamLead';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <TeamLead />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
