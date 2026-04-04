import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Courses from "@/components/Courses";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "es" | "en" }>;
}) {
  const { lang } = await params;
  return (
    <main>
      <Hero lang={lang} />
      <About lang={lang} />
      <Experience lang={lang} />
      <Projects lang={lang} />
      <Skills lang={lang} />
      <Courses />
      <Gallery />
      <Contact lang={lang} />
    </main>
  );
}