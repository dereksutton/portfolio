import React from 'react';
import heroImage from '../assets/head-split.png';
import designerImg from '../assets/designer.png';
import developerImg from '../assets/developer.png';
import developerImg2 from '../assets/developer2.png';
import { motion } from 'framer-motion';


const Home = () => {

  const imageVariants = {
    hidden: {
      scale: 0.9,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const swoopLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  const swoopRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  const mobileContentVariants = {
    hidden: {
      y: 30,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

    return (
      <div className="bg-white text-black flex flex-col xl:flex-row items-center justify-center pt-4 px-4">
        <motion.div 
          className="hidden xl:flex justify-center"
          variants={swoopLeft}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col items-center w-full md:w-auto md:max-w-md mr-8">
            <img src={designerImg} className="w-80 h-auto"></img>
            <p className="text-lg text-center md:text-center py-4">Visual Designer & Branding Expert, dedicated to crafting compelling brand identities and visual narratives.</p>
          </div>
        </motion.div>

        <motion.img 
          src={heroImage}
          alt="My Professional Headshot"
          className="w-full max-w-lg lg:max-w-lg xl:max-w-xl mt-0 mb-0 rounded-[25%]"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1,
            ease: "easeOut"
          }}
        />

      
        <motion.div 
          className="hidden xl:flex justify-center"
          variants={swoopRight}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col items-center w-full md:w-auto md:max-w-md ml-8">
            <img src={developerImg} className="w-80 h-auto"></img>
            <p className="text-lg text-center md:text-center py-4">Full-Stack Developer focused on clean, efficient code for high-performance, innovative software solutions.</p>
          </div>
        </motion.div>
  
        {/* Mobile layout text, visible only on mobile */}
        <motion.div
          className="xl:hidden hero-text-container w-full"
          variants={mobileContentVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-text-section">
            <div className="flex justify-center">
              <img src={designerImg} className="w-44 md:w-60 h-auto border-r border-black mr-2"></img>
              <img src={developerImg2} className="w-44 md:w-60 h-auto"></img>
            </div>
            <p className="text-md pt-4 lg:w-auto">
              I'm a versatile, resilient, adaptable professional - skilled in both visual design and full-stack development, 
              adept at creating impactful brand narratives and developing efficient, high-performance software. My expertise lies in
              seamlessly integrating creative design with technical innovation to deliver comprehensive digital solutions.
            </p>
          </div>
        </motion.div>  
      </div>
    );
  };

  export default Home;