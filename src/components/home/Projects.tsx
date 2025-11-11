"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import projectsData from "@/data/projects.json";

const Projects = () => {
  const t = useTranslations("projects");
  const locale = useLocale();

  // Show only first 4 projects on homepage
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <section className="py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            {t("title")} <span className="text-orange-600">{t("titleHighlight")}</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Placeholder image */}
              <div className="aspect-video bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center">
                <span className="text-white text-6xl opacity-50">📷</span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-zinc-200 mb-2">{project.description}</p>
                  <span className="inline-block px-3 py-1 bg-orange-600 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Static info for mobile */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-white">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <span className="inline-block px-2 py-1 bg-orange-600 rounded-full text-xs mt-2">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href={`/${locale}/gallery`}
            className="inline-block px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            {t("viewAll")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
