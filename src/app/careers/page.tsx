import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers \u2014 Metaswap',
  description: 'Join the team building the future at Metaswap.',
};

const roles = [
  { slug: 'frontend-engineer', title: 'Frontend Engineer', location: 'Remote', summary: 'Build beautiful interfaces with React and Three.js.' },
  { slug: 'backend-engineer', title: 'Backend Engineer', location: 'Remote', summary: 'Design and scale our core platform services.' },
];

const perks = ['Remote friendly', 'Flexible schedule', 'Annual company retreat'];

export default function CareersPage() {
  return (
    <div className="py-16 px-4 md:px-8 max-w-6xl mx-auto space-y-16">
      <div>
        <h1 className="text-5xl font-extrabold mb-6">Careers</h1>
          <p className="text-lg mb-8">We&apos;re looking for talented people to join us on our mission.</p>
          <div className="space-y-6">
            {roles.map((role) => (
              <Link
                key={role.slug}
                href={`/careers/${role.slug}`}
                className="block border p-4 shadow-sm hover:shadow-lg transition"
              >
                <h2 className="text-2xl font-bold">{role.title}</h2>
                <p className="text-sm text-gray-600">{role.location}</p>
                <p className="mt-2">{role.summary}</p>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Why Work With Us</h2>
          <ul className="list-disc pl-6 space-y-2">
            {perks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Join Our Talent Pool</h2>
          <form className="flex flex-col sm:flex-row gap-2">
            <input type="email" placeholder="Your email" className="border px-4 py-2 flex-1" />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 font-bold">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
