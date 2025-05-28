import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllPosts } from '@/lib/blog';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News \u2014 Metaswap',
  description: 'Latest updates and announcements from Metaswap.',
};

export default async function NewsPage() {
  const posts = await getAllPosts();

  return (
    <main className="relative min-h-screen w-full bg-white text-black flex flex-col">
      <Header />
      <section className="flex-1 px-6 py-24 max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-12">News</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="border border-black/10 shadow hover:shadow-lg transition bg-white flex flex-col"
            >
              <Image
                src={`https://via.placeholder.com/600x400?text=${encodeURIComponent(post.title)}`}
                alt=""
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-sm mb-4 text-gray-500">{post.date}</p>
                <p className="flex-1">{post.excerpt}</p>
                <span className="mt-4 underline">Read more</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl font-semibold mb-4">Stay up to date with our latest news.</p>
          <form className="flex justify-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="border border-gray-300 px-4 py-2 w-64"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 font-bold">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
