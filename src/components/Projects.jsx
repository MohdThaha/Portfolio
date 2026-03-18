import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 lg:py-24"
    >
      <div className="mb-16">
        <h2 className="text-[clamp(4rem,8vw,8rem)] font-nike font-black uppercase leading-none tracking-tighter">
          THE <span className="text-nike-volt">BUILDS</span>
        </h2>
        <p className="font-sans text-nike-gray max-w-2xl text-lg mt-6 border-l-4 border-nike-volt pl-4">
          A showcase of systems solving real-world backend challenges—focusing on reliability, idempotency, and distributed data consistency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="nike-panel group flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
          >
            {/* Background huge number */}
            <div className="absolute -top-10 -right-4 font-nike font-black text-[12rem] text-nike-darkgray opacity-20 pointer-events-none group-hover:text-nike-volt group-hover:opacity-10 transition-colors duration-500">
              0{idx + 1}
            </div>

            <div className="flex justify-between items-start mb-12 relative z-10">
              <h3 className="text-4xl font-nike font-bold text-nike-white uppercase tracking-wider group-hover:text-nike-volt transition-colors">
                {project.title}
              </h3>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="bg-nike-white text-black p-3 hover:bg-nike-volt transition-colors"
                aria-label="GitHub Repository"
              >
                <FaGithub size={24} />
              </a>
            </div>
            
            <p className="font-nike font-bold uppercase tracking-widest text-nike-volt mb-4 relative z-10">
              {project.tagline}
            </p>
            
            <p className="font-sans text-nike-gray flex-grow mb-8 relative z-10">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-nike-darkgray relative z-10">
              {project.techStack.map((tech, i) => (
                <span key={i} className="font-nike text-sm font-bold tracking-widest uppercase bg-nike-darkgray text-nike-white px-3 py-1 group-hover:bg-nike-white group-hover:text-black transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
};

export default Projects;