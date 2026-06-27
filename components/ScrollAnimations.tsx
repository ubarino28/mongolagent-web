"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-animate], .stagger"));
    if (!els.length) return;

    const reveal = (el: HTMLElement) => {
      if (el.classList.contains("in")) return;
      const delay = Number(el.dataset.delay ?? "0");
      if (delay) window.setTimeout(() => el.classList.add("animated", "in"), delay);
      else el.classList.add("animated", "in");
    };

    // Re-animate on navigation
    els.forEach((el) => el.classList.remove("animated", "in"));

    // Reveal anything currently in / above the viewport
    const revealInView = () => {
      const vh = window.innerHeight;
      for (const el of els) {
        if (el.classList.contains("in")) continue;
        if (el.getBoundingClientRect().top < vh * 0.9) reveal(el);
      }
    };

    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              reveal(entry.target as HTMLElement);
              observer?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
      );
      els.forEach((el) => observer!.observe(el));
    } else {
      els.forEach(reveal);
    }

    // Backup: scroll/resize listener guarantees in-view sections reveal even if the
    // observer misses them (the real fix for "sections stay blank after scrolling").
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => { raf = 0; revealInView(); });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const t1 = window.setTimeout(revealInView, 200);
    // Ultimate safety net — content must never stay permanently hidden.
    const t2 = window.setTimeout(() => els.forEach(reveal), 6000);

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [pathname]);

  return null;
}
