import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import logo from '../assets/DerekSutton.png';
import '../App.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleStateChange = (state) => {
        setMenuOpen(state.isOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const renderMobileMenu = () => {
        return (
            <Menu right isOpen={menuOpen} onStateChange={handleStateChange}>
                <a onClick={closeMenu} className="menu-item" href="#home">Home</a>
                <a onClick={closeMenu} className="menu-item" href="#about">About</a>
                <a onClick={closeMenu} className="menu-item" href="#portfolio">Portfolio</a>
                <a onClick={closeMenu} className="menu-item" href="#skills">Skills</a>
                <a onClick={closeMenu} className="menu-item" href="#contact">Contact</a>
                <a onClick={closeMenu} href="/path/to/your/cv.pdf" target="_blank" rel="noopener noreferrer" className="menu-item mx-6 px-4 py-2 brand-coral text-white font-bold text-lg hover:bg-gray-700 rounded-full">Download CV</a>
            </Menu>
        );
    };

    const renderDesktopMenu = () => {
        return (
            <>
                <div className="flex gap-8">
                    <a href="#home" className="font-bold text-lg hover:text-customCoral">Home</a>
                    <a href="#about" className="font-bold text-lg hover:text-customCoral">About</a>
                    <a href="#portfolio" className="font-bold text-lg hover:text-customCoral">Portfolio</a>
                    <a href="#skills" className="font-bold text-lg hover:text-customCoral">Skills</a>
                    <a href="#contact" className="font-bold text-lg hover:text-customCoral">Contact</a>
                </div>
                <div>
                    <a href="/path/to/your/cv.pdf" target="_blank" rel="noopener noreferrer" className="mx-6 px-4 py-2 brand-coral text-white font-bold text-lg hover:bg-gray-700 rounded-full">Download CV</a>
                </div>
            </>
        );
    };

    return (
        <nav className="flex items-center justify-between px-8 py-0 bg-black text-white">
            <div className="logo">
                <img src={logo} alt="Hero" className="h-36" />
            </div>
            {isMobile ? renderMobileMenu() : renderDesktopMenu()}
        </nav>
    );
};

export default Navbar;