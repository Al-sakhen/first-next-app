"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ModernHero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () =>
            window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
                    }}
                />
            </div>

            {/* Floating elements */}
            <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"
            />
            <motion.div
                variants={{
                    animate: {
                        y: [10, -10, 10],
                        x: [-5, 5, -5],
                        transition: {
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    },
                }}
                animate="animate"
                className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-15 blur-2xl"
            />
            <motion.div
                variants={{
                    animate: {
                        y: [-15, 15, -15],
                        transition: {
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    },
                }}
                animate="animate"
                className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 blur-xl"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    {/* Profile Image with 3D effect */}
       

                    {/* Main heading */}
                    <motion.div variants={itemVariants}>
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold mb-6"
                            style={{
                                background:
                                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Ahmad Alsakhen
                        </motion.h1>
                    </motion.div>

                    {/* Animated subtitle */}
                    <motion.div variants={itemVariants}>
                        <motion.h2
                            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            <TypewriterText
                                texts={[
                                    "Full Stack Developer",
                                    "Laravel Expert",
                                    "React Specialist",
                                    "Vue.js Developer",
                                    "API Architect",
                                ]}
                            />
                        </motion.h2>
                    </motion.div>

                    {/* Tech stack badges */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-3 mb-8"
                    >
                        {[
                            "Laravel",
                            "React",
                            "Vue.js",
                            "Livewire",
                            "Tailwind CSS",
                            "Bootstrap",
                        ].map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 1.5 + index * 0.1,
                                    duration: 0.5,
                                }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow:
                                    "0 20px 40px rgba(59, 130, 246, 0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                        >
                            View My Work
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 font-semibold rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Get In Touch
                        </motion.button>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.8 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
                        >
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

function TypewriterText({ texts }) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const text = texts[currentTextIndex];
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    setCurrentText(text.substring(0, currentText.length + 1));
                    if (currentText === text) {
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                } else {
                    setCurrentText(text.substring(0, currentText.length - 1));
                    if (currentText === "") {
                        setIsDeleting(false);
                        setCurrentTextIndex(
                            (prevIndex) => (prevIndex + 1) % texts.length
                        );
                    }
                }
            },
            isDeleting ? 50 : 100
        );

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentTextIndex, texts]);

    return (
        <span>
            {currentText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-current ml-1"
            />
        </span>
    );
}
