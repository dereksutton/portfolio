import React from 'react';
import logo from '../assets/DS.png';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-4 py-0 bg-black text-white">
            <div className="logo">
                <img src={logo} alt="Hero" className="h-28 w-28" />
            </div>
            <div className="flex gap-8">
                <a href="#home" className="font-bold text-lg hover:text-gray-400">Home</a>
                <a href="#about" className="font-bold text-lg hover:text-gray-400">About</a>
                <a href="#portfolio" className="font-bold text-lg hover:text-gray-400">Portfolio</a>
                <a href="#skills" className="font-bold text-lg hover:text-gray-400">Skills</a>
                <a href="#contact" className="font-bold text-lg hover:text-gray-400">Contact</a>
            </div>
            <div>
                {/* Social icons */}
            </div>
        </nav>
    );
};

export default Navbar;