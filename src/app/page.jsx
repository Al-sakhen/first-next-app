import ThreeBackground from "./components/ThreeBackground";
import ModernHero from "./components/ModernHero";
import ModernSkills from "./components/ModernSkills";
import Link from "next/link";

export const metadata = {
    title: "Ahmad Alsakhen - Full Stack Developer",
    description:
        "Full Stack Developer specializing in Laravel, React, Vue.js, and modern web technologies. Building amazing web applications with beautiful user experiences.",
};

export default function Home() {
    return (
        <div className="relative">
            {/* Hero Section with Three.js Background */}
            <ThreeBackground variant="hero">
                <ModernHero />
            </ThreeBackground>

            {/* About Me Section with Modern Skills */}
            <section className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                            About Me
                        </h2>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                I'm a passionate{" "}
                                <strong>Full Stack Developer</strong> with
                                expertise in modern web technologies. I
                                specialize in creating scalable, performant, and
                                user-friendly applications that solve real-world
                                problems.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                With a strong foundation in both frontend and
                                backend development, I bring ideas to life using
                                cutting-edge technologies like{" "}
                                <strong>Laravel</strong>, <strong>React</strong>
                                , <strong>Vue.js</strong>, and modern CSS
                                frameworks.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Skills Section */}
                <ModernSkills />
            </section>

            {/* Features Section */}
            <section className="pt-24 relative overflow-hidden">
                {/* Background with subtle 3D effects */}
                <ThreeBackground variant="default">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                What I Build
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                                Specializing in full-stack development with
                                modern technologies and best practices.
                            </p>
                        </div>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                                <div className="flex flex-col items-center text-center group">
                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                                        <svg
                                            className="h-8 w-8"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                        Web Applications
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                                        Modern, responsive web applications
                                        using React, Vue.js, and Laravel.
                                    </dd>
                                </div>
                                <div className="flex flex-col items-center text-center group">
                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 text-white transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                                        <svg
                                            className="h-8 w-8"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                        RESTful APIs
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                                        Robust backend APIs with Laravel for
                                        seamless data management and
                                        integration.
                                    </dd>
                                </div>
                                <div className="flex flex-col items-center text-center group">
                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-700 text-white transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                                        <svg
                                            className="h-8 w-8"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                        Mobile-First Design
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                                        Beautiful, responsive designs with
                                        Tailwind CSS and Bootstrap frameworks.
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </ThreeBackground>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800">
                <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Let's Work Together
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
                            Ready to bring your ideas to life? Let's create
                            something amazing together with modern web
                            technologies.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="/products"
                                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-lg hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover:scale-105"
                            >
                                View My Work
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
