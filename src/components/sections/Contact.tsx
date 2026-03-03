"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ContactForm } from "@/types";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
  { icon: <Github size={14} />, label: "github.com/SeunfunmiO", href: "https://github.com/SeunfunmiO" },
  { icon: <Mail size={14} />, label: "seunfunmicynthia@gmail.com", href: "mailto:seunfunmisore89@gmail.com" },
  { icon: <Linkedin size={14} />, label: "Cynthia Omisore", href: "http://linkedin.com/in/cynthia-omisore" },
  { icon: <Twitter size={14} />, label: "meetseunfunmi", href: "https://x.com/meetseunfunmi?s=21" },
];

const enquiryTypes = [
  "Full-time Role",
  "Freelance / Contract",
  "Collaboration",
  "General Enquiry",
];

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    enquiryType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: `${form.firstName} ${form.lastName}`,
          from_email: form.email,
          enquiry_type: form.enquiryType,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", enquiryType: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "#181818",
    border: "1px solid rgba(212,168,67,0.15)",
    color: "#f5f0e8",
    padding: "0.9rem 1rem",
    fontFamily: "var(--font-dm-mono)",
    fontSize: "0.8rem",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s",
  } as React.CSSProperties;

  const labelStyle = {
    fontFamily: "var(--font-dm-mono)",
    fontSize: "0.65rem",
    color: "#d4a843",
    textTransform: "uppercase" as const,
    letterSpacing: "0.15em",
    display: "block",
    marginBottom: "0.5rem",
  };

  return (
    <section id="contact" style={{ background: "#111111" }}>
      <div className="max-w-[1200px] mx-auto px-16 py-32">
        <div
          className="flex items-center gap-4 mb-4 text-gold uppercase tracking-[0.2em]"
          style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.68rem" }}
        >
          05 — Contact
          <span className="flex-1 h-px" style={{ background: "rgba(212,168,67,0.15)" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-24">
          {/* Left info */}
          <div>
            <h2
              className="mb-4 leading-[1.1]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 300,
              }}
            >
              Let&apos;s build
              <br />
              something{" "}
              <em className="text-gold" style={{ fontStyle: "italic" }}>great</em>
            </h2>
            <p
              className="mb-10 leading-[1.8]"
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: "0.8rem",
                color: "rgba(245,240,232,0.55)",
                fontWeight: 300,
              }}
            >
              I&apos;m open to full-time remote roles, contract work, and exciting
              freelance projects. If you&apos;re looking for a developer who ships
              clean, scalable code and communicates clearly — let&apos;s talk.
            </p>

            <div className="flex flex-col gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 no-underline transition-colors duration-200 pb-4 interactive"
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.75rem",
                    color: "#888880",
                    borderBottom: "1px solid rgba(212,168,67,0.15)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a843")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#888880")}
                >
                  <span
                    className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "#181818",
                      border: "1px solid rgba(212,168,67,0.15)",
                      fontSize: "0.9rem",
                    }}
                  >
                    {s.icon}
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label style={labelStyle}>First Name</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#9a7a2e")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(212,168,67,0.15)")}
                />
              </div>
              <div>
                <label style={labelStyle}>Last Name</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#9a7a2e")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(212,168,67,0.15)")}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Email Address</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@company.com"
                required
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#9a7a2e")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(212,168,67,0.15)")}
              />
            </div>

            <div>
              <label style={labelStyle}>Enquiry Type</label>
              <select
                name="enquiryType"
                value={form.enquiryType}
                onChange={handleChange}
                required
                style={{ ...inputStyle, cursor: "pointer" }}
                onFocus={(e) => (e.target.style.borderColor = "#9a7a2e")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(212,168,67,0.15)")}
              >
                <option value="">Select type...</option>
                {enquiryTypes.map((t) => (
                  <option key={t} value={t} style={{ background: "#181818" }}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                required
                rows={5}
                style={{ ...inputStyle, resize: "none" }}
                onFocus={(e) => (e.target.style.borderColor = "#9a7a2e")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(212,168,67,0.15)")}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="transition-all duration-300 hover:-translate-y-0.5 self-start interactive"
              style={{
                background: status === "sending" ? "#9a7a2e" : "#d4a843",
                color: "#0a0a0a",
                border: "none",
                padding: "1rem 2.5rem",
                fontFamily: "var(--font-dm-mono)",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                cursor: status === "sending" ? "not-allowed" : "pointer",
                fontWeight: 500,
              }}
            >
              {status === "sending" ? "Sending..." : "Send Message →"}
            </button>

            {status === "success" && (
              <p
                className="text-gold"
                style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.78rem" }}
              >
                ✓ Message sent successfully! I&apos;ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "0.78rem",
                  color: "#e05a5a",
                }}
              >
                Something went wrong. Please email me directly at seunfunmisore89@gmail.com
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
