"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect } from "react";

interface LightboxProps {
  images: Array<{ id: number; title: string; image: string }>;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors"
          aria-label="Close"
        >
          <FaTimes size={32} />
        </button>

        {/* Previous button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 text-white hover:text-orange-500 transition-colors"
          aria-label="Previous"
        >
          <FaChevronLeft size={48} />
        </button>

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="max-w-7xl max-h-[90vh] mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="aspect-video bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-lg flex items-center justify-center">
            <span className="text-white text-8xl opacity-50">📷</span>
          </div>
          <p className="text-white text-center mt-4 text-xl font-semibold">
            {images[currentIndex].title}
          </p>
          <p className="text-zinc-400 text-center">
            {currentIndex + 1} / {images.length}
          </p>
        </motion.div>

        {/* Next button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 text-white hover:text-orange-500 transition-colors"
          aria-label="Next"
        >
          <FaChevronRight size={48} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
