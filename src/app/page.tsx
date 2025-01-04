import SplashScreen from "./splash-screen";
import ThreeCanvas from "./three-canvas";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <SplashScreen />
      <Header />

      <div className="absolute inset-0" />

      <section className="relative w-full h-full flex items-center justify-center">
        <ThreeCanvas />
      </section>

      <Footer />
    </main>
  );
}
