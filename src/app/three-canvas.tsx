// // src/app/three-canvas.tsx
// "use client";

// import { Canvas } from "@react-three/fiber";
// import { Environment } from "@react-three/drei";
// import Scene from "./components/3D/Scene";

// export default function ThreeCanvas() {
//   return (
//     <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
//       <Environment preset="sunset" />
//       <Scene />
//     </Canvas>
//   );
// }
"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Scene from "./components/3D/Scene";

export default function ThreeCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <Environment preset="sunset" />
      <Scene />
    </Canvas>
  );
}
