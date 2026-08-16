import React from 'react';
import { motion } from 'framer-motion';
import { FiBox, FiCloud, FiDatabase, FiLock } from 'react-icons/fi';
import { PERSONAL_INFO, SKILLS, SYSTEM_SIGNALS } from '../constants';

const values = [
  { icon: FiBox, title: 'Architecture that ships', text: 'I keep abstractions practical, close to product workflows, and easy for teams to extend.' },
  { icon: FiDatabase, title: 'Data as UX', text: 'Idempotency, schema boundaries, queues, retries, and integrity are treated like customer-facing design.' },
  { icon: FiCloud, title: 'Cloud-ready delivery', text: 'Docker, CI/CD, AWS, and release automation stay part of the system from the start.' },
  { icon: FiLock, title: 'Trust by default', text: 'Auth, access control, and safe API behavior are built into the product surface.' },
];

const About = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="page-shell">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="micro-label">01 / About</p>
          <h1 className="display-title mt-5 text-balance">
            I turn product complexity into <span className="serif-word">clear systems</span>.
          </h1>
        </div>
        <div className="paper p-6 md:p-8">
          <p className="font-serif text-4xl italic leading-none md:text-5xl">"{PERSONAL_INFO.philosophy}"</p>
          <p className="mt-6 text-base font-semibold leading-8 text-background/[0.68]">
            My work sits between backend engineering, cloud delivery, and product architecture. I like systems that feel boring in production and sharp in the hands of the team building on them.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {values.map(({ icon: Icon, title, text }, index) => (
          <motion.div key={title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }} className="ink-card min-h-[250px]">
            <div className="relative z-10">
              <Icon className="text-accent" size={28} />
              <h2 className="mt-8 text-2xl font-black leading-tight text-ink">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="surface p-6 md:p-8">
          <p className="micro-label">02 / System signature</p>
          <div className="mt-7 space-y-5">
            {SYSTEM_SIGNALS.map((signal) => (
              <div key={signal.label} className="border-b border-ink/10 pb-5">
                <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted">{signal.label}</p>
                <p className="mt-2 text-2xl font-black leading-tight text-ink">{signal.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {SKILLS.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + index * 0.05 }}
              className={`surface p-5 ${index === 3 ? 'md:col-span-2' : ''}`}
            >
              <h3 className="text-2xl font-black text-ink">{skillGroup.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
