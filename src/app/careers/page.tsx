import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Metaswap',
};

export default function CareersPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <h1 className="text-6xl font-extrabold">Careers</h1>
    </main>
  );
}
