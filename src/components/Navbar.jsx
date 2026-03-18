import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { id: 1, link: 'Home', path: '/Portfolio' },
    { id: 2, link: 'About', path: '/about' },
    { id: 3, link: 'Experience', path: '/experience' },
    { id: 4, link: 'Projects', path: '/projects' },
    { id: 5, link: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full h-24 z-50 transition-all duration-500 ${scrolled ? 'bg-background border-b border-nike-darkgray' : 'bg-transparent'}`}>
      <div className="max-w-[1600px] mx-auto flex justify-between items-center w-full h-full px-6 md:px-12">

        {/* Logo */}
        <Link to="/Portfolio" className="z-50 relative group">
          <div className="text-4xl font-nike font-bold tracking-tighter uppercase text-nike-white">
            M<span className="text-nike-volt">T</span>D
          </div>
          <div className="absolute -bottom-2 left-0 w-0 h-1 bg-nike-volt transition-all duration-300 group-hover:w-full"></div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map(({ id, link, path }) => {
            const isActive = location.pathname === path;
            return (
              <li key={id} className="relative group overflow-hidden">
                <Link
                  to={path}
                  className={`font-nike uppercase tracking-widest text-lg transition-colors duration-300 ${isActive ? 'text-nike-volt' : 'text-nike-white group-hover:text-nike-gray'}`}
                >
                  {link}
                </Link>
                <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-nike-volt transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
              </li>
            );
          })}
        </ul>

        {/* Mobile Navigation Toggle */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-50 md:hidden text-nike-white hover:text-nike-volt transition-colors flex flex-col gap-1.5"
        >
          <div className={`w-8 h-1 bg-current transform transition-all duration-300 ${nav ? 'rotate-45 translate-y-2.5' : ''}`}></div>
          <div className={`w-8 h-1 bg-current transition-all duration-300 ${nav ? 'opacity-0' : ''}`}></div>
          <div className={`w-8 h-1 bg-current transform transition-all duration-300 ${nav ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
              animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
              exit={{ opacity: 0, clipPath: 'inset(100% 0 0% 0)' }}
              transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
              className="fixed inset-0 bg-background z-40 flex flex-col justify-center px-12"
            >
              <ul className="flex flex-col gap-8">
                {links.map(({ id, link, path }) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (id * 0.1), duration: 0.5 }}
                  >
                    <Link
                      onClick={() => setNav(false)}
                      to={path}
                      className="font-nike text-6xl uppercase tracking-tighter text-nike-white hover:text-nike-volt transition-colors inline-block text-stroke"
                    >
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;