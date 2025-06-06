import Link from "next/link";

export const metadata = {
    title: "Installation - Learn Next.js",
    description:
        "Learn how to install and set up Next.js for modern web development",
};

const page = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Navigation */}
                <Link
                    href="/learn"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors mb-8 group"
                >
                    <svg
                        className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Back to Learn
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Next.js Installation Guide
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Get started with Next.js by setting up your development
                        environment and creating your first application.
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-8">
                    {/* Prerequisites */}
                    <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center text-sm font-bold mr-3">
                                1
                            </span>
                            Prerequisites
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Before installing Next.js, make sure you have the
                            following installed on your system:
                        </p>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li className="flex items-center">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Node.js 18.0 or later
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                npm, yarn, or pnpm package manager
                            </li>
                        </ul>
                    </section>

                    {/* Installation */}
                    <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <span className="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center text-sm font-bold mr-3">
                                2
                            </span>
                            Create a New Next.js App
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Use the create-next-app command to set up a new
                            Next.js project:
                        </p>
                        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <code className="text-green-400 text-sm font-mono">
                                npx create-next-app@latest my-app
                            </code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mt-4">
                            This command will create a new directory called
                            "my-app" with all the necessary files and
                            dependencies.
                        </p>
                    </section>

                    {/* Project Structure */}
                    <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center text-sm font-bold mr-3">
                                3
                            </span>
                            Project Structure
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Your new Next.js project will have the following
                            structure:
                        </p>
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm">
                            <div className="text-gray-700 dark:text-gray-300">
                                my-app/
                                <br />
                                ├── src/
                                <br />
                                │ └── app/
                                <br />
                                │ ├── layout.jsx
                                <br />
                                │ └── page.jsx
                                <br />
                                ├── public/
                                <br />
                                ├── package.json
                                <br />
                                └── next.config.js
                            </div>
                        </div>
                    </section>

                    {/* Start Development */}
                    <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <span className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 rounded-lg flex items-center justify-center text-sm font-bold mr-3">
                                4
                            </span>
                            Start Development Server
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Navigate to your project directory and start the
                            development server:
                        </p>
                        <div className="space-y-2">
                            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-green-400 text-sm font-mono">
                                    cd my-app
                                </code>
                            </div>
                            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-green-400 text-sm font-mono">
                                    npm run dev
                                </code>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mt-4">
                            Open{" "}
                            <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                                http://localhost:3000
                            </span>{" "}
                            in your browser to see your new Next.js application!
                        </p>
                    </section>
                </div>

                {/* Next Steps */}
                <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-4">
                        🎉 Congratulations!
                    </h2>
                    <p className="text-blue-100 mb-6">
                        You've successfully set up your Next.js development
                        environment. Now you're ready to start building amazing
                        web applications!
                    </p>
                    <Link
                        href="/learn"
                        className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200 hover:scale-105"
                    >
                        Continue Learning
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
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default page;
