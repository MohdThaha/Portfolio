import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiDownload, FiGitCommit, FiServer, FiTerminal } from 'react-icons/fi';
import { EXPERIENCES, HIGHLIGHTS, PERSONAL_INFO, PROFILE_IMG, PROJECTS, SYSTEM_SIGNALS } from '../constants';

const commandRows = [
  { k: 'service', v: 'orders.api.revyrie' },
  { k: 'latency', v: 'p95 tuned' },
  { k: 'release', v: 'docker -> ci/cd' },
  { k: 'trust', v: 'jwt + cognito + rbac' },
];

const Home = () => {
  const featuredProjects = PROJECTS.slice(0, 3);
  const currentRole = EXPERIENCES[0];

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="page-shell overflow-hidden">
      <div className="grid min-h-[calc(100vh-128px)] gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <div className="relative flex flex-col justify-between gap-8">
          <div className="pt-8 md:pt-16">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="display-title mt-5 max-w-5xl text-balance"
            >
              Backend systems with a <span className="serif-word">product soul</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="copy-large mt-7"
            >
              {PERSONAL_INFO.tagline}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">See builds <FiArrowUpRight size={17} /></Link>
              <a href={PERSONAL_INFO.resume} target="_blank" rel="noreferrer" className="btn-secondary">Resume <FiDownload size={17} /></a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }} className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {HIGHLIGHTS.map((item) => (
              <div key={item.label} className="surface p-4">
                <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.2em] text-muted">{item.label}</p>
                <p className="mt-3 font-sans text-xl font-black leading-tight text-ink">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.96, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.18 }} className="relative min-h-[620px]">
          <span className="corner-garnish right-0 top-0 rotate-180 opacity-70" />
          <div className="absolute inset-0 rotate-2 border border-ink/10 bg-rust/20 hero-mask" />
          <div className="absolute inset-3 -rotate-1 overflow-hidden bg-surface hero-mask">
            <img src={PROFILE_IMG} alt="Mohammed Thaha" className="h-full w-full object-cover saturate-75 contrast-110" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(11,10,8,0.92)_100%)]" />
          </div>

          <div className="paper tab-shine absolute bottom-5 left-0 max-w-[18rem] p-5 md:left-6">
            <p className="font-mono text-[0.62rem] font-black uppercase tracking-[0.2em] text-background/[0.55]">Current mission</p>
            <h2 className="mt-3 text-2xl font-black leading-none">{currentRole.role}</h2>
            <p className="mt-2 text-sm font-black uppercase tracking-[0.12em] text-background/[0.55]">{currentRole.company}</p>
            <p className="mt-3 text-sm font-semibold leading-6 text-background/70">{currentRole.period}</p>
          </div>

          <div className="surface absolute right-0 top-8 w-[18rem] overflow-hidden p-4 md:right-6">
            <div className="mb-4 flex items-center gap-2 border-b border-ink/10 pb-3">
              <FiTerminal className="text-accent" />
              <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted">live system</span>
            </div>
            <div className="space-y-3">
              {commandRows.map((row) => (
                <div key={row.k} className="flex items-center justify-between gap-4 font-mono text-[0.72rem]">
                  <span className="text-muted">{row.k}</span>
                  <span className="text-right font-bold text-ink">{row.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="surface absolute bottom-28 right-2 hidden w-48 p-4 md:block">
            <FiServer className="text-sun" />
            <p className="mt-4 font-mono text-[0.66rem] font-bold uppercase tracking-[0.16em] text-muted">Focus</p>
            <p className="mt-2 text-lg font-black leading-tight">SaaS, ERP, APIs, cloud delivery</p>
            <div className="sparkline mt-4" aria-hidden="true" />
          </div>
        </motion.div>
      </div>

      <div className="mt-8 overflow-hidden border-y border-ink/10 py-4">
        <div className="ticker-track flex w-max gap-3">
          {[...SYSTEM_SIGNALS, ...SYSTEM_SIGNALS].map((signal, index) => (
            <span key={`${signal.label}-${index}`} className="chip">
              {signal.label}<span className="ml-2 text-ink">{signal.value}</span>
            </span>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.42 }}
        className="browser-workbench mt-10"
      >
        <div className="relative z-10 flex flex-wrap items-center gap-2 border-b border-ink/10 p-4">
          {['revyrie.work', 'api.compose', 'deploy.trace'].map((tab, index) => (
            <span key={tab} className={`tab-chip px-4 py-2 font-mono text-[0.68rem] font-black uppercase tracking-[0.16em] ${index === 0 ? 'bg-ink text-background' : 'text-muted'}`}>
              {tab}
            </span>
          ))}
        </div>
        <div className="relative z-10 grid gap-6 p-5 md:p-7 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="paper p-6">
            <p className="font-mono text-[0.66rem] font-black uppercase tracking-[0.2em] text-background/50">Current tab</p>
            <h2 className="mt-5 text-5xl font-black leading-[0.88] md:text-6xl">
              Software Engineer Backend
            </h2>
            <p className="mt-5 text-xl font-black uppercase tracking-[0.12em] text-background/60">
              Revyrie Global
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['01', 'Design APIs that feel predictable under pressure.'],
              ['02', 'Shape service boundaries before the product gets noisy.'],
              ['03', 'Keep cloud delivery observable, repeatable, and calm.'],
            ].map(([number, text]) => (
              <div key={number} className="surface p-5">
                <p className="font-mono text-[0.68rem] font-black text-accent">{number}</p>
                <p className="mt-8 text-xl font-black leading-tight text-ink">{text}</p>
              </div>
            ))}
            <div className="surface md:col-span-3 p-5">
              <div className="grid gap-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-muted md:grid-cols-3">
                <p className="log-line">auth boundary checked</p>
                <p className="log-line">queue retry strategy set</p>
                <p className="log-line">deployment signal green</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <Link key={project.id} to="/projects" className={`ink-card group min-h-[260px] ${index === 0 ? 'lg:col-span-2' : ''}`}>
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="micro-label">{project.accent}</p>
                  <h2 className="mt-3 text-3xl font-black leading-tight text-ink">{project.title}</h2>
                </div>
                <FiGitCommit className="text-accent" size={24} />
              </div>
              <p className="mt-8 max-w-xl text-base leading-7 text-muted">{project.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
};

export default Home;
