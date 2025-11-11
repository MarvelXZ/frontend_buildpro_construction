"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheck, FaPhone } from "react-icons/fa";

export default function Pricing() {
  const packages = [
    {
      name: "Basic",
      price: "Od 50€/m²",
      description: "Idealno za manje projekte i renoviranja",
      features: [
        "Konsultacija sa arhitektom",
        "Osnovni građevinski radovi",
        "Kvalitetni materijali",
        "Garancija 2 godine",
        "Tehnička podrška",
      ],
      highlighted: false,
    },
    {
      name: "Standard",
      price: "Od 80€/m²",
      description: "Najpopularniji paket za kompletnu gradnju",
      features: [
        "Sve iz Basic paketa",
        "Projektovanje enterijera",
        "Premium materijali",
        "Garancija 5 godina",
        "Besplatno održavanje 1 god",
        "Projektni menadžer",
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "Od 120€/m²",
      description: "Luksuzna rešenja sa najkvalitetnijim materijalima",
      features: [
        "Sve iz Standard paketa",
        "Eksluzivni dizajn",
        "Luksuzni materijali",
        "Garancija 10 godina",
        "Smart home integracija",
        "VIP podrška 24/7",
        "Besplatno održavanje 3 god",
      ],
      highlighted: false,
    },
  ];

  const additionalServices = [
    { name: "Projektovanje", price: "Od 15€/m²" },
    { name: "Nadzor gradnje", price: "5% od vrednosti" },
    { name: "Hitne intervencije", price: "60€/sat" },
    { name: "Konsalting", price: "80€/sat" },
    { name: "3D vizualizacija", price: "200€/prostor" },
    { name: "Energetska sertifikacija", price: "Od 300€" },
    { name: "Hidroizolacija", price: "Od 10€/m²" },
    { name: "Fasaderski radovi", price: "Od 25€/m²" },
    { name: "Krovopokrivački radovi", price: "Od 30€/m²" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Naše <span className="text-orange-600">cene</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Transparentne cene i fleksibilni paketi prilagođeni vašem budžetu
          </p>
        </motion.div>

        {/* Pricing packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg p-8 ${
                pkg.highlighted
                  ? "bg-gradient-to-br from-orange-600 to-orange-700 text-white shadow-2xl scale-105"
                  : "bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-lg"
              }`}
            >
              {pkg.highlighted && (
                <div className="text-center mb-4">
                  <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    Najpopularniji
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="text-3xl font-bold mb-4">{pkg.price}</div>
              <p
                className={`mb-6 ${
                  pkg.highlighted
                    ? "text-orange-100"
                    : "text-zinc-600 dark:text-zinc-300"
                }`}
              >
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheck
                      className={`mt-1 flex-shrink-0 ${
                        pkg.highlighted
                          ? "text-orange-200"
                          : "text-orange-600"
                      }`}
                    />
                    <span className={pkg.highlighted ? "text-orange-50" : ""}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                  pkg.highlighted
                    ? "bg-white text-orange-600 hover:bg-orange-50"
                    : "bg-orange-600 text-white hover:bg-orange-700"
                }`}
              >
                Zatraži ponudu
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white text-center mb-8">
            Dodatne <span className="text-orange-600">usluge</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg"
              >
                <span className="font-semibold text-zinc-900 dark:text-white">
                  {service.name}
                </span>
                <span className="text-orange-600 font-bold">
                  {service.price}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Potrebna vam je personalizovana ponuda?
          </h2>
          <p className="text-xl mb-6">
            Kontaktirajte nas za besplatnu procenu i konsultaciju
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors"
            >
              Pošalji upit
            </Link>
            <a
              href="tel:+381111234567"
              className="px-8 py-4 bg-orange-800 text-white rounded-lg font-semibold hover:bg-orange-900 transition-colors flex items-center justify-center gap-2"
            >
              <FaPhone />
              Pozovite nas
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
