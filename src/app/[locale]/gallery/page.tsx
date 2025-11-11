"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import projectsData from "@/data/projects.json";
import Lightbox from "@/components/gallery/Lightbox";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "Sve" },
    { id: "građevina", label: "Građevina" },
    { id: "enterijer", label: "Enterijer" },
    { id: "dizajn", label: "Dizajn" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredProjects.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredProjects.length) % filteredProjects.length
      );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Naša <span className="text-orange-600">galerija</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Pogledajte naše realizovane projekte i inspirišite se za vaš sledeći
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === category.id
                  ? "bg-orange-600 text-white"
                  : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              {/* Placeholder image */}
              <div className="aspect-video bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center">
                <span className="text-white text-6xl opacity-50">📷</span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-zinc-200">{project.description}</p>
                  <span className="inline-block px-2 py-1 bg-orange-600 rounded-full text-xs mt-2">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Mobile info */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 text-white">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <span className="inline-block px-2 py-1 bg-orange-600 rounded-full text-xs mt-1">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Nema projekata u ovoj kategoriji
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filteredProjects}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}
