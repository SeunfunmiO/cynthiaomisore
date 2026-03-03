export default function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row justify-between items-center gap-4 px-16 py-12"
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(212,168,67,0.15)",
      }}
    >
      <div
        className="text-gold font-semibold"
        style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem" }}
      >
        S. Omisore
      </div>
      <div
        className="text-center"
        style={{
          fontFamily: "var(--font-dm-mono)",
          fontSize: "0.65rem",
          color: "#888880",
          letterSpacing: "0.1em",
        }}
      >
        Designed &amp; Built with 🖤 · Nigeria 🇳🇬 · {new Date().getFullYear()}
      </div>
      <div
        style={{
          fontFamily: "var(--font-dm-mono)",
          fontSize: "0.65rem",
          color: "#888880",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
        }}
      >
        Senior Full Stack <span className="text-gold">Developer</span>
      </div>
    </footer>
  );
}
