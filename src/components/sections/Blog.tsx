"use client"

import { BLOG_POSTS } from "@/lib/data";

export default function Blog() {
  return (
    <section id="blog" style={{ background: "#0a0a0a" }}>
      <div className="max-w-[1200px] mx-auto px-16 py-32">
        <div
          className="flex items-center gap-4 mb-4 text-gold uppercase tracking-[0.2em]"
          style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.68rem" }}
        >
          04 — Blog
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
          Thoughts &amp;
          <br />
          <em className="text-gold" style={{ fontStyle: "italic" }}>Writings</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, i) => (
            <div
              key={i}
              className="p-8 transition-all duration-300 cursor-pointer interactive group"
              style={{
                border: "1px solid rgba(212,168,67,0.15)",
                background: "#111111",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#9a7a2e";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(212,168,67,0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="mb-4 text-gold uppercase tracking-[0.15em]"
                style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.65rem" }}
              >
                {post.date}
              </div>
              <h3
                className="mb-3 leading-[1.3]"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                }}
              >
                {post.title}
              </h3>
              <p
                className="mb-6 leading-[1.8]"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "0.75rem",
                  color: "rgba(245,240,232,0.5)",
                  fontWeight: 300,
                }}
              >
                {post.excerpt}
              </p>
              <span
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "0.6rem",
                  padding: "0.2rem 0.7rem",
                  border: "1px solid rgba(212,168,67,0.15)",
                  color: "#888880",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {post.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
