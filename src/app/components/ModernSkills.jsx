"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ModernSkills() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const skillCategories = [
        {
            id: "frontend",
            title: "Frontend",
            icon: "🎨",
            gradient: "from-blue-500 to-cyan-500",
            skills: [
                { name: "React", level: 95, icon: "⚛️" },
                { name: "Vue.js", level: 90, icon: "💚" },
                { name: "Livewire", level: 85, icon: "⚡" },
                { name: "JavaScript", level: 92, icon: "🟨" },
            ],
        },
        {
            id: "backend",
            title: "Backend",
            icon: "⚙️",
            gradient: "from-purple-500 to-pink-500",
            skills: [
                { name: "Laravel", level: 95, icon: "🔴" },
                { name: "PHP", level: 90, icon: "🐘" },
                { name: "APIs", level: 88, icon: "🔗" },
                { name: "Database Design", level: 85, icon: "🗄️" },
            ],
        },
        {
            id: "styling",
            title: "Styling & UI",
            icon: "🎭",
            gradient: "from-green-500 to-teal-500",
            skills: [
                { name: "Tailwind CSS", level: 92, icon: "💨" },
                { name: "Bootstrap", level: 88, icon: "🅱️" },
                { name: "Responsive Design", level: 90, icon: "📱" },
                { name: "CSS3", level: 85, icon: "🎨" },
            ],
        },
        {
            id: "tools",
            title: "Tools & More",
            icon: "🛠️",
            gradient: "from-orange-500 to-red-500",
            skills: [
                { name: "Git", level: 88, icon: "📚" },
                { name: "Docker", level: 80, icon: "🐳" },
                { name: "Agile/Scrum", level: 85, icon: "🔄" },
                { name: "Testing", level: 82, icon: "🧪" },
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: -15,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
                <div className="absolute top-0 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        Skills & Expertise
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Crafting exceptional digital experiences with modern
                        technologies and best practices
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.id}
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.05,
                                rotateY: 5,
                                z: 50,
                            }}
                            onHoverStart={() => setHoveredCard(category.id)}
                            onHoverEnd={() => setHoveredCard(null)}
                            className="relative group perspective-1000"
                        >
                            <div
                                className={`relative p-6 rounded-2xl bg-gradient-to-br ${category.gradient} transform-gpu transition-all duration-300 hover:shadow-2xl`}
                            >
                                {/* Glassmorphism overlay */}
                                <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-2xl" />

                                <div className="relative z-10">
                                    {/* Category header */}
                                    <div className="text-center mb-6">
                                        <motion.div
                                            animate={
                                                hoveredCard === category.id
                                                    ? {
                                                          rotate: 360,
                                                          scale: 1.2,
                                                      }
                                                    : { rotate: 0, scale: 1 }
                                            }
                                            transition={{ duration: 0.6 }}
                                            className="text-4xl mb-3"
                                        >
                                            {category.icon}
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {category.title}
                                        </h3>
                                    </div>

                                    {/* Skills list */}
                                    <div className="space-y-4">
                                        {category.skills.map((skill, index) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: index * 0.1,
                                                }}
                                                className="group/skill"
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center space-x-2">
                                                        <span className="text-lg">
                                                            {skill.icon}
                                                        </span>
                                                        <span className="text-white font-medium text-sm">
                                                            {skill.name}
                                                        </span>
                                                    </div>
                                                    <span className="text-white/80 text-xs font-bold">
                                                        {skill.level}%
                                                    </span>
                                                </div>

                                                {/* Animated progress bar */}
                                                <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{
                                                            width: `${skill.level}%`,
                                                        }}
                                                        transition={{
                                                            duration: 1,
                                                            delay: index * 0.1,
                                                            ease: "easeOut",
                                                        }}
                                                        viewport={{
                                                            once: true,
                                                        }}
                                                        className="h-full bg-white/80 rounded-full relative overflow-hidden"
                                                    >
                                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Glow effect */}
                                <div
                                    className={`absolute -inset-0.5 bg-gradient-to-br ${category.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
