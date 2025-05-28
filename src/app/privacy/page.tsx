import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy | Metaswap',
};

export default function PrivacyPage() {
  return (
    <div className="py-16 px-4 md:px-8 text-center">
      <h1 className="text-6xl font-extrabold">Privacy</h1>
    </div>
  );
}
