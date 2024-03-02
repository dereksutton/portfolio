import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const cardVariants = {
        initial: {
            opacity: 0,
            scale: 0.8
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.5 }
        },
        expanded: {
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: 'fixed',
            zIndex: 10,
            borderRadius: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="p-8">
            <h2 className="text-2xl font-bold underline mb-8 text-center">Portfolio</h2>
            {!selectedCategory && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    <motion.div
                        className="bg-blue-500 p-10 text-white rounded-lg shadow-lg cursor-pointer"
                        onClick={() => setSelectedCategory('design')}
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        Design
                    </motion.div>
                    <motion.div
                        className="bg-green-500 p-10 text-white rounded-lg shadow-lg cursor-pointer"
                        onClick={() => setSelectedCategory('development')}
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        Development
                    </motion.div>
                </div>
            )}
            {/* Projects will go here */}
            <AnimatePresence>
                {selectedCategory && (
                    <motion.div
                    className="bg-gray-100 p-10"
                    variants={cardVariants}
                    initial="initial"
                    animate="expanded"
                    exit="exit"
                    >
                        Category Content!
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Portfolio;