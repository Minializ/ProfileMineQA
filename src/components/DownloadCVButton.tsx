import { translations } from "@/lib/translations";
import { defaultLang } from "@/lib/i18n";

export default function DownloadCVButton({
  lang,
  variant = "primary",
}: {
  lang?: "es" | "en";
  variant?: "primary" | "secondary";
}) {
  const safeLang = lang ?? defaultLang;
  const label = translations[safeLang].ui.downloadCV;

  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white";

  return (
    <a
      href="/cv/Minerva_Hernandez_QA_SDET.pdf"
      download
      className={`px-5 py-2 rounded-md font-semibold transition ${styles}`}
    >
      📄 {label}
    </a>
  );
}