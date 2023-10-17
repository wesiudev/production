import * as THREE from "three";
import { useRef, useState, useEffect } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { useTexture, shaderMaterial } from "@react-three/drei";
import img1 from "@/public/1.png";
import img2 from "@/public/2.png";
import img3 from "@/public/3.png";
import img4 from "@/public/4.png";
import img5 from "@/public/5.png";
import img6 from "@/public/6.png";
import img7 from "@/public/7.png";
import img8 from "@/public/8.png";
import img9 from "@/public/9.png";
import img10 from "@/public/10.png";
import img11 from "@/public/11.png";
import img12 from "@/public/12.png";
import img13 from "@/public/13.png";
import img14 from "@/public/14.png";
import img15 from "@/public/15.png";
import img16 from "@/public/16.png";
import img17 from "@/public/17.png";
import img18 from "@/public/18.png";
import img19 from "@/public/19.png";
import img20 from "@/public/20.png";
import img21 from "@/public/21.png";

export const ImageFadeMaterial = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 0,
    tex: undefined,
    tex2: undefined,
    disp: undefined,
  },
  ` varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,
  ` varying vec2 vUv;
    uniform sampler2D tex;
    uniform sampler2D tex2;
    uniform sampler2D disp;
    uniform float _rot;
    uniform float dispFactor;
    uniform float effectFactor;
    void main() {
      vec2 uv = vUv;
      vec4 disp = texture2D(disp, uv);
      vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
      vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
      vec4 _texture = texture2D(tex, distortedPosition);
      vec4 _texture2 = texture2D(tex2, distortedPosition2);
      vec4 finalTexture = mix(_texture, _texture2, dispFactor);
      gl_FragColor = finalTexture;
      #include <tonemapping_fragment>
      #include <encodings_fragment>
    }`
);

extend({ ImageFadeMaterial });

export default function FadingImage() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
  ];

  const [firstImage, setFirstImage] = useState(1);
  const [secondImage, setSecondImage] = useState(2);
  const ref = useRef();
  const [texture1, texture2, dispTexture] = useLoader(THREE.TextureLoader, [
    images[firstImage],
    images[secondImage],
    `/displacement1.png`,
  ]);
  const [hovered, setHover] = useState(false);
  useFrame(() => {
    ref.current.dispFactor = THREE.MathUtils.lerp(
      ref.current.dispFactor,
      hovered ? 1 : 0,
      0.075
    );
  });
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hovered) {
        setHover(1);
        setTimeout(() => {
          setHover(0);
        }, 5000);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [hovered]);

  useEffect(() => {
    // Load a new random image for the first image when hovered in
    if (hovered) {
      setFirstImage(Math.floor(Math.floor(Math.random() * 21) + 1));
    }
  }, [hovered]);

  useEffect(() => {
    // Load a new random image for the second image when hovered out
    if (!hovered) {
      setSecondImage(Math.floor(Math.random() * 21 + 1));
    }
  }, [hovered]);

  function handleFirstImage() {
    setHover(true);
  }

  function handleSecondImage() {
    setHover(false);
  }

  return (
    <mesh onPointerOver={handleFirstImage} onPointerOut={handleSecondImage}>
      <planeGeometry />
      <imageFadeMaterial
        ref={ref}
        tex={texture1}
        tex2={texture2}
        disp={dispTexture}
        toneMapped={false}
      />
    </mesh>
  );
}
