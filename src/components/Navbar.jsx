import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { label: 'Home', path: '/Portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <nav className="fixed inset-x-0 top-4 z-50 px-4">
      <div className={`mx-auto flex h-14 max-w-[1500px] items-center justify-between border px-3 transition duration-300 md:px-4 ${scrolled ? 'border-ink/[0.18] bg-background/[0.76] shadow-2xl shadow-black/30 backdrop-blur-2xl' : 'border-ink/10 bg-background/[0.42] backdrop-blur-xl'}`} style={{ borderRadius: 999 }}>
        <Link to="/Portfolio" className="group flex items-center gap-3 pr-2">
          <span className="grid h-10 w-10 place-items-center bg-ink font-mono text-xs font-black text-background transition group-hover:bg-accent" style={{ borderRadius: 999 }}>
            MT
          </span>
          <span className="hidden font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted sm:block">
            Backend / Cloud / SaaS
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = location.pathname === link.path || (link.path === '/Portfolio' && location.pathname === '/');
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] transition ${active ? 'bg-ink text-background' : 'text-muted hover:bg-ink/[0.08] hover:text-ink'}`}
                style={{ borderRadius: 999 }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center border border-ink/[0.12] bg-ink/[0.055] text-ink md:hidden"
          style={{ borderRadius: 999 }}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="mx-auto mt-2 max-w-[1500px] border border-ink/[0.12] bg-background/[0.94] p-2 shadow-2xl shadow-black/35 backdrop-blur-2xl md:hidden"
            style={{ borderRadius: 18 }}
          >
            {links.map((link) => (
              <Link key={link.path} to={link.path} className="block px-4 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-ink">
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
