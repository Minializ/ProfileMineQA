import Image from "next/image";
import { translations } from "@/lib/translations";
import { defaultLang } from "@/lib/i18n";
import AnimatedSection from "./AnimatedSection";
import FloatingIcons from "./FloatingIcons";

export default function About({ lang }: { lang?: "es" | "en" }) {
  const safeLang = lang ?? defaultLang;
  const t = translations[safeLang].about;

  return (
    <section className="relative py-24 px-6 bg-white" id="about">
      <FloatingIcons count={5} seed={10} />
      <AnimatedSection>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* FOTO DINÁMICA POR IDIOMA */}
          <div className="flex justify-center">
            <Image
              src={t.image}
              alt={t.imageAlt}
              width={280}
              height={280}
              className="rounded-full shadow-lg"
              priority
            />
          </div>

          {/* TEXTO */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              {t.title}
            </h2>

            <p className="text-slate-700 leading-relaxed text-lg">
              {t.description}
            </p>

            <ul className="mt-6 space-y-2 text-slate-700">
              <li>✔ QA Automation & Manual Testing</li>
              <li>✔ Selenium, Katalon, Robot Framework</li>
              <li>✔ API & Microservices Validation</li>
              <li>✔ CI/CD & Quality Mindset</li>
            </ul>
          </div>

        </div>
      </AnimatedSection>
    </section>
  );
}