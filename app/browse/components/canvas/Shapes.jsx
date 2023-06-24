"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useState } from "react";

export const Blob = ({ image }) => {
  const [isRotation, setRotation] = useState(true);
  const mesh = useRef();
  const imageTexture = useLoader(THREE.TextureLoader, image.src);
  const backOfTheCanvas = useLoader(
    THREE.TextureLoader,
    "https://raw.githubusercontent.com/wesiudev/blackbellart/main/client/src/common/images/backOfTheCanvas.png"
  );
  function calculateY(x) {
    return Math.sin(2.5 * Math.PI * 2 * x);
  }

  useFrame((state, delta) => {
    if (mesh.current && isRotation) {
      //rotation
      const rotationTime = state.clock.getElapsedTime(); // Get the elapsed time in seconds
      const rotation = calculateY(rotationTime / 55); // Calculate the rotation based on the elapsed time
      mesh.current.rotation.y = rotation;
    } else {
      mesh.current.rotation.y;
    }
  });
  return (
    <mesh ref={mesh} onClick={() => setRotation(0)}>
      <boxGeometry args={[2.5, 2.5, 0.2]} />
      <meshBasicMaterial attach="material-0" color="grey" />
      <meshBasicMaterial attach="material-1" color="grey" />
      <meshBasicMaterial attach="material-2" color="grey" />
      <meshBasicMaterial attach="material-3" color="grey" />
      <meshStandardMaterial attach="material-4" map={imageTexture} />
      <meshStandardMaterial attach="material-5" map={backOfTheCanvas} />
    </mesh>
  );
};
