"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Box, Torus } from "@react-three/drei";

export function FloatingGeometry() {
    const sphereRef = useRef();
    const boxRef = useRef();
    const torusRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Animate sphere
        if (sphereRef.current) {
            sphereRef.current.position.y = Math.sin(time) * 0.5;
            sphereRef.current.rotation.x = time * 0.5;
            sphereRef.current.rotation.y = time * 0.3;
        }

        // Animate box
        if (boxRef.current) {
            boxRef.current.position.x = Math.cos(time * 0.8) * 2;
            boxRef.current.position.z = Math.sin(time * 0.8) * 2;
            boxRef.current.rotation.x = time * 0.4;
            boxRef.current.rotation.z = time * 0.2;
        }

        // Animate torus
        if (torusRef.current) {
            torusRef.current.position.x = Math.sin(time * 0.6) * 3;
            torusRef.current.position.y = Math.cos(time * 0.4) * 2;
            torusRef.current.rotation.x = time * 0.3;
            torusRef.current.rotation.y = time * 0.7;
        }
    });

    return (
        <group>
            {/* Floating Sphere */}
            <Sphere ref={sphereRef} args={[0.5, 32, 32]} position={[2, 0, -3]}>
                <meshStandardMaterial
                    color="#3b82f6"
                    transparent
                    opacity={0.3}
                    roughness={0.1}
                    metalness={0.8}
                />
            </Sphere>

            {/* Floating Box */}
            <Box ref={boxRef} args={[0.8, 0.8, 0.8]} position={[-2, 1, -4]}>
                <meshStandardMaterial
                    color="#8b5cf6"
                    transparent
                    opacity={0.3}
                    roughness={0.2}
                    metalness={0.6}
                />
            </Box>

            {/* Floating Torus */}
            <Torus
                ref={torusRef}
                args={[0.8, 0.3, 16, 32]}
                position={[0, -2, -5]}
            >
                <meshStandardMaterial
                    color="#10b981"
                    transparent
                    opacity={0.3}
                    roughness={0.1}
                    metalness={0.9}
                />
            </Torus>
        </group>
    );
}
