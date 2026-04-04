"use client";

import { useState } from "react";
import FloatingIcons from "./FloatingIcons";
import ImageSlider, { Slide } from "./ImageSlider";

const projectSlides: Slide[] = [
  // Agrega tus imágenes en public/image/projects/ y reemplaza estos placeholders
  { src: "/image/projects/project-1.jpg", alt: "Proyecto 1", caption: "Sistema de Rifas" },
  { src: "/image/projects/project-2.jpg", alt: "Proyecto 2", caption: "Stagehand – AI Testing" },
  { src: "/image/projects/project-3.jpg", alt: "Proyecto 3", caption: "Generador de Casos de Prueba" },
  { src: "/image/projects/project-4.jpg", alt: "Proyecto 4", caption: "WEB Gallo Negro" },
];

const hobbySlides: Slide[] = [
  // Agrega tus imágenes en public/image/hobbies/ y reemplaza estos placeholders
  { src: "/image/hobbies/hobby-1.jpg", alt: "Hobby 1", caption: "Hobby Fotografia" },
  { src: "/image/hobbies/hobby-2.jpg", alt: "Hobby 2", caption: "Hobby Pintura" },
  { src: "/image/hobbies/hobby-3.jpg", alt: "Hobby 3", caption: "Hobby Música" },
  { src: "/image/hobbies/hobby-4.jpg", alt: "Hobby 4", caption: "Hobby Cocina" },
  { src: "/image/hobbies/hobby-5.jpg", alt: "Hobby 5", caption: "Hobby Jardinería" },
  { src: "/image/hobbies/hobby-6.jpg", alt: "Hobby 6", caption: "Hobby Deporte" },
  { src: "/image/hobbies/hobby-7.jpg", alt: "Hobby 6", caption: "Hobby Deporte" },
];

type Tab = "projects" | "hobbies";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<Tab>("projects");

  const tabs: { key: Tab; label: string }[] = [
    { key: "projects", label: "📸 Projects" },
    { key: "hobbies", label: "🎨 Hobbies" },
  ];

  return (
    <section id="gallery" className="relative py-20 px-6 bg-slate-100">
      <FloatingIcons count={4} seed={60} />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-slate-600">Gallery</h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white shadow"
                  : "bg-white text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Slider */}
        {activeTab === "projects" && <ImageSlider slides={projectSlides} />}
        {activeTab === "hobbies" && <ImageSlider slides={hobbySlides} />}
      </div>
    </section>
  );
}
