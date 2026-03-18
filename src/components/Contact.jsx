import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col justify-center min-h-[calc(100vh-100px)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">
        
        {/* Massive Text CTA */}
        <div>
          <h2 className="text-[clamp(5rem,10vw,12rem)] font-nike font-black uppercase leading-[0.8] tracking-tighter mb-8">
            LET'S
            <br />
            <span className="text-stroke">WORK.</span>
          </h2>
          <p className="font-sans text-nike-gray text-xl mb-12 max-w-lg border-l-4 border-nike-volt pl-6">
            Currently looking for new opportunities to build scalable architectures. Ready to architect the next generation of resilient systems.
          </p>
          
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="btn-nike w-fit text-xl px-12 py-6"
          >
            PING ME NOW
          </a>
        </div>

        {/* Links Array */}
        <div className="flex flex-col gap-6 w-full lg:max-w-md ml-auto">
          <a 
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="nike-panel group flex justify-between items-center bg-nike-white hover:bg-nike-volt border-none text-black"
          >
            <span className="font-nike text-4xl font-bold uppercase tracking-widest">GITHUB</span>
            <span className="font-nike text-4xl transition-transform group-hover:translate-x-2">→</span>
          </a>
          
          <a 
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="nike-panel group flex justify-between items-center"
          >
            <span className="font-nike text-4xl font-bold uppercase tracking-widest text-nike-white group-hover:text-nike-volt">LINKEDIN</span>
            <span className="font-nike text-4xl text-nike-white group-hover:text-nike-volt transition-transform group-hover:translate-x-2">→</span>
          </a>
          
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="nike-panel group flex justify-between items-center"
          >
            <span className="font-nike text-4xl font-bold uppercase tracking-widest text-nike-white group-hover:text-nike-volt">EMAIL</span>
            <span className="font-nike text-4xl text-nike-white group-hover:text-nike-volt transition-transform group-hover:translate-x-2">→</span>
          </a>
        </div>

      </div>
    </motion.div>
  );
};

export default Contact;