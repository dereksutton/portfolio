import React from 'react';
import '../App.css';

const Footer = () => {
    return (
        <footer className="bg-black text-white text-center p-4">
            <div className="container mx-auto">
                <p className="text-customCoral">&copy; {new Date().getFullYear()} Derek Sutton. All rights reserved.</p>
                <div className="flex justify-center font-bold space-x-4 mt-2">
                    <a href="https://github.com" className="hover:text-customCoral">GitHub</a>
                    <a href="https://linkedin.com" className="hover:text-customCoral">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;