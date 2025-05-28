import Header from '../../components/Header';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const roles = [
  { slug: 'frontend-engineer', title: 'Frontend Engineer', description: 'Work closely with design to build immersive experiences.' },
  { slug: 'backend-engineer', title: 'Backend Engineer', description: 'Create scalable APIs and services that power our products.' },
];

export function generateStaticParams() {
  return roles.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const role = roles.find((r) => r.slug === params.slug);
  return { title: role ? `${role.title} — Metaswap` : 'Role — Metaswap' };
}

export default function RolePage({ params }: { params: { slug: string } }) {
  const role = roles.find((r) => r.slug === params.slug);
  if (!role) return notFound();
  return (
    <main className="relative min-h-screen w-full bg-white text-black flex flex-col">
      <Header />
      <section className="flex-1 px-6 py-24 max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-extrabold">{role.title}</h1>
        <p>{role.description}</p>
        <a href="mailto:hr@metaswap.xyz" className="underline text-blue-600 font-bold">
          Apply Now
        </a>
      </section>
      <Footer />
    </main>
  );
}
