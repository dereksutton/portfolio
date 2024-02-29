import React from 'react';
import aboutImg from '../assets/family-photo.jpg';
import aboutMe from '../assets/about-me.png';
import '../App.css';

const About = () => {
    return (
        <div className="flex flex-col-reverse xl:flex-row items-center justify-center min-h-screen bg-slate-200 px-4 py-8">
            {/* Text Content */}
            <div className="flex flex-col items-center md:w-2/3 lg:max-w-4/6 px-4/5 xl:px-28 mr-6">
                <img src={aboutMe} className="w-auto"></img>
                <p className="text-lg mt-4">
                    First and foremost, I'm a husband and a father, deeply committed to my family, which is my greatest joy in life. 
                    Together, we find our greatest happiness in exploring new places and experiencing new adventures.
                </p>
                <p className="text-lg mt-4">
                As a dynamic Brand Consultant and Full-Stack Developer, I bring a rich blend of artistic design proficiency
                and technical development skills to the digital realm. With extensive experience in managing diverse multimedia 
                projects and branding strategies, I have successfully led initiatives for a variety of clients, including Fortune 100 
                companies and government institutions. My journey in visual design has been marked by creating impactful marketing 
                collateral, ranging from logos to social media graphics.
                </p>
                <p className="text-lg mt-4">
                With a desire to expand my skill set, I ventured into Full-Stack Web Development, focusing on eCommerce and innovative 
                tech solutions. My projects include a user-friendly food truck locator app and an AI-based interview preparation tool.
                A graduate of the Georgia Tech Full-Stack Coding Bootcamp, I am proficient in frontend and backend development, database 
                management, and various design tools.
                </p>
                <p className="text-lg mt-4">
                I thrive in environments that require both creative vision and technical acumen, consistently delivering integrated solutions 
                that resonate with diverse audiences. My approach to digital solutions is not just about aesthetics or functionality, but the 
                seamless fusion of both, driving brand engagement and technological advancement.
                </p>
                <blockquote className="text-xl text-customCoral font-bold mt-6">"The journey is the reward." - Steve Jobs</blockquote>
            </div>

            {/* Image */}
            <div className="md:w-2/3 lg:w-2/3 xl:max-w-full m-4">
                <img src={aboutImg} alt="This is a photo of me with my wife and daughter on a beautiful spring day at the park." 
                className="w-full h-auto rounded-lg shadow-md"  />
            </div>
        </div>
    );
};

export default About;