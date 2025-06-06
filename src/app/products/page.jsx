import Link from "next/link";
import Image from "next/image";
import React from "react";

export const metadata = {
    title: "Products - Modern Next.js App",
    description: "Explore our amazing collection of products",
};

async function page() {
    const data = await fetch("https://dummyjson.com/products");
    const { products } = await data.json();
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Our Products
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Discover our carefully curated collection of amazing products designed to enhance your lifestyle.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <Link
                            href={`/products/${product.id}`}
                            key={product.id}
                            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:scale-105"
                        >
                            {/* Product Image */}
                            <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
                                <Image
                                    src={product.thumbnail}
                                    alt={product.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                {product.discountPercentage && (
                                    <div className="absolute top-3 left-3">
                                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                            -{Math.round(product.discountPercentage)}%
                                        </span>
                                    </div>
                                )}
                                <div className="absolute top-3 right-3">
                                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2 py-1 rounded-full">
                                        {product.category}
                                    </span>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                                    {product.description}
                                </p>
                                
                                {/* Rating */}
                                <div className="flex items-center mb-3">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-4 h-4 ${
                                                    i < Math.floor(product.rating)
                                                        ? 'text-yellow-400'
                                                        : 'text-gray-300 dark:text-gray-600'
                                                }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                                        ({product.rating})
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                            ${product.price}
                                        </span>
                                        {product.discountPercentage && (
                                            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                                                ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                        {product.stock} left
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}                </div>
            </div>
        </div>
    );
}

export default page;
