import AnimatedSection from "@/components/AnimatedSection";
import FloatingIcons from "./FloatingIcons";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-6">
      <FloatingIcons count={6} seed={30} />
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-slate-600">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <AnimatedSection delay={0.2}>   
         <ProjectCard
            title="Sistema de Rifas"
            tech="React · JavaScript · TypeScript"
            description="Sistema de Rifas y sorteos locales."
            link="https://github.com/Minerva-HG/SistemaDeRifas"
          />
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
          <ProjectCard
            title="Stagehand"
            tech="Java · TypeScript"
            description="Pruebas con AI para validar software "
            link="https://github.com/Minerva-HG/Stagehand"
          />
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
           <ProjectCard
            title="Generador de Casos de Prueba"
            tech="Python. Angular. JavaScript · TypeScript"
            description="Un proyecto que aun esta en proceso, Cuando se realizan un reporte en PDF
            , este lo convierte en otros archivos, cuando activas a la AI este los convierte en Testcases
            en Katalon Studio (groovy)."
            link="https://github.com/Minerva-HG/GeneradorDeTestCaseconAI"
          />
          </AnimatedSection>

           <AnimatedSection delay={0.4}>
          <ProjectCard
            title="WEB Gallo Negro"
            tech="Angular · JavaScript · TypeScript"
            description="WEB personal, es para un negocio."
            link="https://github.com/Minerva-HG/blackrooster"
          />
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
          <ProjectCard
            title="Robot Framework  Testing"
            tech="Python · Robot Framework"
            description="Framework de automatización de pruebas."
            link="https://github.com/Minerva-HG"
          />
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
          <ProjectCard
            title="API Testing Collection"
            tech="Postman · Microservices"
            description="API testing, validation & error handling."
            link="https://github.com/Minerva-HG"
          />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  tech,
  description,
  link,
}: {
  title: string;
  tech: string;
  description: string;
  link: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-1 text-[rgb(62_105_167)]">{title}</h3>
      <p className="text-sm text-blue-600 mb-2">{tech}</p>
      <p className="text-slate-700 mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold hover:underline">
        View on GitHub →
      </a>
    </div>
  );
}