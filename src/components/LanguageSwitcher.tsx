"use client";

import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/en") ? "en" : "es";

  const otherLang = currentLang === "es" ? "en" : "es";
  const newPath = pathname.replace(
    `/${currentLang}`,
    `/${otherLang}`
  );

  return (
    <a href={newPath}>
      {otherLang === "es" ? "Español" : "English"}
    </a>
  );
}