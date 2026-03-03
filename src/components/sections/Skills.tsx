"use client";

import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" style={{ background: "#0a0a0a" }}>
      <div className="max-w-[1200px] mx-auto px-16 py-32">
        <div
          className="flex items-center gap-4 mb-4 text-gold uppercase tracking-[0.2em]"
          style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.68rem" }}
        >
          02 — Skills
          <span className="flex-1 h-px" style={{ background: "rgba(212,168,67,0.15)" }} />
        </div>

        <h2
          className="mb-16 leading-[1.1]"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 300,
          }}
        >
          My Technical
          <br />
          <em className="text-gold" style={{ fontStyle: "italic" }}>Arsenal</em>
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            gap: "1.5px",
            background: "rgba(212,168,67,0.15)",
            border: "1px solid rgba(212,168,67,0.15)",
          }}
        >
          {SKILLS.map((cat) => (
            <div
              key={cat.title}
              className="p-10 transition-colors duration-300 group interactive"
              style={{ background: "#0a0a0a" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#181818")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0a0a0a")}
            >
              <div className="text-2xl mb-4">{cat.icon}</div>
              <div
                className="uppercase tracking-[0.12em] text-gold mb-6"
                style={{ fontFamily: "var(--font-syne)", fontSize: "0.78rem", fontWeight: 700 }}
              >
                {cat.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="transition-all duration-200 cursor-default interactive"
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.68rem",
                      padding: "0.3rem 0.7rem",
                      border: "1px solid rgba(212,168,67,0.15)",
                      color: "rgba(245,240,232,0.6)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#d4a843";
                      e.currentTarget.style.color = "#d4a843";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(212,168,67,0.15)";
                      e.currentTarget.style.color = "rgba(245,240,232,0.6)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
