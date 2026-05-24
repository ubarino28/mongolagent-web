"use client";
import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-animate]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = el.dataset.delay ?? "0";
          setTimeout(() => el.classList.add("animated"), Number(delay));
          observer.unobserve(el);
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
