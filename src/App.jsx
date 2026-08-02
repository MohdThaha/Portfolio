import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect } from 'react';

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
        <div className="fixed inset-x-0 top-0 z-[1] h-[42vh] bg-[linear-gradient(90deg,rgba(255,122,89,0.18),transparent_34%,rgba(126,255,207,0.13)_68%,rgba(255,210,121,0.12))]" />
        <Navbar />
        <main className="relative z-10 min-h-screen pt-24">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
