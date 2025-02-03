// "use client";

// import { useLoader } from "@react-three/fiber";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import { MeshStandardMaterial } from "three";

// export default function MyModel() {
//   const obj = useLoader(OBJLoader, "/models/model.obj");

//   obj.traverse((child: any) => {
//     if (child.isMesh) {
//       child.material = new MeshStandardMaterial({
//         color: 0xffffff,
//         metalness: 1,
//         roughness: 0.1,
//       });
//     }
//   });

//   return <primitive object={obj} scale={[0.5, 0.5, 0.5]} />; // Reduced scale from 1 to 0.5
// }
"use client";

import Spline from "@splinetool/react-spline/next";

export default function MyModel() {
  return (
    <main>
      <Spline scene="https://prod.spline.design/oNQdYmdalJPanx7c/scene.splinecode" />
    </main>
  );
}
