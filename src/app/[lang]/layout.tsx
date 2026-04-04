import Header from "@/components/Header";
import { ReactNode } from "react";

export default function LangLayout({
  children,
}: {
  children: ReactNode;
  params: Promise<{ lang: "es" | "en" }>;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}