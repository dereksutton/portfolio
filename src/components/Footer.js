import React from 'react';
import '../App.css';

const Footer = () => {
    return (
        <footer className="bg-black text-white text-center p-4">
            <div className="container mx-auto">
                <div className="flex justify-center font-bold space-x-4">
                    <a href="https://github.com" className="hover:text-customCoral">GitHub</a>
                    <a href="https://linkedin.com" className="hover:text-customCoral">LinkedIn</a>
                </div>
            <p className="text-customCoral mt-2">&copy; {new Date().getFullYear()} Derek Sutton. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;