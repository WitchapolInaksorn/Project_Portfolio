import FadeInSection from "./FadeInSection";

const PROJECTS = [
  {
    title: "TOEIC Vocab Master",
    description:
      "An interactive vocabulary learning app with 4 mini-games — Flashcard, Hangman, Speed Challenge, and Memory Match — built with React and a pastel design system.",
    tags: ["React", "Vite", "CSS Modules", "Vercel"],
    status: "Live",
    year: "2025",
  },
  {
    title: "Funeral Sticker Generator",
    description:
      "A Thai-language sticker generation tool that renders A4-printable grids with Thai text overlays using html2canvas and jsPDF, featuring a gold-on-dark funeral aesthetic.",
    tags: ["React", "html2canvas", "jsPDF", "Thai Fonts"],
    status: "Live",
    year: "2025",
  },
  {
    title: "Payment UI Dashboard",
    description:
      "A clean payment interface with a dark sidebar and light content panel layout, built with React, Vite, and Tailwind CSS v4 using a per-component style architecture.",
    tags: ["React", "Tailwind CSS v4", "Vite"],
    status: "Live",
    year: "2025",
  },
  {
    title: "Portfolio Website",
    description:
      "This site — a dark-blue themed developer portfolio with animated hero, skill grid, and project showcase. Fully responsive across mobile, tablet, and desktop.",
    tags: ["React", "Tailwind CSS", "Vite"],
    status: "You're here",
    year: "2025",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects-section pt-12 pb-20 md:pt-16 md:pb-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-eyebrow text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Projects
        </p>
        <h2 className="section-heading text-3xl md:text-4xl font-extrabold mb-14 leading-tight">
          Things I've built
          <br />
          <span className="gradient-text">and deployed</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <FadeInSection key={p.title} delay={i * 0.1}>
              <div className="project-card rounded-2xl p-7 flex flex-col gap-4 group">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="project-title text-lg font-bold text-white leading-snug">
                    {p.title}
                  </h3>
                  <span
                    className={`project-badge text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${
                      p.status === "You're here"
                        ? "badge-special"
                        : "badge-live"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag text-xs px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-year text-xs text-slate-600 mt-1">
                  {p.year}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
