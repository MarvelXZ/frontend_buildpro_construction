"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";

const CTA = () => {
  const t = useTranslations("cta");
  const locale = useLocale();

  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href={`/${locale}/contact`}
              className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors shadow-lg"
            >
              {t("requestQuote")}
            </Link>
            <a
              href="tel:+381111234567"
              className="px-8 py-4 bg-orange-800 text-white rounded-lg font-semibold hover:bg-orange-900 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <FaPhone />
              {t("callUs")}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-lg">
            <div className="flex items-center justify-center gap-2">
              <FaPhone className="text-2xl" />
              <span>+381 11 123 4567</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-2xl" />
              <span>info@buildpro.rs</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
