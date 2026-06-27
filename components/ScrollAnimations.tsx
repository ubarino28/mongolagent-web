"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // Хуудас солигдох бүрд (soft navigation) дахин ажиллана —
    // layout нэг л удаа mount хийгддэг тул pathname-ийг dependency болгож дахин observe хийнэ.
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-animate]"));
    if (!els.length) return;

    // Шинэ хуудсанд орвол өмнөх "animated" төлвийг цэвэрлэж, дахин анимэйшнлэх боломжтой болгоно
    els.forEach((el) => el.classList.remove("animated"));

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

    // Аюулгүйн нөөц: observer ажиллахгүй / scroll хийгээгүй үед контент нуугдаж үлдэхгүй
    const fallback = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("animated"));
    }, 1000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
