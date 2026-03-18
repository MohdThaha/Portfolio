import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROFILE_IMG, SKILLS } from '../constants';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const allSkills = SKILLS.flatMap(s => s.items).slice(0, 20);

  return (
    <div className="w-full min-h-screen bg-background relative flex flex-col overflow-hidden">
      
      {/* Massive Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] flex flex-col justify-center overflow-hidden">
        <h1 className="text-[20vw] font-nike leading-none font-bold uppercase whitespace-nowrap">THAHA</h1>
        <h1 className="text-[20vw] font-nike leading-none font-bold uppercase whitespace-nowrap text-transparent" style={{ WebkitTextStroke: '2px white' }}>ENGINEER</h1>
      </div>

      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12 flex-grow flex flex-col lg:flex-row items-center justify-center pt-24 pb-12 z-10 gap-12">
        
        {/* Left Column: Aggressive Typography */}
        <div className="flex-1 flex flex-col justify-center order-2 lg:order-1 w-full relative z-20">
          <div className="overflow-hidden mb-4">
            <motion.p 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
              className="font-nike uppercase text-nike-volt tracking-[0.2em] text-lg lg:text-xl font-bold"
            >
              System Architect // Backend Specialist
            </motion.p>
          </div>
          
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
              className="text-huge"
            >
              MOHAMMED
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
              className="text-huge text-transparent"
              style={{ WebkitTextStroke: '2px white' }}
            >
              THAHA
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-6 items-center"
          >
            <Link to="/projects" className="btn-nike inline-flex group">
              <span>View Builds</span>
              <FaArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link to="/about" className="btn-nike-outline">
              The Engine Room
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Hero Image with Mask Reveal */}
        <div className="flex-1 w-full order-1 lg:order-2 flex justify-center lg:justify-end relative h-[50vh] lg:h-[80vh] min-h-[400px]">
          <motion.div 
            initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
            className="w-full max-w-[600px] h-full relative"
          >
            {/* The Image Box */}
            <div className="absolute inset-0 border-r-8 border-b-8 border-nike-volt z-0 translate-x-4 translate-y-4"></div>
            <img 
              src={PROFILE_IMG} 
              alt="Mohammed Thaha" 
              className="w-full h-full object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Decorative Overlay Box */}
            <div className="absolute top-8 -left-8 bg-nike-white text-black font-nike uppercase font-bold px-4 py-2 text-2xl z-20 shadow-2xl tracking-widest hidden md:block transform -rotate-90 origin-bottom-left">
              EST. 2019
            </div>
          </motion.div>
        </div>

      </div>

      {/* Industrial Marquee Strip */}
      <div className="w-full marquee-container mt-auto">
        <div className="marquee-content animate-marquee">
          {allSkills.map((skill, index) => (
            <span key={index} className="font-nike uppercase text-2xl font-black px-8">
              {skill}
            </span>
          ))}
          {allSkills.map((skill, index) => (
            <span key={`dup-${index}`} className="font-nike uppercase text-2xl font-black px-8">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
