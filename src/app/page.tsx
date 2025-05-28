// src/app/page.tsx

import SplashScreen from "./splash-screen";
import dynamic from "next/dynamic";

const ThreeCanvas = dynamic(() => import("./three-canvas"), { ssr: false });
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Splash screen fades out after load */}
      <SplashScreen />

      {/* Header (now set to handle mobile vs. desktop positioning) */}
      <Header />

      {/* Background gradient div (optional) */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500" />

      {/* 3D canvas center */}
      <section className="relative w-full h-full flex items-center justify-center">
        <ThreeCanvas />
      </section>

      {/* Footer with brand & links */}
      <Footer />
    </main>
  );
}
