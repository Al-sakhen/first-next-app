"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { FloatingGeometry } from "./FloatingGeometry";
import { ParticleField } from "./ParticleField";

export default function ThreeBackground({ children, variant = "default" }) {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Three.js Canvas Background */}
            <div className="absolute inset-0 z-0">
                <Canvas
                    camera={{ position: [0, 0, 5], fov: 75 }}
                    style={{ background: "transparent" }}
                >
                    <Suspense fallback={null}>
                        {variant === "hero" && (
                            <>
                                <FloatingGeometry />
                                <ParticleField count={100} />
                            </>
                        )}
                        {variant === "default" && <ParticleField count={50} />}
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={0.8} />
                    </Suspense>
                </Canvas>
            </div>

            {/* Content overlay */}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
