import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function Model({ path }) {
  const { scene } = useGLTF(path);
  const ref = useRef();

  // Mouse Parallax Logic
  useFrame((state) => {
    if (!ref.current) return;

    const x = state.pointer.x;
    const y = state.pointer.y;

    // Movement multipliers (40 degrees approx)
    const rotateX = -y * 0.02;
    const rotateY = x * 0.02;

    // Smooth animation
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      rotateX,
      0.1
    );
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      rotateY,
      0.1
    );
  });

  return <primitive ref={ref} object={scene} scale={5.8} />;
}

export default function TestModel() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#191919" }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        // MATCHING YOUR SCREENSHOT SETTINGS:
        // 1. Tone Mapping = Linear
        // 2. Exposure = -2.41 (In ThreeJS, approx 0.2 value)
        gl={{
          toneMapping: THREE.LinearToneMapping,
          toneMappingExposure: 0.2, // Low exposure makes it dark/moody
          antialias: true,
        }}
      >
        {/* LIGHTING MATCHING SCREENSHOT */}

        {/* Ambient: Intensity 0.22, Color White */}
        <ambientLight intensity={0.22} color="#ffffff" />

        {/* Direct: Intensity 2.8, Color Greenish (#71d088) */}
        {/* Positioned top-right to create shadows */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={2.8}
          // color="#71d088"
          color="#cfd7c6"
        />

        <Suspense fallback={null}>
          <group position={[0.8, -0.6, 0.3]}>
            <Model path="/abc-designs/models/stone.glb" />

            {/* Shadow on floor - kept dark/black for realism */}
            <ContactShadows
              position={[0, -2.5, 0]}
              opacity={0.6}
              scale={10}
              blur={2.5}
              far={4}
              resolution={256}
              color="#000000"
            />
          </group>

          {/* Environment set to 'Neutral' as per screenshot */}
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
