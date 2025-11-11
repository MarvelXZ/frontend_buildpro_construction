"use client";

import { motion } from "framer-motion";
import { FaAward, FaUsers, FaCheckCircle } from "react-icons/fa";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("about");

  const stats = [
    { icon: FaAward, value: "15+", label: t("stats.experience") },
    { icon: FaUsers, value: "500+", label: t("stats.clients") },
    { icon: FaCheckCircle, value: "800+", label: t("stats.projects") },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">
              {t("title")} <span className="text-orange-600">{t("titleHighlight")}</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-4">
              {t("description1")}
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
              {t("description2")}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="text-orange-600 text-3xl mx-auto mb-2" />
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Video placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg shadow-2xl flex items-center justify-center"
          >
            <div className="text-white text-center p-8">
              <FaAward className="text-6xl mx-auto mb-4" />
              <p className="text-xl font-semibold">
                {t("imageText")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
