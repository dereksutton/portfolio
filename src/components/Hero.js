import React from 'react';
import heroImage from '../assets/head-split.png';

const Hero = () => {

    return (
      <div className="bg-white text-black flex flex-col xl:flex-row items-center justify-center py-10 px-4">
        <div className="hidden xl:flex justify-center">
          <div className="w-full md:w-auto md:max-w-md mr-8">
            <h1 className="text-4xl font-bold text-center md:text-center">designer</h1>
            <p className="text-lg text-center md:text-center py-4">Visual Designer & Branding Expert, dedicated to crafting compelling brand identities and visual narratives.</p>
          </div>
        </div>

      <img src={heroImage} alt="Headshot" className="w-full max-w-lg lg:max-w-lg xl:max-w-xl mt-0 mb-0 rounded-[25%]" />

      <div className="hidden xl:flex justify-center">
        <div className="w-full md:w-auto md:max-w-md ml-8">
          <h1 className="text-4xl font-bold text-center md:text-center">{"<developer>"}</h1>
          <p className="text-lg text-center md:text-center py-4">Full-Stack Developer focused on clean, efficient code for high-performance, innovative software solutions.</p>
        </div>
      </div>
  
        {/* Mobile layout text, visible only on mobile */}
        <div className="xl:hidden hero-text-container w-full">
          <div className="hero-text-section border-r border-black pr-1">
            <h1 className="text-3xl pb-3 font-bold">designer</h1>
            <p className="text-sm mr-2">Visual Designer & Branding Expert, dedicated to crafting compelling brand identities and visual narratives.</p>
          </div>
  
          <div className="hero-text-section pl-1">
            <h1 className="text-3xl pb-3 font-bold">{"<developer>"}</h1>
            <p className="text-sm ml-2">Full-Stack Developer focused on clean, efficient code for high-performance, innovative software solutions.</p>
          </div>
        </div>
      </div>
    );
  };

  export default Hero;