import { translations } from "@/lib/translations";
import LanguageSwitcher from "./LanguageSwitcher";
import FloatingIcons from "./FloatingIcons";

export default function Hero({ lang }: { lang: "es" | "en" }) {
  const t = translations[lang].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <FloatingIcons count={8} seed={1} />
      <div className="max-w-4xl text-center">
        <div className="absolute top-6 right-6">
            <LanguageSwitcher />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t.title}
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-10">
          {t.description}
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href={`/${lang}#projects`}
            className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-slate-900"
          >
            {t.projects}
          </a>
          <a
            href={`/${lang}#skills`}
            className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-slate-900"
          >
            {t.skills}
          </a>
        </div>
      </div>
    </section>
  );
}