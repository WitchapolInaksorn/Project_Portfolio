import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <section id="about" className="about-section pt-16 pb-24 md:pt-50 md:pb-62">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-eyebrow text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          About
        </p>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeInSection direction="right">
            <div>
              <h2 className="section-heading text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                Hi👋I'm Witchaphon Inaksorn
                <br />
                <span className="gradient-text">Owen</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-3">
                Computer Science Graduate from Kasetsart University
                <br />
                Passionate about building web and mobile applications
                <br />
                with clean, user-friendly interfaces.
              </p>
              <ul className="flex flex-col gap-2 mb-8">
                {[
                  "💻 Front-End & Full-Stack Developer",
                  "🧪 Software Tester (JUnit, JMeter, Selenium)",
                  "🎓 Branch: Computer Science",
                  "📍 Bangkok, Thailand",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-slate-400 text-sm leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="stats-row flex gap-10">
                {[
                  { value: "3.58", label: "GPA" },
                  { value: "CS", label: "Kasetsart University" },
                  { value: "∞", label: "Always learning" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="stat-value text-2xl font-extrabold cyan-text">
                      {value}
                    </div>
                    <div className="stat-label text-xs text-slate-500 mt-1">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="left" delay={0.15}>
            <div className="code-card rounded-2xl p-6 font-mono text-sm leading-7 overflow-auto">
              <div className="code-header flex gap-1.5 mb-5">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <pre className="text-slate-300">
                <span className="code-keyword">const</span>{" "}
                <span className="code-var">developer</span> = {"{"}
                {"\n"}
                {"  "}
                <span className="code-key">name</span>:{" "}
                <span className="code-str">"Owen"</span>,{"\n"}
                {"  "}
                <span className="code-key">stack</span>: [
                <span className="code-str">"React"</span>,{" "}
                <span className="code-str">"Vue"</span>,{" "}
                <span className="code-str">"Node"</span>],{"\n"}
                {"  "}
                <span className="code-key">strengths</span>: [
                <span className="code-str">"Logic"</span>,{" "}
                <span className="code-str">"Design"</span>],{"\n"}
                {"  "}
                <span className="code-key">available</span>:{" "}
                <span className="code-bool">true</span>,{"\n"}
                {"  "}
                <span className="code-key">location</span>:{" "}
                <span className="code-str">"Bangkok 🇹🇭"</span>,{"\n"}
                {"}"};{"\n"}
                {"\n"}
                <span className="code-keyword">export default</span> developer;
              </pre>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
