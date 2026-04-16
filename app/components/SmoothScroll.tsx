"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // Override smooth scroll behavior com duração de 0.8s
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a[href^='#']");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      const element = document.querySelector(href);
      if (!element) return;

      e.preventDefault();

      const startPosition = window.scrollY;
      const targetPosition = (element as HTMLElement).offsetTop;
      const distance = targetPosition - startPosition;
      const duration = 800; // 0.8s em ms
      let start: number | null = null;

      const easeInOutCubic = (t: number) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return null;
}
