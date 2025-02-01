import React from 'react';
import Tilt from 'react-parallax-tilt'; // Use default import
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient green-pink-gradient-glow  p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
            <img src={icon} alt={title} 
            className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] text-center font-bold'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("","", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Oh, what a thrilling journey this is! As a passionate AI and ML enthusiast, I’m diving headfirst into the fascinating world of Deep Learning and Machine Learning, driven by a dream to create ADAS systems and humanoids that truly work wonders for humanity. Imagine technology as a helping hand, a guiding light, a companion transforming lives for the better—wow, the possibilities are endless! With curiosity as my compass and determination as my engine, I’m on a mission to turn imagination into reality, solving real-world problems and inspiring others to dream big. After all, isn’t that what innovation is all about? Here’s to building a future where machines and humans thrive together in perfect harmony!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(About, "about");
