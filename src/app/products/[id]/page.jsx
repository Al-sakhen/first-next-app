import Image from "next/image";
import Link from "next/link";
import React from "react";

// Server Side Component
async function page({ params }) {
    const { id } = await params;

    const data = await fetch(`https://dummyjson.com/products/${id}`);
    if (!data.ok) {
        throw new Error("Failed to fetch product details");
    }
    const product = await data.json();

    console.log(product); // Simulating fetching product details based on ID
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Navigation */}
                <Link
                    href="/products"
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
                    Back to Products
                </Link>

                {/* Product Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Product Image */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-2xl">
                            <Image
                                src={product.thumbnail}
                                alt={product.title}
                                width={700}
                                height={700}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                {product.category || "Product"}
                            </span>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6">
                        {/* Title */}
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                {product.title}
                            </h1>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-5 h-5 ${
                                                i <
                                                Math.floor(product.rating || 4)
                                                    ? "text-yellow-400"
                                                    : "text-gray-300 dark:text-gray-600"
                                            }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                    ({product.rating || 4.0}) •{" "}
                                    {product.stock || 0} in stock
                                </span>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline gap-4">
                            <span className="text-4xl font-bold text-gray-900 dark:text-white">
                                ${product.price}
                            </span>
                            {product.discountPercentage && (
                                <span className="text-lg text-gray-500 dark:text-gray-400 line-through">
                                    $
                                    {(
                                        product.price /
                                        (1 - product.discountPercentage / 100)
                                    ).toFixed(2)}
                                </span>
                            )}
                            {product.discountPercentage && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                                    {product.discountPercentage}% OFF
                                </span>
                            )}
                        </div>

                        {/* Description */}
                        <div className="prose dark:prose-invert">
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
                                Add to Cart
                            </button>
                            <button className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold py-4 px-8 rounded-xl transition-colors duration-200">
                                Buy Now
                            </button>
                        </div>

                        {/* Product Info */}
                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <div>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Brand
                                </dt>
                                <dd className="text-sm text-gray-900 dark:text-white">
                                    {product.brand || "Unknown"}
                                </dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    SKU
                                </dt>
                                <dd className="text-sm text-gray-900 dark:text-white">
                                    {product.sku || product.id}
                                </dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Weight
                                </dt>
                                <dd className="text-sm text-gray-900 dark:text-white">
                                    {product.weight || "N/A"}kg
                                </dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Warranty
                                </dt>
                                <dd className="text-sm text-gray-900 dark:text-white">
                                    {product.warrantyInformation || "1 Year"}
                                </dd>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;
export async function generateMetadata({ params }) {
    // asynchronous access of `params.id`.
    const { id } = await params;
    return {
        title: `Product ${id}`,
        description: `Details about product ${id}`,
    };
}
