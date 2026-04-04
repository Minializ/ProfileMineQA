import FloatingIcons from "./FloatingIcons";

export default function Experience() {
  return (
    <section className="relative py-20 px-6 bg-slate-100">
      <FloatingIcons count={5} seed={20} />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-slate-600">Experience</h2>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-[rgb(62_105_167)]">
              Quality Control Analyst — Megacable
            </h3>
            <p className="text-slate-500 mb-2">2018 – Present</p>
            <ul className="list-disc list-inside text-slate-700">
              <li>Automated and manual testing</li>
              <li>API & microservices validation</li>
              <li>Jira, TestRail & defect management</li>
              <li>Postman Test</li>
              <li>RobotFramework and Katalon Studio</li>
              <li>Integrity through Git/GitHub and integrating automated tests into CI/C pipelines</li>
              <li> with Jenkins. Focused on optimizing operational efficiency and ensuring highly reliable software deliveries.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-[rgb(62_105_167)]">
              Validation Technician — Intel-Disc
            </h3>
            <p className="text-slate-500 mb-2">2017 – 2018</p>
            <ul className="list-disc list-inside text-slate-700">
              <li>Hardware & software validation</li>
              <li>OS, BIOS & drivers installation</li>
              <li>Failure analysis & reporting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}