import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Ahmad Alsakhen - Full Stack Developer",
    description: "Full Stack Developer specializing in Laravel, React, Vue.js, and modern web technologies. Building amazing web applications with beautiful user experiences.",
};

export default function Home() {
    return (
        <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 min-h-screen">
            {/* Hero Section */}
            <section className="relative px-6 lg:px-8 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="mb-8">
                            <Image
                                className="mx-auto dark:invert"
                                src="/next.svg"
                                alt="Next.js logo"
                                width={200}
                                height={42}
                                priority
                            />
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                            Hi, I'm{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Ahmad Alsakhen
                            </span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Full Stack Developer passionate about creating modern web applications 
                            with cutting-edge technologies and beautiful user experiences.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="/products"
                                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
                            >
                                Explore Products
                            </Link>
                            <Link
                                href="/learn"
                                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                Learn more <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Me Section */}
            <section className="py-24 sm:py-32 bg-white dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            About Me
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            A passionate full stack developer with expertise in modern web technologies
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Profile Info */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                    AA
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Ahmad Alsakhen</h3>
                                    <p className="text-lg text-blue-600 dark:text-blue-400">Full Stack Developer</p>
                                </div>
                            </div>
                            
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                I'm a passionate full stack developer with extensive experience in building 
                                modern web applications. I love creating seamless user experiences and 
                                robust backend solutions using the latest technologies.
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                    Available for Projects
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                    Open to Opportunities
                                </span>
                            </div>
                        </div>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Frontend</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">React</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">Vue.js</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">Livewire</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Backend</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">Laravel</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">APIs</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">Database Design</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Styling</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">Tailwind CSS</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">Bootstrap</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">Responsive Design</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Tools & More</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">Git & GitHub</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">Docker</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">Agile/Scrum</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            What I Build
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Specializing in full-stack development with modern technologies and best practices.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600 text-white">
                                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                    Web Applications
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                                    Modern, responsive web applications using React, Vue.js, and Laravel.
                                </dd>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-purple-600 text-white">
                                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                    RESTful APIs
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                                    Robust backend APIs with Laravel for seamless data management and integration.
                                </dd>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-green-600 text-white">
                                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                    Mobile-First Design
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                                    Beautiful, responsive designs with Tailwind CSS and Bootstrap frameworks.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 dark:bg-blue-800">
                <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Let's Work Together
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
                            Ready to bring your ideas to life? Let's create something amazing together with modern web technologies.
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
