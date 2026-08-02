import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiMapPin } from 'react-icons/fi';
import { EDUCATION, EXPERIENCES } from '../constants';

const Experience = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="page-shell">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="micro-label">Career log</p>
          <h1 className="display-title mt-5 text-balance">
            Built through <span className="serif-word">production</span>.
          </h1>
          <p className="copy-large mt-7">
            A backend-heavy path through SaaS tooling, ERP scale-up work, cloud services, authentication, delivery pipelines, and current Revyrie Global systems work.
          </p>

          <div className="paper mt-8 p-6">
            <p className="font-mono text-[0.66rem] font-black uppercase tracking-[0.2em] text-background/50">Education</p>
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="mt-5">
                <h2 className="text-3xl font-black leading-tight">{edu.degree}</h2>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-background/50">{edu.period}</p>
                <p className="mt-4 text-sm font-semibold leading-7 text-background/[0.68]">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          {EXPERIENCES.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className={`relative overflow-hidden border p-5 md:p-7 ${index === 0 ? 'paper' : 'surface'}`}
              style={{ borderRadius: 8 }}
            >
              <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <FiMapPin className={index === 0 ? 'text-background/[0.55]' : 'text-accent'} />
                    <p className={`font-mono text-[0.66rem] font-black uppercase tracking-[0.2em] ${index === 0 ? 'text-background/50' : 'text-accent'}`}>{exp.tone}</p>
                  </div>
                  <h2 className="mt-5 text-4xl font-black leading-[0.95] md:text-5xl">{exp.role}</h2>
                  <p className={`mt-3 text-xl font-black ${index === 0 ? 'text-background/70' : 'text-muted'}`}>{exp.company}</p>
                </div>
                  <span className={`w-fit px-4 py-2 font-mono text-[0.68rem] font-black uppercase tracking-[0.16em] ${index === 0 ? 'bg-background text-ink' : 'border border-ink/[0.12] bg-ink/[0.06] text-ink'}`} style={{ borderRadius: 999 }}>
                  {exp.period}
                </span>
              </div>

              <ul className="relative z-10 mt-8 grid gap-3">
                {exp.achievements.map((achievement) => (
                  <li key={achievement} className={`flex gap-3 text-sm font-medium leading-7 ${index === 0 ? 'text-background/[0.68]' : 'text-muted'}`}>
                    <span className={`mt-1 grid h-5 w-5 shrink-0 place-items-center ${index === 0 ? 'bg-background text-ink' : 'bg-accent text-background'}`} style={{ borderRadius: 999 }}>
                      <FiCheck size={13} />
                    </span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="relative z-10 mt-8 flex flex-wrap gap-2">
                {exp.techStack.map((tech) => (
                  <span key={tech} className={index === 0 ? 'inline-flex rounded-full bg-background/10 px-3 py-1.5 font-mono text-[0.68rem] font-black uppercase tracking-[0.14em] text-background/70' : 'chip'}>{tech}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
