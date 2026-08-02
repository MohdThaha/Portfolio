import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiArrowUpRight, FiDownload, FiMail } from 'react-icons/fi';
import { PERSONAL_INFO } from '../constants';

const channels = [
  { label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}`, icon: FiMail },
  { label: 'LinkedIn', value: 'Professional profile', href: PERSONAL_INFO.linkedin, icon: FaLinkedinIn },
  { label: 'GitHub', value: 'Repositories and experiments', href: PERSONAL_INFO.github, icon: FaGithub },
];

const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="page-shell flex min-h-[calc(100vh-112px)] items-center">
      <div className="grid w-full gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center">
        <div>
          <p className="micro-label">Contact / Collaboration</p>
          <h1 className="display-title mt-5 text-balance">
            Let us build something <span className="serif-word">reliable</span>.
          </h1>
          <p className="copy-large mt-7">
            Best fit: backend-heavy products, SaaS platforms, ERP workflows, integrations, authentication, cloud delivery, and APIs that need to behave under real pressure.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="btn-primary">Start conversation <FiMail size={17} /></a>
            <a href={PERSONAL_INFO.resume} target="_blank" rel="noreferrer" className="btn-secondary">View resume <FiDownload size={17} /></a>
          </div>
        </div>

        <div className="paper p-3">
          <div className="border border-background/10 p-5" style={{ borderRadius: 8 }}>
            <div className="mb-5 flex items-start justify-between border-b border-background/10 pb-5">
              <div>
                <p className="font-mono text-[0.66rem] font-black uppercase tracking-[0.2em] text-background/[0.45]">Availability signal</p>
                <h2 className="mt-3 text-3xl font-black leading-tight">Open to serious product work</h2>
              </div>
              <span className="mt-2 h-3 w-3 animate-pulse-slow bg-accent shadow-[0_0_24px_rgba(126,255,207,0.8)]" style={{ borderRadius: 999 }} />
            </div>

            <div className="space-y-3">
              {channels.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === 'Email' ? undefined : '_blank'}
                  rel={label === 'Email' ? undefined : 'noreferrer'}
                  className="group flex items-center justify-between gap-4 bg-background/[0.055] p-4 text-background transition hover:bg-background hover:text-ink"
                  style={{ borderRadius: 8 }}
                >
                  <span className="flex items-center gap-4">
                    <span className="grid h-11 w-11 place-items-center border border-background/10 bg-background/10 group-hover:border-ink/[0.15]" style={{ borderRadius: 999 }}>
                      <Icon size={19} />
                    </span>
                    <span>
                      <span className="block text-lg font-black">{label}</span>
                      <span className="block text-sm font-semibold opacity-65">{value}</span>
                    </span>
                  </span>
                  <FiArrowUpRight size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
