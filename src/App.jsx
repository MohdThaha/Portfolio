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
    document.title = "THAHA | ARCHITECT";
  }, []);

  return (
    <Router>
      <div className="bg-background min-h-screen text-nike-white font-sans selection:bg-nike-volt selection:text-black">
        <Navbar />
        <main className="pt-24 min-h-screen flex flex-col">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;