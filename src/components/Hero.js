import React from 'react';
import heroImage from '../assets/head-split.png';

const Hero = () => {

    return (
      <div className="bg-white text-black min-h-screen flex flex-col md:flex-row items-center justify-center px-4">
        <div className="hidden md:flex md:flex-1 justify-center">
          <div className="w-full md:w-auto md:max-w-md">
            <h1 className="text-4xl font-bold text-center md:text-center">designer</h1>
            <p className="text-lg text-center md:text-center py-4">Visual Designer & Branding Expert, dedicated to crafting compelling brand identities and visual narratives.</p>
          </div>
        </div>

      <img src={heroImage} alt="Headshot" className="w-full md:w-1/2 max-w-sm md:max-w-lg lg:max-w-xl mt-0 mb-0 md:mb-0 rounded-[25%]" />

      <div className="hidden md:flex md:flex-1 justify-center">
        <div className="w-full md:w-auto md:max-w-md">
          <h1 className="text-4xl font-bold text-center md:text-center">{"<developer>"}</h1>
          <p className="text-lg text-center md:text-center py-4">Full-Stack Developer focused on clean, efficient code for high-performance software solutions.</p>
        </div>
      </div>
  
        {/* Mobile layout text, visible only on mobile */}
        <div className="md:hidden flex justify-between items-center w-full px-4">
          <div className="text-center">
            <h1 className="text-4xl pb-3 font-bold">designer</h1>
            <p className="text-md">Visual Designer & Branding Expert, dedicated to crafting compelling brand identities and visual narratives.</p>
          </div>
          
          {/* This is the vertical line divider */}
          <div className="border-l-2 border-gray-800 h-32 self-center mx-2"></div>
  
          <div className="text-center">
            <h1 className="text-4xl pl-2 pb-3 font-bold">{"<developer>"}</h1>
            <p className="text-md">Full-Stack Developer focused on clean, efficient code for high-performance software solutions.</p>
          </div>
        </div>
      </div>
    );
  };

  export default Hero;