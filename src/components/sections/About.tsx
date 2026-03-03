"use client";

import { useRef, useEffect } from "react";

const details = [
  { key: "Location", value: "Nigeria 🇳🇬 · Open to Remote" },
  { key: "Experience", value: "Certified Senior Full Stack Developer" },
  { key: "Focus", value: "Next.js · TypeScript · React · Node.js" },
  { key: "Languages", value: "English (Fluent) · Yoruba (Native)" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              (el as HTMLElement).style.transitionDelay = `${i * 0.1}s`;
              el.classList.add("opacity-100", "translate-y-0");
              el.classList.remove("opacity-0", "translate-y-5");
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ background: "#111111" }}
    >
      <div className="max-w-[1200px] mx-auto px-16 py-32">
        <div
          className="flex items-center gap-4 mb-4 text-gold uppercase tracking-[0.2em]"
          style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.68rem" }}
        >
          01 — About Me
          <span className="flex-1 h-px" style={{ background: "rgba(212,168,67,0.15)" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          {/* Text */}
          <div>
            <h2
              className="mb-8 leading-[1.1] reveal opacity-0 translate-y-5 transition-all duration-700"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 300,
              }}
            >
              The person behind
              <br />
              <em className="text-gold" style={{ fontStyle: "italic" }}>the code</em>
            </h2>

            {[
              <>I&apos;m Oluwaseunfunmi Cynthia Omisore, a certified Senior Full Stack Developer from <strong className="text-gold font-medium">Osun State, Nigeria</strong>. I build complete web solutions from pixel-perfect interfaces to robust backend systems.</>,
              <>My approach blends <strong className="text-gold font-medium">technical precision with real-world thinking</strong> — every app I build solves a genuine problem, whether streamlining food ordering, empowering women with health tracking, or enabling seamless e-commerce.</>,
              <>I&apos;m currently open to <strong className="text-gold font-medium">international remote roles</strong> and freelance projects. I bring strong communication, clean code habits, and a proven ability to ship production-ready applications.</>,
            ].map((text, i) => (
              <p
                key={i}
                className="mb-6 leading-[1.9] reveal opacity-0 translate-y-5 transition-all duration-700"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "0.88rem",
                  color: "rgba(245,240,232,0.65)",
                  fontWeight: 300,
                }}
              >
                {text}
              </p>
            ))}

            <div className="mt-10 flex flex-col gap-4">
              {details.map((d) => (
                <div
                  key={d.key}
                  className="flex gap-6 items-center pb-4 reveal opacity-0 translate-y-5 transition-all duration-700"
                  style={{ borderBottom: "1px solid rgba(212,168,67,0.15)" }}
                >
                  <span
                    className="text-gold uppercase tracking-[0.15em] min-w-[100px]"
                    style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.65rem" }}
                  >
                    {d.key}
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.82rem", color: "#f5f0e8" }}
                  >
                    {d.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card */}
          <div className="reveal opacity-0 translate-y-5 transition-all duration-700">
            <div
              className="relative p-12"
              style={{
                background: "#181818",
                border: "1px solid rgba(212,168,67,0.15)",
              }}
            >
              <div
                className="absolute top-[-1px] left-8 w-16 h-[3px]"
                style={{ background: "#d4a843" }}
              />
              <blockquote
                className="mb-8 leading-[1.5]"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.6rem",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "#f5f0e8",
                }}
              >
                &ldquo;I don&apos;t just write code — I craft{" "}
                <span className="text-gold">experiences</span> that work
                beautifully for real people.&rdquo;
              </blockquote>
              <div
                className="flex items-center gap-3 uppercase tracking-[0.12em] text-[#888880]"
                style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.7rem" }}
              >
                <span>🇳🇬</span>
                <span>Osun State, Nigeria · Building for the World</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
