import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investors \u2014 Metaswap',
  description: 'Investor relations information for Metaswap.',
};

const milestones = [
  { date: '2023 Q1', event: 'Seed funding round' },
  { date: '2024 Q2', event: 'Series A raised $10M' },
  { date: '2025 Q1', event: 'Reached 1M users' },
];

const faqs = [
  { question: 'Who are the current investors?', answer: 'Metaswap is privately funded by a group of angel investors and venture firms.' },
  { question: 'When is the next funding round?', answer: 'We plan to evaluate Series B opportunities in late 2025.' },
];

export default function InvestorsPage() {
  return (
    <main className="relative min-h-screen w-full bg-white text-black flex flex-col">
      <Header />
      <section className="flex-1 px-6 py-24 max-w-6xl mx-auto space-y-16">
        <div>
          <h1 className="text-5xl font-extrabold mb-6">Investor Relations</h1>
          <p className="text-lg">Metaswap has grown steadily since its inception and continues to expand its offerings and customer base.</p>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="p-4 border text-center">
              <p className="text-3xl font-bold">$5M</p>
              <p className="text-sm text-gray-600">2024 Revenue</p>
            </div>
            <div className="p-4 border text-center">
              <p className="text-3xl font-bold">1M+</p>
              <p className="text-sm text-gray-600">Active Users</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Key Milestones</h2>
          <table className="w-full border">
            <tbody>
              {milestones.map((m) => (
                <tr key={m.date} className="border-b">
                  <td className="p-2 font-medium">{m.date}</td>
                  <td className="p-2">{m.event}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.question} className="border p-4">
                <summary className="font-semibold cursor-pointer">{f.question}</summary>
                <p className="mt-2 text-sm">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
