"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      requestAnimationFrame(animateRing);
    };

    document.addEventListener("mousemove", handleMouseMove);
    const rafId = requestAnimationFrame(animateRing);

    const interactives = document.querySelectorAll("a, button, .interactive");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (cursorRef.current) {
          cursorRef.current.style.width = "20px";
          cursorRef.current.style.height = "20px";
        }
        if (ringRef.current) {
          ringRef.current.style.width = "50px";
          ringRef.current.style.height = "50px";
        }
      });
      el.addEventListener("mouseleave", () => {
        if (cursorRef.current) {
          cursorRef.current.style.width = "12px";
          cursorRef.current.style.height = "12px";
        }
        if (ringRef.current) {
          ringRef.current.style.width = "36px";
          ringRef.current.style.height = "36px";
        }
      });
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-[width,height] duration-200"
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "#d4a843",
        }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-300 opacity-60"
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid #d4a843",
        }}
      />
    </>
  );
}
