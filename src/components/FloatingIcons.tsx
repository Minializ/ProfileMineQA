"use client";

import { motion } from "framer-motion";

const icons = [
  { emoji: "🐛", label: "bug" },
  { emoji: "✅", label: "test pass" },
  { emoji: "🧪", label: "testing" },
  { emoji: "💻", label: "code" },
  { emoji: "🔍", label: "search" },
  { emoji: "⚙️", label: "config" },
  { emoji: "📋", label: "test case" },
  { emoji: "🚀", label: "deploy" },
  { emoji: "🛠️", label: "tools" },
  { emoji: "📊", label: "reports" },
];

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function round(n: number) {
  return Math.round(n * 100) / 100;
}

export default function FloatingIcons({
  count = 6,
  seed = 0,
}: {
  count?: number;
  seed?: number;
}) {
  const selected: typeof icons = [];
  for (let i = 0; i < count && i < icons.length; i++) {
    const idx = Math.floor(seededRandom(seed + i * 31) * icons.length);
    selected.push(icons[idx]);
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {selected.map((icon, i) => {
        const left = round(seededRandom(seed + i * 3) * 90 + 5);
        const top = round(seededRandom(seed + i * 7) * 80 + 10);
        const size = round(seededRandom(seed + i * 11) * 16 + 20);
        const duration = round(seededRandom(seed + i * 13) * 4 + 5);
        const delay = round(seededRandom(seed + i * 17) * 3);

        return (
          <motion.span
            key={`${icon.label}-${i}`}
            className="absolute opacity-15 select-none"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              fontSize: `${size}px`,
            }}
            animate={{
              y: [0, -18, 0, 12, 0],
              x: [0, 8, -6, 4, 0],
              rotate: [0, 8, -6, 3, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          >
            {icon.emoji}
          </motion.span>
        );
      })}
    </div>
  );
}
