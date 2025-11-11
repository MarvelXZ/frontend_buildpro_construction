"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";
import { useTranslations } from "next-intl";
import GoogleMap from "@/components/maps/GoogleMap";
import { type MapLocation } from "@/lib/maps/google-maps";

export default function Contact() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Company location (Belgrade example - customize as needed)
  const companyLocation: MapLocation = {
    lat: 44.7866,
    lng: 20.4489,
    title: t("map.markerTitle"),
    address: t("map.address"),
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: t("info.phone.title"),
      info: t("info.phone.value"),
      link: "tel:+381111234567",
    },
    {
      icon: FaEnvelope,
      title: t("info.email.title"),
      info: t("info.email.value"),
      link: "mailto:info@buildpro.rs",
    },
    {
      icon: FaMapMarkerAlt,
      title: t("info.address.title"),
      info: t("info.address.value"),
      link: "#map",
    },
    {
      icon: FaClock,
      title: t("info.hours.title"),
      info: t("info.hours.value"),
      link: null,
    },
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
            {t("title")} <span className="text-orange-600">{t("titleHighlight")}</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                {t("form.title")}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    {t("form.name")} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    {t("form.email")} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    {t("form.phone")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    {t("form.service")} *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-600"
                  >
                    <option value="">{t("form.selectService")}</option>
                    <option value="izgradnja">{t("form.services.houseBuilding")}</option>
                    <option value="renoviranje">{t("form.services.renovation")}</option>
                    <option value="dizajn">{t("form.services.interiorDesign")}</option>
                    <option value="konsalting">{t("form.services.consulting")}</option>
                    <option value="odrzavanje">{t("form.services.maintenance")}</option>
                    <option value="ostalo">{t("form.services.other")}</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    {t("form.message")} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-600 resize-none"
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg">
                    <FaCheckCircle />
                    <span>{t("form.successMessage")}</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg">
                    {t("form.errorMessage")}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t("form.sending") : t("form.submit")}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              {t("infoTitle")}
            </h2>

            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-zinc-50 dark:bg-zinc-800 rounded-lg shadow-lg"
              >
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-zinc-600 dark:text-zinc-300 hover:text-orange-600 transition-colors"
                    >
                      {item.info}
                    </a>
                  ) : (
                    <p className="text-zinc-600 dark:text-zinc-300">{item.info}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Google Maps */}
        <motion.div
          id="map"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GoogleMap
            center={companyLocation}
            zoom={15}
            markers={[companyLocation]}
            className="h-[500px] w-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
