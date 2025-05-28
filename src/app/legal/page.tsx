import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal | Metaswap',
};

export default function LegalPage() {
  return (
    <div className="py-16 px-4 md:px-8 text-center">
      <h1 className="text-6xl font-extrabold">Legal</h1>
    </div>
  );
}
