import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="page-shell">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <div>
          <p className="micro-label">03 / Selected work</p>
          <h1 className="display-title mt-5 text-balance">
            Case studies in <span className="serif-word">backend reliability</span>.
          </h1>
        </div>
        <p className="copy-large lg:pb-3">
          Reliability primitives, event flow, API safety, fraud intelligence, gateways, and ML serving. Built around problems that appear when products become real.
        </p>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-6">
        {PROJECTS.map((project, index) => {
          const wide = index === 0 || index === 3;
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className={`ink-card min-h-[420px] ${wide ? 'lg:col-span-4' : 'lg:col-span-2'}`}
            >
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="micro-label">{project.accent}</p>
                    <h2 className="mt-4 text-4xl font-black leading-[0.96] text-ink">{project.title}</h2>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-12 w-12 shrink-0 place-items-center border border-ink/[0.12] bg-ink/[0.06] text-ink transition hover:bg-ink hover:text-background"
                    style={{ borderRadius: 999 }}
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <FaGithub size={20} />
                  </a>
                </div>

                <div className="my-7 overflow-hidden border border-ink/10 bg-background/[0.45]" style={{ borderRadius: 8 }}>
                  {project.image ? (
                    <img src={project.image} alt={`${project.title} preview`} className="h-56 w-full object-cover opacity-90 transition duration-500 hover:scale-[1.03]" />
                  ) : (
                    <div className="project-code relative h-56">
                      <div className="absolute inset-5 grid grid-cols-8 gap-2">
                        {Array.from({ length: 48 }).map((_, cell) => (
                          <span key={cell} className={`${cell % 11 === 0 ? 'bg-accent/60' : cell % 7 === 0 ? 'bg-rust/60' : cell % 5 === 0 ? 'bg-sun/45' : 'bg-ink/[0.08]'}`} style={{ borderRadius: 3 }} />
                        ))}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 border border-ink/10 bg-background/70 p-3 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted backdrop-blur">
                        npm run solve:{project.id}
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-xl font-black leading-7 text-ink">{project.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted">{project.description}</p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="chip">{tech}</span>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  Open repo <FiArrowUpRight size={17} />
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Projects;
