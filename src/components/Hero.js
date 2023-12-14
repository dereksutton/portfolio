import React from 'react';
import heroImage from '../assets/head-split.png';

const Hero = () => {
    return (
      <div className="bg-white text-black min-h-screen flex flex-col md:flex-row items-center justify-center px-4">
        <div className="hidden md:flex md:flex-1 justify-center">
          <div className="w-full md:w-auto md:max-w-md"> {/* This sets a max-width for the text container */}
            <h1 className="text-4xl font-bold text-center md:text-center">designer</h1>
            <p className="text-lg text-center md:text-center py-4">UI/UX Designer with a passion for designing elegant user experiences.</p>
          </div>
        </div>

      <img src={heroImage} alt="Headshot" className="w-full md:w-1/3 max-w-xs md:max-w-md lg:max-w-lg mb-8 md:mb-0 rounded-[25%]" />

      <div className="hidden md:flex md:flex-1 justify-center">
        <div className="w-full md:w-auto md:max-w-md"> {/* This sets a max-width for the text container */}
          <h1 className="text-4xl font-bold text-center md:text-center">{"<developer/>"}</h1>
          <p className="text-lg text-center md:text-center py-4">Full-Stack Developer focused on writing clean, efficient code.</p>
        </div>
      </div>
  
        {/* Mobile layout text, visible only on mobile */}
        <div className="md:hidden flex justify-between items-center w-full px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold">designer</h1>
            <p className="text-lg">UI/UX Designer with a passion for designing elegant user experiences.</p>
          </div>
          
          {/* This is the vertical line divider */}
          <div className="border-l-2 border-gray-800 h-32 self-center mx-2"></div>
  
          <div className="text-center">
            <h1 className="text-4xl font-bold">developer</h1>
            <p className="text-lg">Full-Stack Developer focused on writing clean, efficient code.</p>
          </div>
        </div>
      </div>
    );
  };

  export default Hero;