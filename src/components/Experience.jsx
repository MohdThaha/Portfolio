import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES, EDUCATION } from '../constants';

const Experience = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 lg:py-24"
    >
      <div className="mb-20">
        <h2 className="text-[clamp(4rem,8vw,8rem)] font-nike font-black uppercase leading-none tracking-tighter">
          TRACK
          <br />
          <span className="text-stroke">RECORD</span>
        </h2>
      </div>

      <div className="flex flex-col xl:flex-row gap-16">
        
        {/* Professional Experience */}
        <div className="flex-[2]">
          <h3 className="text-sub text-3xl mb-8 border-b-2 border-nike-darkgray pb-4">PROFESSIONAL</h3>
          
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="nike-panel relative group"
              >
                {/* Volt Accent Line */}
                <div className="absolute top-0 left-0 w-2 h-0 bg-nike-volt group-hover:h-full transition-all duration-300"></div>

                <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4">
                  <div>
                    <h4 className="font-nike font-bold text-4xl text-nike-white uppercase tracking-wide">{exp.role}</h4>
                    <p className="font-sans text-nike-gray text-lg mt-1">{exp.company}</p>
                  </div>
                  <div className="font-nike text-nike-volt text-2xl tracking-widest bg-nike-darkgray/30 px-4 py-1 self-start md:self-auto">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex gap-4 items-start font-sans text-nike-gray">
                      <span className="text-nike-volt shrink-0 block mt-1">▹</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {exp.techStack.map((tech, i) => (
                    <span key={i} className="font-sans text-xs font-bold tracking-widest uppercase bg-nike-white text-black px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="flex-1 xl:max-w-md">
          <h3 className="text-sub text-3xl mb-8 border-b-2 border-nike-darkgray pb-4">ACADEMIC</h3>
          
          <div className="space-y-8">
            {EDUCATION.map((edu, idx) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="group border border-nike-darkgray p-8 hover:border-nike-white transition-colors"
              >
                <div className="font-nike text-nike-volt text-xl tracking-widest mb-4">
                  {edu.period}
                </div>
                <h4 className="font-nike font-bold text-3xl text-nike-white uppercase leading-tight mb-2 group-hover:text-nike-volt transition-colors">
                  {edu.degree}
                </h4>
                <p className="font-sans text-nike-gray">
                  {edu.institution}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Experience;