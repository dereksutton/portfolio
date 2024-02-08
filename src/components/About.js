import React from 'react';
import aboutImg from '../assets/family-photo.jpg';

const About = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen bg-white px-4 py-8">
            {/* Text Content */}
            <div className="md:w-1/2 lg:max-w-lg px-4">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-lg mb-4">
                    This is a placeholder sentence. I'm writing a second sentence here. This third sentence is to make it a full paragraph.
                </p>
                <p className="text-lg">
                    This is another placeholder sentence. I'm writing a second sentence here. This third sentence is to make it a full paragraph.
                </p>
            </div>

            {/* Image */}
            <div className="md:w-1/2 lg:max-w-lg">
                <img src={aboutImg} alt="This is a photo of me with my wife and daughter on a beautiful spring day at the park." 
                className="w-full h-auto rounded-lg shadow-md"  />
            </div>
        </div>
    );
};

export default About;