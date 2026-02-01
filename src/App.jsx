import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Timeline from './components/Timeline.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
    return (
        <div className="min-h-screen bg-slate-900">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Timeline />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
