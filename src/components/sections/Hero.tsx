"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const bgTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (bgTextRef.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        bgTextRef.current.style.transform = `translateY(-50%) translateX(${x}px)`;
      }
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-16 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(212,168,67,0.04) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Background text */}
      <div
        ref={bgTextRef}
        className="absolute right-[-2rem] top-1/2 pointer-events-none select-none leading-none transition-transform duration-75"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(8rem, 18vw, 20rem)",
          fontWeight: 700,
          color: "transparent",
          WebkitTextStroke: "1px rgba(212,168,67,0.07)",
          transform: "translateY(-50%)",
          whiteSpace: "nowrap",
        }}
      >
        CODE
      </div>

      {/* Vertical line */}
      <div
        className="absolute top-0 bottom-0 left-1/2 w-px opacity-20 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #9a7a2e, transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <div
          className="flex items-center gap-3 mb-6 text-gold uppercase tracking-[0.2em] animate-fade-up animate-delay-1"
          style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.7rem" }}
        >
          <span
            className="block w-8 h-px"
            style={{ background: "#d4a843" }}
          />
          Available for opportunities
        </div>

        <h1
          className="leading-[1.05] mb-3 animate-fade-up animate-delay-2"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(3rem, 6vw, 6.5rem)",
            fontWeight: 300,
          }}
        >
          Oluwaseunfunmi
          <br />
          <span className="font-bold text-gold">Omisore</span>
        </h1>

        <p
          className="mb-8 animate-fade-up animate-delay-3"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1.2rem, 2.5vw, 2.2rem)",
            fontWeight: 300,
            color: "#888880",
            fontStyle: "italic",
          }}
        >
          Senior Full Stack Developer
        </p>

        <p
          className="mb-12 animate-fade-up animate-delay-4 max-w-xl"
          style={{
            fontFamily: "var(--font-dm-mono)",
            fontSize: "0.95rem",
            color: "rgba(245,240,232,0.6)",
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          Building high-performance web applications with precision and purpose
          — from Lagos to the world. Specialised in React, Next.js, TypeScript &
          Node.js.
        </p>

        <div className="flex gap-5 flex-wrap animate-fade-up animate-delay-5">
          <Link
            href="#projects"
            className="inline-block px-9 py-[0.9rem] bg-gold text-[#0a0a0a] uppercase tracking-[0.12em] no-underline font-medium transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.75rem" }}
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="inline-block px-9 py-[0.9rem] border border-[#9a7a2e] text-gold uppercase tracking-[0.12em] no-underline transition-all duration-300 hover:bg-[rgba(212,168,67,0.1)] hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.75rem" }}
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute right-16 bottom-16 hidden md:flex gap-12">
        {[
          { num: "3+", label: "Live Projects" },
          { num: "13", label: "Languages Supported" },
        ].map((stat) => (
          <div key={stat.label} className="text-right">
            <div
              className="text-gold leading-none"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.5rem", fontWeight: 700 }}
            >
              {stat.num}
            </div>
            <div
              className="mt-1 uppercase tracking-[0.15em] text-[#888880]"
              style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.65rem" }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce2">
        <div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, #d4a843, transparent)" }}
        />
        <span
          className="uppercase tracking-[0.15em] text-[#888880]"
          style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.6rem" }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
