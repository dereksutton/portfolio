import React from 'react';
import heroImage from '../assets/head-split.png';

const Home = () => {

    return (
      <div className="bg-white text-black flex flex-col xl:flex-row items-center justify-center pt-4 px-4">
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
          <div className="hero-text-section pr-1">
            <div className="flex justify-center">
              <h1 className="text-4xl pb-2 pr-6 border-r border-black font-bold">designer</h1>
              <h1 className="text-4xl pb-2 pl-6 font-bold">developer</h1>
            </div>
            <p className="text-md pt-4 lg:w-auto">I am a versatile professional - skilled in both visual design and full-stack development, 
            adept at creating impactful brand narratives and developing efficient, high-performance software. My expertise lies in
            seamlessly integrating creative design with technical innovation to deliver comprehensive digital solutions.</p>
          </div>
        </div>
      </div>
    );
  };

  export default Home;