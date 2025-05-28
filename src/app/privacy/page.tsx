import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy | Metaswap',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <h1 className="text-6xl font-extrabold">Privacy</h1>
    </main>
  );
}
