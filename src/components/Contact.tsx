import DownloadCVButton from "./DownloadCVButton";
import FloatingIcons from "./FloatingIcons";

export default function Contact({ lang }: { lang?: "es" | "en" }) {
  return (
    <section className="relative py-20 px-6">
      <FloatingIcons count={4} seed={50} />
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <p className="text-slate-700 mb-8">
          Let’s work together on quality-driven software.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
          <a href="mailto:minializ@hotmail.com" className="text-blue-600 hover:underline">
            📧 minializ@hotmail.com
          </a>
          <a href="https://www.linkedin.com/in/avrenimhg/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/Minerva-HG" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            GitHub
          </a>
        </div>

        <DownloadCVButton lang={lang} />
      </div>
    </section>
  );
}