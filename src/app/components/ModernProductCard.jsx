"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ModernProductCard({ product, index }) {
    const [isHovered, setIsHovered] = useState(false);

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateY: -15,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateY: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
            },
        },
    };

    const hoverVariants = {
        hover: {
            scale: 1.05,
            rotateY: 5,
            z: 50,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="perspective-1000"
        >
            <Link href={`/products/${product.id}`} className="block">
                <motion.div
                    variants={hoverVariants}
                    className="relative group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 transform-gpu"
                >
                    {/* Glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

                    {/* Product Image */}
                    <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
                        <Image
                            src={product.thumbnail}
                            alt={product.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        {/* Discount Badge */}
                        {product.discountPercentage && (
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{
                                    delay: index * 0.1 + 0.3,
                                    duration: 0.5,
                                }}
                                className="absolute top-3 left-3"
                            >
                                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    -{Math.round(product.discountPercentage)}%
                                </span>
                            </motion.div>
                        )}

                        {/* Category Badge */}
                        <motion.div
                            initial={{ scale: 0, rotate: 180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                delay: index * 0.1 + 0.4,
                                duration: 0.5,
                            }}
                            className="absolute top-3 right-3"
                        >
                            <span className="bg-blue-100/90 dark:bg-blue-900/90 backdrop-blur-sm text-blue-800 dark:text-blue-200 text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                                {product.category}
                            </span>
                        </motion.div>

                        {/* Floating hearts on hover */}
                        {isHovered && (
                            <motion.div
                                initial={{ scale: 0, y: 0 }}
                                animate={{ scale: 1, y: -20 }}
                                exit={{ scale: 0, y: -40 }}
                                className="absolute bottom-3 right-3"
                            >
                                <span className="text-red-500 text-xl">❤️</span>
                            </motion.div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="p-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                        >
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {product.title}
                            </h3>

                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                                {product.description}
                            </p>

                            {/* Rating */}
                            <div className="flex items-center mb-3">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                delay:
                                                    index * 0.1 + 0.6 + i * 0.1,
                                            }}
                                            className={`text-sm ${
                                                i < Math.floor(product.rating)
                                                    ? "text-yellow-400"
                                                    : "text-gray-300 dark:text-gray-600"
                                            }`}
                                        >
                                            ⭐
                                        </motion.span>
                                    ))}
                                </div>
                                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                                    ({product.rating})
                                </span>
                            </div>

                            {/* Price */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                                        ${product.price}
                                    </span>
                                    {product.discountPercentage && (
                                        <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                                            $
                                            {(
                                                product.price /
                                                (1 -
                                                    product.discountPercentage /
                                                        100)
                                            ).toFixed(2)}
                                        </span>
                                    )}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                    </svg>
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    );
}
