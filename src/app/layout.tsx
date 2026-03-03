import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oluwaseunfunmi Omisore — Senior Full Stack Developer",
  description:
    "Senior Full Stack Developer from Nigeria, specialised in React, Next.js, TypeScript & Node.js. Building high-performance web applications with precision and purpose.",
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Nigeria",
    "Remote Developer",
    "Oluwaseunfunmi Omisore",
  ],
  authors: [{ name: "Oluwaseunfunmi Cynthia Omisore" }],
  openGraph: {
    title: "Oluwaseunfunmi Omisore — Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer from Nigeria specialised in React, Next.js, TypeScript & Node.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
