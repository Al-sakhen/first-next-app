import Link from "next/link";

export const metadata = {
    title: "Learn - Modern Next.js App",
    description: "Learn about modern web development with Next.js",
};

export default function Page() {
    const topics = [
        {
            title: "Next.js Fundamentals",
            description: "Learn the basics of Next.js including routing, components, and server-side rendering.",
            icon: "⚛️",
            color: "bg-blue-500",
            href: "/learn/installation"
        },
        {
            title: "React Components",
            description: "Master React components, hooks, and state management in modern applications.",
            icon: "🔧",
            color: "bg-green-500"
        },
        {
            title: "Styling with Tailwind",
            description: "Create beautiful, responsive designs with Tailwind CSS utility classes.",
            icon: "🎨",
            color: "bg-purple-500"
        },
        {
            title: "API Routes",
            description: "Build powerful APIs with Next.js API routes and serverless functions.",
            icon: "🔌",
            color: "bg-orange-500"
        },
        {
            title: "Deployment",
            description: "Deploy your Next.js applications to production with Vercel and other platforms.",
            icon: "🚀",
            color: "bg-pink-500"
        },
        {
            title: "Performance",
            description: "Optimize your applications for speed and user experience.",
            icon: "⚡",
            color: "bg-yellow-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Learn Modern Web Development
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Master the latest web technologies with our comprehensive learning resources. 
                        From Next.js fundamentals to advanced deployment strategies.
                    </p>
                </div>

                {/* Learning Topics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {topics.map((topic, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 group hover:scale-105"
                        >
                            <div className="p-8">
                                <div className={`w-12 h-12 ${topic.color} rounded-lg flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    {topic.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {topic.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    {topic.description}
                                </p>
                                {topic.href ? (
                                    <Link
                                        href={topic.href}
                                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                                    >
                                        Get Started
                                        <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                ) : (
                                    <span className="inline-flex items-center text-gray-400 dark:text-gray-500 font-medium">
                                        Coming Soon
                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Featured Section */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Ready to Start Learning?
                        </h2>
                        <p className="text-xl mb-8 text-blue-100">
                            Begin your journey with Next.js fundamentals and build amazing web applications.
                        </p>
                        <Link
                            href="/learn/installation"
                            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200 hover:scale-105 shadow-lg"
                        >
                            Start Learning
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                        <div className="text-gray-600 dark:text-gray-300">Learning Modules</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
                        <div className="text-gray-600 dark:text-gray-300">Hands-on Practice</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
                        <div className="text-gray-600 dark:text-gray-300">Learning Support</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
