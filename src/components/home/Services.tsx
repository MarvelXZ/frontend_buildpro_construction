"use client";

import { motion } from "framer-motion";
import { FaHome, FaTools, FaPaintRoller, FaClipboardList, FaWrench, FaBuilding } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaHome,
  FaTools,
  FaPaintRoller,
  FaClipboardList,
  FaWrench,
  FaBuilding,
};

const Services = () => {
  const t = useTranslations("services");
  const locale = useLocale();

  // Services data with translation keys
  const servicesKeys = [
    { id: 1, titleKey: "items.houseBuilding.title", descKey: "items.houseBuilding.desc", icon: "FaHome" },
    { id: 2, titleKey: "items.renovation.title", descKey: "items.renovation.desc", icon: "FaTools" },
    { id: 3, titleKey: "items.interiorDesign.title", descKey: "items.interiorDesign.desc", icon: "FaPaintRoller" },
    { id: 4, titleKey: "items.consulting.title", descKey: "items.consulting.desc", icon: "FaClipboardList" },
    { id: 5, titleKey: "items.maintenance.title", descKey: "items.maintenance.desc", icon: "FaWrench" },
    { id: 6, titleKey: "items.exterior.title", descKey: "items.exterior.desc", icon: "FaBuilding" },
  ];

  return (
    <section id="services" className="py-20 bg-zinc-50 dark:bg-zinc-800">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesKeys.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4">
                  {Icon && <Icon className="text-orange-600 text-3xl" />}
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {t(service.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
