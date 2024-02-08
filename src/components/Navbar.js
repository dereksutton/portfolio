import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import logo from '../assets/DerekSutton.png';
import '../App.css';

const Navbar = ({ selectedSection, setSelectedSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1280);
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

    const handleNavClick = (section) => {
        setSelectedSection(section);
        closeMenu();
    }

    const renderMobileMenu = () => {
        return (
            <Menu right isOpen={menuOpen} onStateChange={handleStateChange}>
                {/* Close Button */}
                <button className="close-button" onClick={closeMenu}>
                    X
                </button>

                {/* Menu Items */}
                    <a onClick={() => handleNavClick('Home')} className="menu-item active:text-customCoral focus:text-customCoral">Home</a>
                    <a onClick={() => handleNavClick('About')} className="menu-item active:text-customCoral focus:text-customCoral">About</a>
                    <a onClick={() => handleNavClick('Portfolio')} className="menu-item active:text-customCoral focus:text-customCoral">Portfolio</a>
                    <a onClick={() => handleNavClick('Skills')} className="menu-item active:text-customCoral focus:text-customCoral">Skills</a>
                    <a onClick={() => handleNavClick('Contact')} className="menu-item active:text-customCoral focus:text-customCoral">Contact</a>
                    <a onClick={closeMenu} href="/path/to/your/cv.pdf" target="_blank" rel="noopener noreferrer" className="menu-item mx-6 my-8 px-4 py-2 brand-coral text-white font-bold text-lg hover:bg-gray-400 rounded-full">Download CV</a>
            </Menu>
        );
    };

    const renderDesktopMenu = () => {
        return (
            <>
                <div className="hidden xl:flex gap-8">
                    <a onClick={() => handleNavClick('Home')} className="font-bold text-lg hover:text-customCoral">Home</a>
                    <a onClick={() => handleNavClick('About')} className="font-bold text-lg hover:text-customCoral">About</a>
                    <a onClick={() => handleNavClick('Portfolio')} className="font-bold text-lg hover:text-customCoral">Portfolio</a>
                    <a onClick={() => handleNavClick('Skills')} className="font-bold text-lg hover:text-customCoral">Skills</a>
                    <a onClick={() => handleNavClick('Contact')} className="font-bold text-lg hover:text-customCoral">Contact</a>
                </div>
                <div>
                    <a href="/path/to/your/cv.pdf" target="_blank" rel="noopener noreferrer" className="download-cv-button mr-8 px-4 py-2 brand-coral text-white font-bold text-lg hover:bg-gray-400 rounded-full">Download CV</a>
                </div>
            </>
        );
    };

    return (
        <nav className="flex items-center justify-between bg-black text-white p-2">
                <div className="logo">
                    <img src={logo} alt="Logo" className="navbar-logo h-28" />
                </div>
                {isMobile ? renderMobileMenu() : renderDesktopMenu()}
        </nav>
    );
};

export default Navbar;