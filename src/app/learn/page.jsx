"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ThreeBackground from "../components/ThreeBackground";

export default function Page() {
    const topics = [
        {
            title: "Next.js Fundamentals",
            description:
                "Learn the basics of Next.js including routing, components, and server-side rendering.",
            icon: "⚛️",
            color: "bg-blue-500",
            href: "/learn/installation",
        },
        {
            title: "React Components",
            description:
                "Master React components, hooks, and state management in modern applications.",
            icon: "🔧",
            color: "bg-green-500",
        },
        {
            title: "Styling with Tailwind",
            description:
                "Create beautiful, responsive designs with Tailwind CSS utility classes.",
            icon: "🎨",
            color: "bg-purple-500",
        },
        {
            title: "API Routes",
            description:
                "Build powerful APIs with Next.js API routes and serverless functions.",
            icon: "🔌",
            color: "bg-orange-500",
        },
        {
            title: "Deployment",
            description:
                "Deploy your Next.js applications to production with Vercel and other platforms.",
            icon: "🚀",
            color: "bg-pink-500",
        },
        {
            title: "Performance",
            description:
                "Optimize your applications for speed and user experience.",
            icon: "⚡",
            color: "bg-yellow-500",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <ThreeBackground variant="particles">
            <div className="min-h-screen relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <motion.h1
                            className="text-5xl md:text-6xl font-bold mb-6"
                            style={{
                                background:
                                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Learn Modern Web Development
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                        >
                            Master the latest web technologies with our
                            comprehensive learning resources. From Next.js
                            fundamentals to advanced deployment strategies.
                        </motion.p>
                    </motion.div>

                    {/* Learning Topics Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                    >
                        {topics.map((topic, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 5,
                                    transition: { duration: 0.2 },
                                }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
                                    <div className="p-8">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className={`w-12 h-12 ${topic.color} rounded-lg flex items-center justify-center text-white text-2xl mb-4`}
                                        >
                                            {topic.icon}
                                        </motion.div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {topic.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                                            {topic.description}
                                        </p>
                                        {topic.href ? (
                                            <Link
                                                href={topic.href}
                                                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors group/link"
                                            >
                                                Get Started
                                                <svg
                                                    className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </Link>
                                        ) : (
                                            <span className="inline-flex items-center text-gray-400 dark:text-gray-500 font-medium">
                                                Coming Soon
                                                <svg
                                                    className="ml-2 w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Featured Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="relative group mb-16"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white backdrop-blur-sm">
                            <div className="max-w-3xl mx-auto text-center">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                    className="text-3xl font-bold mb-4"
                                >
                                    Ready to Start Learning?
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1, duration: 0.6 }}
                                    className="text-xl mb-8 text-blue-100"
                                >
                                    Begin your journey with Next.js fundamentals
                                    and build amazing web applications.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2, duration: 0.6 }}
                                >
                                    <Link
                                        href="/learn/installation"
                                        className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200 hover:scale-105 shadow-lg group/btn"
                                    >
                                        Start Learning
                                        <svg
                                            className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                                            />
                                        </svg>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                number: "50+",
                                label: "Learning Modules",
                                color: "text-blue-600 dark:text-blue-400",
                            },
                            {
                                number: "100%",
                                label: "Hands-on Practice",
                                color: "text-green-600 dark:text-green-400",
                            },
                            {
                                number: "24/7",
                                label: "Learning Support",
                                color: "text-purple-600 dark:text-purple-400",
                            },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
                            >
                                <div
                                    className={`text-4xl font-bold ${stat.color} mb-2`}
                                >
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 dark:text-gray-300">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </ThreeBackground>
    );
}
