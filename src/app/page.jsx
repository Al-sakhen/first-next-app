import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Home - Modern Next.js App",
    description: "Welcome to our modern Next.js application with beautiful UI",
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
                            Welcome to{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                NextApp
                            </span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            A modern Next.js application showcasing beautiful UI components, 
                            seamless navigation, and cutting-edge web technologies.
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

            {/* Features Section */}
            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Everything you need
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Built with modern technologies and best practices for optimal performance.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600 text-white">
                                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                    Lightning Fast
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                                    Built with Next.js 15 for optimal performance and user experience.
                                </dd>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-purple-600 text-white">
                                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                                    </svg>
                                </div>
                                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                    Responsive Design
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                                    Beautiful UI that works perfectly on all devices and screen sizes.
                                </dd>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-green-600 text-white">
                                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                    Modern Stack
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                                    Using the latest technologies including Tailwind CSS and React.
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
                            Ready to get started?
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
                            Explore our products and discover what makes our application special.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="/products"
                                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-lg hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover:scale-105"
                            >
                                View Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
