import { getAllSlugs, getPostBySlug } from '@/lib/blog';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug_title: slug }));
}

export async function generateMetadata({ params }: { params: { slug_title: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug_title);
  return {
    title: post ? `${post.title} | Metaswap` : 'Post Not Found',
  };
}

export default async function BlogPostPage({ params }: { params: { slug_title: string } }) {
  const post = await getPostBySlug(params.slug_title);
  if (!post) return notFound();

  return (
    <main className="min-h-screen w-full px-6 py-20 bg-white text-black">
      <Link href="/blog" className="underline mb-8 block">Back to Blog</Link>
      <h1 className="text-6xl font-extrabold mb-4">{post.title}</h1>
      <p className="text-sm mb-8">{post.date}</p>
      <article className="space-y-4">
        {post.body.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}
