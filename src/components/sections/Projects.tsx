"use client";

import { PROJECTS } from "@/lib/data";

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

const GithubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" style={{ background: "#111111" }}>
      <div className="max-w-[1200px] mx-auto px-16 py-32">
        <div
          className="flex items-center gap-4 mb-4 text-gold uppercase tracking-[0.2em]"
          style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.68rem" }}
        >
          03 — Projects
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
          Work that
          <br />
          <em className="text-gold" style={{ fontStyle: "italic" }}>ships</em>
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            gap: "1.5px",
            background: "rgba(212,168,67,0.15)",
            border: "1px solid rgba(212,168,67,0.15)",
          }}
        >
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className={`flex flex-col p-10 relative overflow-hidden transition-colors duration-300 interactive group ${
                project.featured ? "md:col-span-2" : ""
              }`}
              style={{ background: "#111111" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#181818")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#111111")}
            >
              {/* Hover bottom line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                style={{ background: "linear-gradient(to right, #d4a843, transparent)" }}
              />

              <div
                className="leading-none mb-[-1rem] select-none"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "4rem",
                  fontWeight: 700,
                  color: "rgba(212,168,67,0.08)",
                }}
              >
                0{i + 1}
              </div>

              <h3
                className="mb-1 leading-[1.2]"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.6rem",
                  fontWeight: 600,
                  color: "#f5f0e8",
                }}
              >
                {project.name}
              </h3>

              <div
                className="mb-5 text-gold uppercase tracking-[0.15em]"
                style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.65rem" }}
              >
                {project.type}
              </div>

              <p
                className="flex-1 mb-6 leading-[1.8]"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "0.8rem",
                  color: "rgba(245,240,232,0.55)",
                  fontWeight: 300,
                }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.6rem",
                      padding: "0.2rem 0.6rem",
                      background: "rgba(212,168,67,0.08)",
                      color: "#9a7a2e",
                      border: "1px solid rgba(212,168,67,0.15)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-6">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 no-underline transition-colors duration-200 hover:text-gold"
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.65rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#888880",
                  }}
                >
                  <ExternalIcon /> Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 no-underline transition-colors duration-200 hover:text-gold"
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.65rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#888880",
                  }}
                >
                  <GithubIcon /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
