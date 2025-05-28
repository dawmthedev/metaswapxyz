import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News | Metaswap',
};

export default function NewsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <h1 className="text-6xl font-extrabold">News</h1>
    </main>
  );
}
