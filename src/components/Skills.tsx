import FloatingIcons from "./FloatingIcons";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 px-6 bg-slate-100">
      <FloatingIcons count={5} seed={40} />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-slate-600">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillBlock
            title="Automation"
            items={[ "Selenium", "Katalon", "Robot Framework"]}
          />
          <SkillBlock
            title="Programming"
            items={["JavaScript", "TypeScript", "Python", "Java"]}
          />
          <SkillBlock
            title="Tools & DevOps"
            items={["GitHub", "Jenkins", "Docker", "Postman", "JMeter"]}
          />
        </div>
      </div>
    </section>
  );
}

function SkillBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-4 text-[rgb(62_105_167)]">{title}</h3>
      <ul className="space-y-1 text-slate-700">
        {items.map((item) => (
          <li key={item}>✔ {item}</li>
        ))}
      </ul>
    </div>
  );
}