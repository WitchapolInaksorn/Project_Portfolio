import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

const SCROLL_OFFSETS = {
  about: 60,
  skills: 60,
  projects: 60,
  contact: 60,
};

function smoothScrollTo(id) {
  const el = document.getElementById(id.toLowerCase());
  if (!el) return;
  const offset = SCROLL_OFFSETS[id.toLowerCase()] ?? 100;
  const target = el.getBoundingClientRect().top + window.scrollY - offset;
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link) => {
    smoothScrollTo(link);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-scrolled" : "nav-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="logo-text text-xl font-bold tracking-tight">
          &lt;Portfolio /&gt;
        </span>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                onClick={() => smoothScrollTo(link)}
                className="nav-link text-sm font-medium tracking-wide transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`hamburger-line ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span className={`hamburger-line ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`hamburger-line ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>
      {/* Mobile drawer */}
      {menuOpen && (
        <div className="mobile-menu md:hidden px-6 pb-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              onClick={() => smoothScrollTo(link)}
              className="mobile-nav-link text-left text-base font-medium py-2 border-b border-white/10 block"
            >
              {link}
            </a>
          ))}

          <a
            onClick={() => smoothScrollTo("contact")}
            className="hire-btn px-4 py-2 rounded-full text-sm font-semibold w-max mt-2 text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
