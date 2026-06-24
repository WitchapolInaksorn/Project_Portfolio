import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import FadeInSection from "./FadeInSection";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        "Sent_Contact",
        "template_zzd7okw",
        formRef.current,
        "wMCxYNkE7nJ5SLVrq",
      );
      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="contact-section pt-12 pb-20 md:pt-16 md:pb-28"
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="section-eyebrow text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Contact
        </p>
        <h2 className="section-heading text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
          Let's build something
          <br />
          <span className="gradient-text">worth using</span>
        </h2>
        <p className="text-slate-400 mb-12 leading-relaxed">
          Open to freelance projects, collaborations, and full-time
          opportunities. 
          <br />
          If what you're building is worth building well — reach
          out.
        </p>
        <FadeInSection delay={0.1}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-card rounded-2xl p-8 text-left flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <label className="contact-label text-xs font-semibold tracking-widest uppercase text-slate-500">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="contact-input rounded-xl px-4 py-3 text-sm outline-none"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="contact-label text-xs font-semibold tracking-widest uppercase text-slate-500">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="contact-input rounded-xl px-4 py-3 text-sm outline-none"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="contact-label text-xs font-semibold tracking-widest uppercase text-slate-500">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                placeholder="Tell me what you're building..."
                required
                className="contact-input rounded-xl px-4 py-3 text-sm outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className={`cta-primary w-full py-3.5 rounded-full font-semibold text-base transition-all mt-2 ${
                status === "sent" ? "sent-state" : ""
              }`}
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                  ? "✓ Message Sent!"
                  : status === "error"
                    ? "✗ Failed, try again"
                    : "Send Message"}
            </button>
          </form>
        </FadeInSection>
        <div className="social-row flex justify-center gap-6 mt-10">
          {[
            { label: "GitHub", url: "https://github.com/WitchapolInaksorn" },
            {
              label: "LinkedIn",
              url: "https://www.linkedin.com/in/witchaphon-inaksorn-b7a25740a/",
            },
          ].map(({ label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-sm font-medium text-slate-500 hover:text-cyan-400 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
