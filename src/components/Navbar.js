import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import logo from '../assets/DerekSutton.png';
import '../App.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
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
                {/* Close Button */}
                <button className="close-button" onClick={closeMenu}>
                    X
                </button>

                {/* Menu Items */}
                    <a onClick={closeMenu} className="menu-item active:text-customCoral focus:text-customCoral" href="#home">Home</a>
                    <a onClick={closeMenu} className="menu-item active:text-customCoral focus:text-customCoral" href="#about">About</a>
                    <a onClick={closeMenu} className="menu-item active:text-customCoral focus:text-customCoral" href="#portfolio">Portfolio</a>
                    <a onClick={closeMenu} className="menu-item active:text-customCoral focus:text-customCoral" href="#skills">Skills</a>
                    <a onClick={closeMenu} className="menu-item active:text-customCoral focus:text-customCoral" href="#contact">Contact</a>
                    <a onClick={closeMenu} href="/path/to/your/cv.pdf" target="_blank" rel="noopener noreferrer" className="menu-item mx-6 my-8 px-4 py-2 brand-coral text-white font-bold text-lg hover:bg-gray-400 rounded-full">Download CV</a>
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
                    <a href="/path/to/your/cv.pdf" target="_blank" rel="noopener noreferrer" className="download-cv-button mx-6 px-4 py-2 brand-coral text-white font-bold text-lg hover:bg-gray-400 rounded-full">Download CV</a>
                </div>
            </>
        );
    };

    return (
        <nav className="flex items-center justify-between px-6 py-0 bg-black text-white">
            <div className="logo">
                <img src={logo} alt="Hero" className="navbar-logo h-36" />
            </div>
            {isMobile ? renderMobileMenu() : renderDesktopMenu()}
        </nav>
    );
};

export default Navbar;