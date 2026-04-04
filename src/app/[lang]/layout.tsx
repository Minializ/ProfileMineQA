import Header from "@/components/Header";
import { ReactNode } from "react";

export default function LangLayout({
  children,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}