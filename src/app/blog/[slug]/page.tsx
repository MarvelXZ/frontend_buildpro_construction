import Link from "next/link";
import { notFound } from "next/navigation";
import blogData from "@/data/blog.json";
import { FaArrowLeft, FaCalendar, FaTag } from "react-icons/fa";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post not found - BuildPro",
    };
  }

  return {
    title: `${post.title} - BuildPro Blog`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 py-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8"
        >
          <FaArrowLeft />
          Nazad na blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="flex items-center gap-2 px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-sm font-semibold">
              <FaTag className="text-xs" />
              {post.category}
            </span>
            <span className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
              <FaCalendar />
              {new Date(post.date).toLocaleDateString("sr-RS", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-zinc-600 dark:text-zinc-300">
            {post.excerpt}
          </p>
        </header>

        {/* Featured image placeholder */}
        <div className="aspect-video bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-lg mb-8 flex items-center justify-center">
          <span className="text-white text-8xl opacity-50">📄</span>
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-700">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            <FaArrowLeft />
            Vidi sve članke
          </Link>
        </div>
      </article>
    </div>
  );
}
