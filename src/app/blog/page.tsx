import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Metaswap',
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <div className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <h1 className="text-6xl font-extrabold mb-12">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-6 border border-black/10 shadow-sm hover:shadow-lg transition bg-white"
          >
            <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
            <p className="text-sm mb-4">{post.date}</p>
            <p>{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
