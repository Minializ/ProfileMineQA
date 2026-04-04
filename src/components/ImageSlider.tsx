"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface Slide {
  src: string;
  alt: string;
  caption?: string;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function ImageSlider({ slides }: { slides: Slide[] }) {
  const [[index, direction], setIndex] = useState([0, 0]);

  if (slides.length === 0) return null;

  const current = ((index % slides.length) + slides.length) % slides.length;

  const paginate = (dir: number) => {
    setIndex([index + dir, dir]);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-lg bg-slate-200">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 rounded-full w-10 h-10 flex items-center justify-center shadow transition z-10"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 rounded-full w-10 h-10 flex items-center justify-center shadow transition z-10"
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* Caption */}
      {slides[current].caption && (
        <p className="text-center text-slate-600 mt-3 text-sm">
          {slides[current].caption}
        </p>
      )}

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex([i, i > current ? 1 : -1])}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === current ? "bg-blue-600 scale-110" : "bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
