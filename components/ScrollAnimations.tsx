"use client";
import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-animate]"));
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.delay ?? "0");
          window.setTimeout(() => el.classList.add("animated"), delay);
          observer.unobserve(el);
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );

    els.forEach((el) => observer.observe(el));

    // Аюулгүйн нөөц: observer ажиллахгүй / full-page render / scroll хийгээгүй үед
    // контент opacity:0-д гацаж нуугдахаас сэргийлж, 1 секундын дараа бүгдийг харуулна.
    const fallback = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("animated"));
    }, 1000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return null;
}
