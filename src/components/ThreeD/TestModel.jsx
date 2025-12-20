import React, { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Model({ path, scrollRotation }) {
  const { scene } = useGLTF(path);
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    const x = state.pointer.x;
    const y = state.pointer.y;

    const mouseRotateX = -y * 0.02;
    const mouseRotateY = x * 0.02;

    // Combine mouse parallax with scroll-based tilt
    const targetX = mouseRotateX + scrollRotation;
    const targetY = mouseRotateY;

    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      targetX,
      0.1
    );
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      targetY,
      0.1
    );
  });

  return <primitive ref={ref} object={scene} scale={5.8} />;
}

export default function TestModel() {
  const [scrollRotation, setScrollRotation] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=40vh",
      scrub: 1,
      onUpdate: (self) => {
        const tiltAmount = -0.08 * self.progress;
        setScrollRotation(tiltAmount);
      },
    });

    return () => scrollTrigger.kill();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100vw", height: "100vh", background: "#191919" }}
    >
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 45,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          toneMapping: THREE.LinearToneMapping,
          toneMappingExposure: 0.2,
          antialias: true,
        }}
      >
        <ambientLight intensity={0.35} color="#ffffff" />

        {/* Right side light - Light greenish-gray */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={2.8}
          color="#ADBFAC"
        />

        {/* Left side light - Dark greenish-gray */}
        <directionalLight
          position={[-5, 5, 5]}
          intensity={2.8}
          color="#434B42"
        />

        {/* Bottom light */}
        <directionalLight
          position={[0, -3, 2]}
          intensity={0.8}
          color="#4a5568"
        />

        <Suspense fallback={null}>
          <group position={[0.8, -0.6, 0.3]}>
            <Model
              path="/abc-designs/models/stone.glb"
              scrollRotation={scrollRotation}
            />

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

          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
