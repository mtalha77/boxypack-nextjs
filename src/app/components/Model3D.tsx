"use client";

import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import ErrorBoundary from "./ErrorBoundary";

interface Model3DProps {
  modelPath: string;
  className?: string;
  onModelReady?: () => void;
  onError?: () => void;
}

// Convert Cloudinary public ID to full URL
const getModelUrl = (path: string) => {
  // Handle paths that might have spaces or incorrect formatting
  let cleanPath = path.trim();

  // If it starts with /models/, it's a local path but we don't have models locally
  // So convert it to Cloudinary format
  if (cleanPath.startsWith("/models/")) {
    // Extract filename and convert to Cloudinary format
    cleanPath = cleanPath
      .replace("/models/", "")
      .replace(".glb", "")
      .replace(/\s+/g, "_");
  }

  // Replace spaces with underscores for Cloudinary
  cleanPath = cleanPath.replace(/\s+/g, "_");

  if (cleanPath.startsWith("http")) {
    return cleanPath; // Already a full URL
  } else {
    // Cloudinary public ID - construct full URL
    return `https://res.cloudinary.com/du5lyrqvz/image/upload/v1759511215/${cleanPath}.glb`;
  }
};

function Model({ modelPath }: { modelPath: string }) {
  const modelUrl = getModelUrl(modelPath);
  const { scene } = useGLTF(modelUrl);
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const baseScaleRef = useRef<number>(1);

  // Preload the model if it's valid
  React.useEffect(() => {
    if (modelUrl && !modelUrl.includes("/models/")) {
      try {
        useGLTF.preload(modelUrl);
      } catch (err) {
        console.warn("Failed to preload model:", err);
      }
    }
  }, [modelUrl]);

  // Reset state when modelPath changes
  React.useEffect(() => {
    setIsLoaded(false);
    setHovered(false);
  }, [modelPath]);

  // Center and scale the model when it loads
  React.useEffect(() => {
    if (scene && !isLoaded) {
      try {
        // Clone the scene to avoid modifying the original
        const clonedScene = scene.clone();

        // Calculate bounding box
        const box = new THREE.Box3().setFromObject(clonedScene);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        // Center the model
        clonedScene.position.sub(center);

        // Scale the model to fit nicely in the container (target size of 3.0 units for larger display)
        const maxDimension = Math.max(size.x, size.y, size.z);
        const targetSize = 3.0;
        const scale = (targetSize / maxDimension) * 1.5;
        clonedScene.scale.setScalar(scale);
        baseScaleRef.current = scale;

        // Update the original scene
        scene.position.copy(clonedScene.position);
        scene.scale.copy(clonedScene.scale);

        setIsLoaded(true);
      } catch (err) {
        console.error("Error processing 3D model:", err);
        setIsLoaded(false);
      }
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

  if (!isLoaded || !scene) {
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

const Model3D: React.FC<Model3DProps> = ({
  modelPath,
  className = "",
  onModelReady,
  onError,
}) => {
  const [isModelReady, setIsModelReady] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

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
      <div
        className={`w-full h-full ${className} flex items-center justify-center`}
      >
        <div className="text-gray-500">Loading 3D Model...</div>
      </div>
    );
  }

  // If there's an error, just show a placeholder
  if (hasError) {
    return (
      <div
        className={`w-full h-full ${className} flex items-center justify-center`}
      >
        <div className="text-gray-400 text-sm">3D Model unavailable</div>
      </div>
    );
  }

  return (
    <div className={`w-full h-full ${className}`}>
      <ErrorBoundary
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-gray-400 text-sm">3D Model unavailable</div>
          </div>
        }
        onError={handleError}
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          style={{ background: "transparent" }}
          gl={{ antialias: true, alpha: true }}
          onCreated={handleModelReady}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          <hemisphereLight intensity={0.4} />
          {isModelReady && (
            <Suspense fallback={null}>
              <Model key={modelPath} modelPath={modelPath} />
            </Suspense>
          )}
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI - Math.PI / 6}
            minDistance={4}
            maxDistance={6}
          />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default Model3D;
