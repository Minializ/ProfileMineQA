"use client";
import LanguageSwitcher from "./LanguageSwitcher";
import DownloadCVButton from "./DownloadCVButton";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "es";

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* CONTACT INFO */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
          <span>📧 minializ@hotmail.com</span>
          <a href="https://www.linkedin.com/in/avrenimhg/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/Minerva-HG" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
        </div>

        <div className="flex items-center gap-4">
          <DownloadCVButton lang={lang} variant="secondary" />
          <LanguageSwitcher />
        </div>

      </div>
    </header>
  );
}