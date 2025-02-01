import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-start gap-5`}
      >
        <div className="relative flex flex-row items-start gap-5">
          <div className="relative flex flex-col justify-start items-center">
            <div className="w-6 h-6 rounded-full bg-[#915eff] z-10" />
            <div className="w-1 sm:h-48 h-28 violet-gradient" />

          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Mehul</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am an AI developer, <br className='sm:block hidden' />who wants to contribute in
              the domain of AI and Robotics.
            </p>
          </div>
        </div>
        <ComputersCanvas />

        <div className='absolute w-full flex justify-center items-center xs:bottom-1 bottom-32'>
          <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.dev 
                animate={{
                  y: [0,24,0]
                }} 
                transition={{
                  duration: 1.5,
                  repeatType: 'loop',
                  repeat: Infinity,
                }}
                className='w-3 h-3 rounded-full bg-secondary'  
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
