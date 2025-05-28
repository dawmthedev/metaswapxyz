import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About \u2014 Metaswap',
  description: 'Mission, vision and team behind Metaswap.',
  openGraph: {
    images: '/globe.svg',
  },
  alternates: {
    canonical: 'https://metaswap.xyz/about',
  },
};

const team = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    image: 'https://via.placeholder.com/200',
    bio: 'Alex has spent a decade building scalable web infrastructure and leads the overall vision at Metaswap.',
  },
  {
    name: 'Morgan Lee',
    role: 'CTO',
    image: 'https://via.placeholder.com/200',
    bio: 'Morgan oversees engineering efforts and ensures our platforms remain cutting edge.',
  },
  {
    name: 'Jamie Patel',
    role: 'Head of Operations',
    image: 'https://via.placeholder.com/200',
    bio: 'Jamie manages daily operations and keeps everything running smoothly.',
  },
];

const values = [
  'Innovation',
  'Transparency',
  'Customer Success',
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full bg-white text-black flex flex-col">
      <Header />
      <section className="flex-1 px-6 py-24 max-w-6xl mx-auto space-y-16">
        <div>
          <h1 className="text-5xl font-extrabold mb-6">About Metaswap</h1>
          <p className="text-lg leading-relaxed">
            Metaswap, LLC was founded to empower businesses with modern software solutions.
            Our mission is to remove the barriers between ideas and scalable infrastructure.
            We envision a world where anyone can deploy innovative products in minutes.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="text-center border p-4 shadow-sm">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                <p className="text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((val) => (
              <div key={val} className="border p-6 text-center font-semibold shadow-sm">
                {val}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
