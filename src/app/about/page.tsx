// src/about/page.tsx

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center p-8">
      {/* Content Wrapper */}
      <div className="max-w-2xl mx-auto text-center text-white">
        <h1 className="text-5xl font-extrabold mb-6">About Metaswap</h1>
        <p className="text-xl leading-relaxed">
          Welcome to Metaswap, your software publishing and digital
          infrastructure hub! Our mission is to empower partner companies with
          cutting-edge solutions, helping them thrive in today’s
          technology-driven world.
        </p>
      </div>
    </main>
  );
}
