import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal | Metaswap',
};

export default function LegalPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <h1 className="text-6xl font-extrabold">Legal</h1>
    </main>
  );
}
