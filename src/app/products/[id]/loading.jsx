const loading = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-6xl mx-auto px-4 py-8 animate-pulse">
                {/* Navigation skeleton */}
                <div className="flex items-center gap-2 mb-8">
                    <div className="w-4 h-4 bg-blue-200 dark:bg-blue-800 rounded"></div>
                    <div className="h-4 bg-blue-200 dark:bg-blue-800 rounded w-32"></div>
                </div>

                {/* Product Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Product Image Section */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-2xl">
                            <div className="w-full h-96 lg:h-[500px] bg-gray-300 dark:bg-gray-600"></div>
                        </div>

                        {/* Category Badge skeleton */}
                        <div className="absolute top-4 left-4">
                            <div className="h-6 w-20 bg-blue-200 dark:bg-blue-800 rounded-full"></div>
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="space-y-6">
                        {/* Title and Rating */}
                        <div>
                            <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded mb-2 w-3/4"></div>
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-5 h-5 bg-yellow-200 dark:bg-yellow-800 rounded"
                                        ></div>
                                    ))}
                                </div>
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
                            </div>
                        </div>

                        {/* Price Section */}
                        <div className="flex items-baseline gap-4">
                            <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-32"></div>
                            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                            <div className="h-6 bg-red-200 dark:bg-red-800 rounded-full w-16"></div>
                        </div>

                        {/* Description */}
                        <div className="space-y-3">
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-11/12"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 h-14 bg-blue-300 dark:bg-blue-700 rounded-xl"></div>
                            <div className="flex-1 h-14 bg-gray-300 dark:bg-gray-600 rounded-xl"></div>
                        </div>

                        {/* Product Info Grid */}
                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                            {[...Array(4)].map((_, i) => (
                                <div key={i}>
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 mb-1"></div>
                                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-20"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default loading;
