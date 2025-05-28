import fs from 'fs/promises';
import path from 'path';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = await fs.readdir(BLOG_DIR);
  const posts = await Promise.all(
    files.filter(f => f.endsWith('.json')).map(async (file) => {
      const data = await fs.readFile(path.join(BLOG_DIR, file), 'utf-8');
      return JSON.parse(data) as BlogPost;
    })
  );
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const data = await fs.readFile(path.join(BLOG_DIR, `${slug}.json`), 'utf-8');
    return JSON.parse(data) as BlogPost;
  } catch {
    return null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  const files = await fs.readdir(BLOG_DIR);
  return files.map(f => path.parse(f).name);
}
