// src/about/page.tsx

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-4xl bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-10 shadow-2xl text-white text-center border border-white border-opacity-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          About Metaswap
        </h1>
        <p className="text-lg md:text-xl leading-relaxed tracking-wide max-w-3xl mx-auto">
          Welcome to <span className="font-semibold">Metaswap</span>, your
          trusted software publishing and digital infrastructure hub. We
          specialize in empowering partner companies with cutting-edge software
          solutions, supporting innovation, scalability, and growth in today’s
          fast-paced, tech-driven world.
        </p>
      </div>
    </main>
  );
}
