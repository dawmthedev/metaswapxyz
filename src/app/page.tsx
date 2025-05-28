// src/app/page.tsx

import SplashScreen from "./splash-screen";
import dynamic from "next/dynamic";

const ThreeCanvas = dynamic(() => import("./three-canvas"), { ssr: false });

export default function HomePage() {
  return (
    <main className="fixed inset-0 overflow-hidden">
      {/* Splash screen fades out after load */}
      <SplashScreen />

      {/* Background gradient div (optional) */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500" />

      {/* 3D canvas center */}
      <section className="relative w-full h-full flex items-center justify-center">
        <ThreeCanvas />
      </section>
    </main>
  );
}
