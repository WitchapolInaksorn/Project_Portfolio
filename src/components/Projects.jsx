import { useState } from "react";
import FadeInSection from "./FadeInSection";
import ProjectModal from "./ProjectModal";

// TOEIC
import toeicWelcome from "../assets/Images/Toeic Game/welcomePage.png";
import toeicHome from "../assets/Images/Toeic Game/homepage.png";
import toeicFlash from "../assets/Images/Toeic Game/flashcard.png";
import toeicHang from "../assets/Images/Toeic Game/hangmangame.png";
import toeicMemory from "../assets/Images/Toeic Game/memorygame.png";
import toeicSpeed from "../assets/Images/Toeic Game/speedgame.png";

// Funeral
import funeral1 from "../assets/Images/Funeral/Funeral1.png";
import funeral2 from "../assets/Images/Funeral/Funeral2.png";
import funeral3 from "../assets/Images/Funeral/Funeral3.png";
import funeralPrint from "../assets/Images/Funeral/FuneralPrint.png";

// ValorantBanDraft
import valInit from "../assets/Images/banDraftValorant/initialPage.png";
import valBan from "../assets/Images/banDraftValorant/bannedPhrase.png";
import valPick from "../assets/Images/banDraftValorant/pickPhrase.png";
import valSide from "../assets/Images/banDraftValorant/selectionSide.png";
import valRandom from "../assets/Images/banDraftValorant/randomPhrase.png";
import valSummary from "../assets/Images/banDraftValorant/SummaryPage.png";

// ValorantLineup
import selectMap from "../assets/Images/LineupValorant/selectMap.png";
import selectAgent from "../assets/Images/LineupValorant/selectAgent.png";
import selectOption from "../assets/Images/LineupValorant/selectOption.png";
import createLineup from "../assets/Images/LineupValorant/createLineup.png";
import viewLineup from "../assets/Images/LineupValorant/viewLineup.png";
import communityPage from "../assets/Images/LineupValorant/communityPage.png";

const PROJECTS = [
  {
    title: "TOEIC Vocab Game",
    description:
      `An interactive TOEIC vocab app with 4 mini-games \n` +
      `Flashcard, Hangman, Speed Challenge, and Memory Match \n` +
      `each targeting a different learning skill.`,
    longDescription:
      `An interactive TOEIC vocab app with 4 mini-games \n` +
      `Flashcard, Hangman, Speed Challenge, and Memory Match \n` +
      `each targeting a different learning skill.`,
    tags: ["React", "Vite", "CSS", "Tailwind", "Json", "Vercel"],
    status: "Deployed",
    year: "2026",
    link: "https://toeic-game-rosy.vercel.app/",
    images: [
      toeicWelcome,
      toeicHome,
      toeicFlash,
      toeicHang,
      toeicMemory,
      toeicSpeed,
    ],
  },
  {
    title: "Funeral Sticker Generator",
    description:
      "A Thai funeral sticker tool that generates A4-printable grids \n" +
      "with fully customizable Thai text overlays on a gold-on-dark template \n" +
      "and exported as PNG or PDF in one click.",
    longDescription:
      "A Thai funeral sticker tool that generates A4-printable grids \n" +
      "with fully customizable Thai text overlays on a gold-on-dark template \n" +
      "and exported as PNG or PDF in one click.",
    tags: ["React", "Vite", "CSS", "Tailwind", "jsPDF", "Vercel"],
    status: "Deployed",
    year: "2026",
    link: "https://project-funeral-sticker-system.vercel.app/",
    images: [funeral1, funeral2, funeral3, funeralPrint],
  },
  {
    title: "Valorant Map Draft",
    description:
      "A Valorant map veto tool supporting Bo3 & Bo5 formats \n" +
      "Teams take turns banning and picking maps with a draft flow , \n" +
      "Ending with a full summary of the map pool and side selections.",
    longDescription:
      "A Valorant map veto tool supporting Bo3 & Bo5 formats \n" +
      "Teams take turns banning and picking maps with a draft flow , \n" +
      "Ending with a full summary of the map pool and side selections.",
    tags: ["React", "Vite", "CSS", "Tailwind", "Vercel"],
    status: "Deployed",
    year: "2026",
    link: "https://valorant-draft.vercel.app/",
    images: [valInit, valBan, valPick, valSide, valRandom, valSummary],
  },
  {
    title: "Valorant Lineup",
    description:
      "A tactical lineup platform for Valorant players. \n" +
      "Save, organize, and revisit utility lineups with video references. \n" +
      "Share strategies with teammates or keep them private for personal use.",
    longDescription:
      "A tactical lineup platform for Valorant players. \n" +
      "Save, organize, and revisit utility lineups with video references. \n" +
      "Share strategies with teammates or keep them private for personal use.",
    tags: ["React", "Vite", "CSS", "Tailwind", "Vercel"],
    status: "Deployed",
    year: "2026",
    link: "https://valorant-lineup.vercel.app/",
    images: [
      selectMap,
      selectAgent,
      selectOption,
      createLineup,
      viewLineup,
      communityPage,
    ],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);
  return (
    <div>
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
                <div
                  className="project-card rounded-2xl p-7 flex flex-col gap-4 group"
                  onClick={() => setSelected(p)}
                >
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
                  <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
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
      {/* Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
