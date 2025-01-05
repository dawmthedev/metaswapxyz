"use client";

import React, { useRef, useState, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, Mesh, AdditiveBlending } from "three";
import { OrbitControls } from "@react-three/drei";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, [breakpoint]);

  return isMobile;
}

export default function Scene() {
  const meshRef = useRef<Mesh>(null);
  const particlesRef = useRef<Points>(null);
  const [isDragging, setIsDragging] = useState(false);

  const particleData = useMemo(() => {
    const count = 2000;
    const radius = 0.5;
    const positions = new Float32Array(count * 3);
    const origins = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      origins[i * 3] = x;
      origins[i * 3 + 1] = y;
      origins[i * 3 + 2] = z;

      speeds[i] = 0.5 + Math.random() * 2;

      colors[i * 3] = Math.random(); // R
      colors[i * 3 + 1] = Math.random(); // G
      colors[i * 3 + 2] = Math.random(); // B
    }

    return { positions, origins, speeds, colors };
  }, []);

  // Scale .6 on mobile, 1 on desktop
  const isMobile = useIsMobile();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setScale(isMobile ? 0.6 : 1);
  }, [isMobile]);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const elapsedTime = clock.getElapsedTime();
      meshRef.current.rotation.x = elapsedTime * 0.3;
      meshRef.current.rotation.y = elapsedTime * 0.5;
    }

    if (particlesRef.current && isDragging) {
      const positions = particlesRef.current.geometry.attributes.position
        .array as Float32Array;
      const origins = particleData.origins;
      const { speeds } = particleData;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += Math.sin(clock.getElapsedTime() * speeds[i / 5]) * 0.01;
        positions[i + 1] +=
          Math.cos(clock.getElapsedTime() * speeds[i / 3]) * 0.02;
        positions[i + 2] +=
          Math.sin(clock.getElapsedTime() * speeds[i / 3]) * 0.02;

        const distanceSquared =
          Math.pow(positions[i] - origins[i], 2) +
          Math.pow(positions[i + 1] - origins[i + 1], 2) +
          Math.pow(positions[i + 2] - origins[i + 2], 2);

        if (distanceSquared > 1) {
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
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <directionalLight position={[-10, -10, -10]} intensity={0.5} />

      <mesh ref={meshRef} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          metalness={1}
          roughness={0.05}
          transmission={0.3}
          thickness={0.5}
          envMapIntensity={1.5}
          color="white"
        />
      </mesh>

      {isDragging && (
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={particleData.positions}
              count={particleData.positions.length / 3}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-color"
              array={particleData.colors}
              count={particleData.colors.length / 3}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.1}
            sizeAttenuation
            transparent
            opacity={0.8}
            vertexColors={true}
            blending={AdditiveBlending}
          />
        </points>
      )}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping={true}
        dampingFactor={0.05}
        rotateSpeed={0.7}
        minPolarAngle={Math.PI / 3} // Changed from Math.PI / 2
        maxPolarAngle={Math.PI / 1.5} // Changed from Math.PI / 2
        onStart={() => setIsDragging(true)}
        onEnd={() => setIsDragging(false)}
      />
    </>
  );
}
