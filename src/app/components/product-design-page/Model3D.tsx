'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface Model3DProps {
  modelPath: string;
  className?: string;
  onModelReady?: () => void;
}

function Model({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath);
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const baseScaleRef = useRef<number>(1);

  // Preload the model to ensure it's available
  useGLTF.preload(modelPath);

  // Reset state when modelPath changes
  React.useEffect(() => {
    setIsLoaded(false);
    setHovered(false);
  }, [modelPath]);

  // Center and scale the model when it loads
  React.useEffect(() => {
    if (scene && !isLoaded) {
      // Clone the scene to avoid modifying the original
      const clonedScene = scene.clone();
      
      // Calculate bounding box
      const box = new THREE.Box3().setFromObject(clonedScene);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      
      // Center the model
      clonedScene.position.sub(center);
      
      // Scale the model to fit nicely in the container (target size of 2 units)
      const maxDimension = Math.max(size.x, size.y, size.z);
      const targetSize = 2;
      const scale = targetSize / maxDimension * 1;
      clonedScene.scale.setScalar(scale);
      baseScaleRef.current = scale;
      
      // Update the original scene
      scene.position.copy(clonedScene.position);
      scene.scale.copy(clonedScene.scale);
      
      setIsLoaded(true);
    }
  }, [scene, isLoaded]);

  useFrame((state) => {
    if (meshRef.current && isLoaded) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      // Apply hover effect on top of the base scale
      const hoverScale = hovered ? 1.02 : 1;
      meshRef.current.scale.setScalar(baseScaleRef.current * hoverScale);
    }
  });

  if (!isLoaded) {
    return null;
  }

  return (
    <group
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <primitive object={scene} />
    </group>
  );
}

const Model3D: React.FC<Model3DProps> = ({ modelPath, className = "", onModelReady }) => {
  const [isModelReady, setIsModelReady] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component only renders on client side
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleModelReady = () => {
    setIsModelReady(true);
    onModelReady?.();
  };

  // Don't render on server side to prevent hydration issues
  if (!isMounted) {
    return (
      <div className={`w-full h-full ${className} flex items-center justify-center bg-gray-100 rounded-lg`}>
        <div className="text-gray-500">Loading 3D Model...</div>
      </div>
    );
  }

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
        onCreated={handleModelReady}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <hemisphereLight intensity={0.4} />
        {isModelReady && <Model key={modelPath} modelPath={modelPath} />}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
          minDistance={4}
          maxDistance={6}
        />
      </Canvas>
    </div>
  );
};

export default Model3D;
