// import * as THREE from "three";
// import { useRef, useState } from "react";
// import { Canvas, extend, useFrame } from "@react-three/fiber";
// import { useTexture, shaderMaterial } from "@react-three/drei";

// export const ImageFadeMaterial = shaderMaterial(
//   {
//     effectFactor: 1.2,
//     dispFactor: 0,
//     tex: undefined,
//     tex2: undefined,
//     disp: undefined,
//   },
//   ` varying vec2 vUv;
//     void main() {
//       vUv = uv;
//       gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
//     }`,
//   ` varying vec2 vUv;
//     uniform sampler2D tex;
//     uniform sampler2D tex2;
//     uniform sampler2D disp;
//     uniform float _rot;
//     uniform float dispFactor;
//     uniform float effectFactor;
//     void main() {
//       vec2 uv = vUv;
//       vec4 disp = texture2D(disp, uv);
//       vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
//       vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
//       vec4 _texture = texture2D(tex, distortedPosition);
//       vec4 _texture2 = texture2D(tex2, distortedPosition2);
//       vec4 finalTexture = mix(_texture, _texture2, dispFactor);
//       gl_FragColor = finalTexture;
//       #include <tonemapping_fragment>
//       #include <encodings_fragment>
//     }`
// );

// extend({ ImageFadeMaterial });

// export default function FadingImage() {
//   const [firstImage, setFirstImage] = useState(1);
//   const [secondImage, setSecondImage] = useState(2);
//   const ref = useRef();
//   const [texture1, texture2, dispTexture] = useTexture([
//     `/${firstImage}.png`,
//     `${secondImage}.png`,
//     `/displacement${1}.png`,
//   ]);
//   const [hovered, setHover] = useState(false);
//   useFrame(() => {
//     ref.current.dispFactor = THREE.MathUtils.lerp(
//       ref.current.dispFactor,
//       hovered ? 1 : 0,
//       0.075
//     );
//   });
//   function handleFirstImage() {
//     setFirstImage(Math.floor(Math.random() * 7) + 1);
//     setHover(true);
//   }
//   function handleSecondImage() {
//     setSecondImage(Math.floor(Math.random() * 7) + 1);
//     setHover(false);
//   }
//   return (
//     <mesh onPointerOver={handleFirstImage} onPointerOut={handleSecondImage}>
//       <planeGeometry />
//       <imageFadeMaterial
//         ref={ref}
//         tex={texture1}
//         tex2={texture2}
//         disp={dispTexture}
//         toneMapped={false}
//       />
//     </mesh>
//   );
// }
