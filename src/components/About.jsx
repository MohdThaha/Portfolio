import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, PERSONAL_INFO } from '../constants';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 lg:py-24"
    >
      <div className="flex flex-col lg:flex-row gap-16 mb-24">
        
        {/* Massive Text Header */}
        <div className="flex-1">
          <motion.h2 
            initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(4rem,8vw,8rem)] font-nike font-black uppercase leading-none tracking-tighter"
          >
            CORE
            <br />
            <span className="text-nike-volt">ENGINE</span>
          </motion.h2>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-2 w-32 bg-nike-white mt-8 origin-left"
          ></motion.div>
        </div>

        {/* Philosophy Block */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex flex-col justify-center border-l-4 border-nike-volt pl-8"
        >
          <p className="text-2xl md:text-3xl font-nike font-bold uppercase tracking-wide leading-tight mb-6">
            "{PERSONAL_INFO.philosophy}"
          </p>
          <p className="text-lg text-nike-gray max-w-xl">
            Focus heavily on SaaS Platforms, ERP Systems, and Microservices architectures. 
            Scaling systems isn't just about throwing more servers at the problem. It's about data integrity, observability, and resilient design. By utilizing advanced paradigms like event-sourcing, CQRS, and the SAGA pattern, I ensure systems are globally resilient.
          </p>
        </motion.div>
      </div>

      {/* Aggressive Grid for Skills */}
      <div className="mb-12">
        <h3 className="text-sub text-3xl mb-8 border-b-2 border-nike-darkgray pb-4">TECHNICAL ARSENAL</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skillGroup, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className={`nike-panel flex flex-col ${idx === 3 || idx === 4 ? 'lg:col-span-2' : ''}`}
            >
              <h4 className="font-nike text-3xl uppercase font-bold text-nike-white mb-6 tracking-wide">
                {skillGroup.category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="font-sans font-bold text-sm tracking-wider uppercase px-4 py-2 border border-nike-darkgray hover:border-nike-volt hover:bg-nike-volt hover:text-black transition-all cursor-crosshair"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </motion.div>
  );
};

export default About;
