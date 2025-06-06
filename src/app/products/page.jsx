"use client";

import { useEffect, useState } from "react";
import ThreeBackground from "../components/ThreeBackground";
import ModernProductCard from "../components/ModernProductCard";
import { motion } from "framer-motion";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await fetch("https://dummyjson.com/products");
                const result = await data.json();
                setProducts(result.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
                />
            </div>
        );
    }

    return (
        <ThreeBackground variant="default">
            <div className="min-h-screen relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Modern Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
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
                            Our Products
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                        >
                            Discover our carefully curated collection of amazing
                            products designed to enhance your lifestyle with
                            modern technology and beautiful design.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="flex justify-center items-center space-x-8 mt-8"
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                                    {products.length}+
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Products
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                                    12+
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Categories
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                                    4.8
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Rating
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <ModernProductCard
                                key={product.id}
                                product={product}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </ThreeBackground>
    );
}
