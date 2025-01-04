"use client";

import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Points,
  Mesh,
  BufferGeometry,
  Float32BufferAttribute,
  AdditiveBlending,
} from "three";
import { OrbitControls } from "@react-three/drei";

export default function Scene() {
  const meshRef = useRef<Mesh>(null); // Explicitly typing as Mesh
  const particlesRef = useRef<Points>(null); // Explicitly typing as Points
  const [particlesVisible, setParticlesVisible] = useState(false);

  // Create random particle positions and speeds
  const particleData = useMemo(() => {
    const count = 100; // Number of particles
    const positions = [];
    const speeds = [];
    const origins = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 0.5; // X origin
      const y = (Math.random() - 0.5) * 0.5; // Y origin
      const z = (Math.random() - 0.5) * 0.5; // Z origin

      positions.push(x, y, z); // Initial positions
      speeds.push(Math.random() * 0.02 + 0.01); // Speed for each particle
      origins.push(x, y, z); // Save origin positions
    }
    return {
      positions: new Float32Array(positions),
      speeds,
      origins: new Float32Array(origins),
    };
  }, []);

  // Animate particles
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const elapsedTime = clock.getElapsedTime();

      // Rotate the Icosahedron
      meshRef.current.rotation.x = elapsedTime * 0.3;
      meshRef.current.rotation.y = elapsedTime * 0.5;
    }

    if (particlesRef.current && particlesVisible) {
      const positions = particlesRef.current.geometry.attributes.position
        .array as Float32Array;
      const origins = particleData.origins;
      const { speeds } = particleData;

      for (let i = 0; i < positions.length; i += 3) {
        // Expand particles dynamically
        positions[i] += Math.sin(clock.getElapsedTime() * speeds[i / 3]) * 0.02; // X
        positions[i + 1] +=
          Math.cos(clock.getElapsedTime() * speeds[i / 3]) * 0.02; // Y
        positions[i + 2] +=
          Math.sin(clock.getElapsedTime() * speeds[i / 3]) * 0.02; // Z

        // Check if particle has expanded too far
        const distanceSquared =
          Math.pow(positions[i] - origins[i], 2) +
          Math.pow(positions[i + 1] - origins[i + 1], 2) +
          Math.pow(positions[i + 2] - origins[i + 2], 2);

        if (distanceSquared > 1) {
          // Reset particle to origin
          positions[i] = origins[i];
          positions[i + 1] = origins[i + 1];
          positions[i + 2] = origins[i + 2];
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <directionalLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Icosahedron Geometry */}
      <mesh
        ref={meshRef}
        onPointerOver={() => setParticlesVisible(true)} // Show particles on hover
        onPointerOut={() => setParticlesVisible(false)} // Hide particles when not hovering
      >
        <icosahedronGeometry args={[0.5, 0]} />
        <meshPhysicalMaterial
          metalness={1} // Chrome effect
          roughness={0.05} // Smooth for high reflectivity
          transmission={0.3} // Glassy effect
          thickness={0.5} // Polished look
          envMapIntensity={1.5} // Reflectivity
          color="white" // Base color
        />
      </mesh>

      {/* Dynamic Particle Effect */}
      {particlesVisible && (
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={particleData.positions}
              count={particleData.positions.length / 3}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.1} // Size of each particle
            sizeAttenuation
            transparent
            opacity={0.8}
            vertexColors={false} // Option for colorful particles
            color="#ff69b4" // Magical pink color
            blending={AdditiveBlending} // Glow effect
          />
        </points>
      )}

      {/* Camera Controls */}
      <OrbitControls enableZoom={false} />
    </>
  );
}
