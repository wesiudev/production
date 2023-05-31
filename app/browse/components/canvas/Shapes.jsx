"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useState } from "react";

export const Blob = ({ image }) => {
  const [rotation, setRotation] = useState(0.009);
  const mesh = useRef();
  const imageTexture = useLoader(THREE.TextureLoader, image.src);
  useFrame(() => (mesh.current.rotation.y += rotation));
  return (
    <mesh ref={mesh} onClick={() => setRotation(0)}>
      <boxGeometry args={[3, 3, 0.2]} />
      <meshBasicMaterial attach="material-0" color="grey" />
      <meshBasicMaterial attach="material-1" color="grey" />
      <meshBasicMaterial attach="material-2" color="grey" />
      <meshBasicMaterial attach="material-3" color="grey" />
      <meshStandardMaterial attach="material-4" map={imageTexture} />
      <meshStandardMaterial attach="material-5" color="grey" />
    </mesh>
  );
};
