import FloatingIcons from "./FloatingIcons";
import AnimatedSection from "./AnimatedSection";

const courses = [
  { name: "Katalon and Testops Course", institution: "Brain Testing", year: "SEP – Actualmente" },
  { name: "Software Development with Angular/Git/Docker", institution: "Liderly – TEC Monterrey", year: "2025" },
  { name: "Software Development with Scrum", institution: "Qualtop", year: "2018" },
  { name: "Learn to Perform Performance Testing with JMeter", institution: "UDEMY", year: "" },
  { name: "Requirements Engineering Fundamentals", institution: "UDEMY", year: "" },
  { name: "Robot Framework", institution: "UDEMY", year: "" },
  { name: "Programming with Python", institution: "UDEMY", year: "" },
  { name: "Introduction to Docker", institution: "UDEMY", year: "" },
  { name: "Basic Level ISTQB Certified Tester (CTFL)", institution: "UDEMY", year: "" },
];

export default function Courses() {
  return (
    <section id="courses" className="relative py-20 px-6">
      <FloatingIcons count={5} seed={55} />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-slate-600">Courses & Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, i) => (
            <AnimatedSection key={course.name} delay={i * 0.1}>
              <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-[rgb(62_105_167)]">{course.name}</h3>
                <p className="text-sm text-slate-500 mt-1">
                  📍 {course.institution}
                  {course.year && ` · ${course.year}`}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
