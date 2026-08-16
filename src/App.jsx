import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { PERSONAL_INFO } from './constants';
import { useEffect } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/Portfolio': 'Mohammed Thaha - Software Engineer Backend',
      '/about': 'About - Mohammed Thaha',
      '/experience': 'Experience - Mohammed Thaha',
      '/projects': 'Projects - Mohammed Thaha',
      '/contact': 'Contact - Mohammed Thaha',
    };

    document.title = titles[location.pathname] || titles['/Portfolio'];
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/Portfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  useEffect(() => {
    document.title = "Mohammed Thaha | Software Engineer Backend";
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background font-sans text-ink selection:bg-accent selection:text-background">
        <div className="fixed inset-x-0 top-0 z-[1] h-[46vh] bg-[linear-gradient(135deg,rgba(49,87,255,0.13),transparent_38%,rgba(24,160,88,0.1)_70%,rgba(240,93,59,0.08))]" />
        <Navbar />
        <aside className="site-rail left-8 hidden xl:flex">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub size={18} />
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn size={17} />
          </a>
        </aside>
        <aside className="site-rail right-8 hidden xl:flex">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="vertical-email">
            {PERSONAL_INFO.email}
          </a>
        </aside>
        <main className="relative z-10 min-h-screen pt-24">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
