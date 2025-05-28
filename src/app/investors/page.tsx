import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investors | Metaswap',
};

export default function InvestorsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <h1 className="text-6xl font-extrabold">Investors</h1>
    </main>
  );
}
