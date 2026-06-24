import FadeInSection from "./FadeInSection";

const SKILLS = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "ReactJs", "VueJs", "NextJs"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "C , C++", "Java"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "SQL Server", "Firebase"],
  },
  {
    category: "Testing",
    items: ["JUnit", "JMeter", "Selenium"],
  },
  {
    category: "Ux/UI Design",
    items: ["Figma", "Canva", "Draw.io"],
  },
  {
    category: "Tools",
    items: ["Git", "Postman", "Linux CML"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills-section pt-20 pb-60 md:pt-30 md:pb-75"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-eyebrow text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Skills
        </p>
        <h2 className="section-heading text-3xl md:text-4xl font-extrabold mb-14 leading-tight">
          Tech Stack 
          <br />
          <span className="gradient-text">That I have worked with</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map(({ category, items }, i) => (
            <FadeInSection key={category} delay={i * 0.1} className="h-full">
              <div className="skill-card rounded-2xl p-6 flex flex-col gap-4 h-full">
                <h3 className="skill-category text-xs font-bold tracking-[0.15em] uppercase cyan-text">
                  {category}
                </h3>
                <ul className="flex flex-col gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="skill-item flex items-center gap-2 text-sm text-slate-300"
                    >
                      <span className="skill-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
