import { motion } from "framer-motion";
import Link from "next/link";
import blogData from "@/data/blog.json";

export const metadata = {
  title: "Blog - BuildPro",
  description: "Saveti i članci o građevinarstvu, renoviranju i dizajnu enterijera",
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Naš <span className="text-orange-600">blog</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Saveti, trendovi i korisne informacije iz sveta građevinarstva
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post, index) => (
            <article
              key={post.id}
              className="bg-zinc-50 dark:bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center">
                <span className="text-white text-6xl opacity-50">📄</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {new Date(post.date).toLocaleDateString("sr-RS", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                  {post.title}
                </h2>

                <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
                >
                  Pročitaj više →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
