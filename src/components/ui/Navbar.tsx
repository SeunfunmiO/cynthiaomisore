"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 left-0 right-0 z-[100] flex justify-between items-center px-16 py-6 transition-all duration-300"
      style={{
        borderBottom: "1px solid rgba(212,168,67,0.15)",
        backdropFilter: "blur(20px)",
        background: scrolled ? "rgba(10,10,10,0.9)" : "rgba(10,10,10,0.7)",
      }}
    >
      <div
        className="font-display text-[1.4rem] font-semibold text-gold tracking-wide"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        S. Omisore
      </div>

      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-mono-custom text-[0.72rem] text-[#888880] uppercase tracking-[0.12em] no-underline transition-colors duration-300 hover:text-gold"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <a
        href="mailto:seunfunmicynthia@gmail.com"
        className="font-mono-custom text-[0.72rem] uppercase tracking-[0.1em] text-gold border border-[#9a7a2e] px-5 py-2 no-underline transition-all duration-300 hover:bg-gold hover:text-[#0a0a0a]"
        style={{ fontFamily: "var(--font-dm-mono)" }}
      >
        Hire Me
      </a>
    </nav>
  );
}
