import { useEffect, useState } from "react";

const ROLES = [
  "Full-Stack Developer",
  "Web Application Developer",
  "Problem Solver",
  "Continuous Learner",
];

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

function smoothScrollTo(id) {
  const el = document.getElementById(id.toLowerCase());
  if (!el) return;
  const target = el.getBoundingClientRect().top + window.scrollY - 60;
  const start = window.scrollY;
  const distance = target - start;
  const duration = 800;
  let startTime = null;
  const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    window.scrollTo(0, start + distance * ease(progress));
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      <div className="blob blob-cyan absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20" />
      <div className="blob blob-violet absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl opacity-15" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="eyebrow text-sm font-semibold tracking-[0.2em] uppercase mb-6">
          Available for Opportunities
        </p>
        <h1 className="hero-heading font-extrabold leading-tight mb-6">
          Code with precision.
          <br />
          <span className="gradient-text">Design with intent.</span>
        </h1>
        <div className="role-line text-xl md:text-2xl font-mono mb-8 h-8">
          <span className="text-slate-400">I build </span>
          <span className="cyan-text">{role}</span>
          <span className="cursor-blink">|</span>
        </div>
        <p className="hero-sub max-w-xl mx-auto text-slate-400 text-base md:text-lg leading-relaxed mb-10">
          Fresh Graduate passionate about building clean, user-friendly
          applications and turning ideas into real solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            onClick={() => {
              smoothScrollTo("projects");
            }}
            className="cta-primary px-8 py-3.5 rounded-full font-semibold text-base transition-all"
          >
            View Projects
          </a>
          <a
            onClick={() => {
              smoothScrollTo("contact");
            }}
            className="cta-secondary px-8 py-3.5 rounded-full font-semibold text-base transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
