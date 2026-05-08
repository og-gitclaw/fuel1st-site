"use client";

import { useEffect, useRef } from "react";

type TickerProps = {
  /** Target number to count up to. */
  target: number;
  /** Format the number for display. Default: locale-formatted (commas). */
  format?: (n: number) => string;
  /** Animation duration in ms. Default 1200. */
  duration?: number;
};

/**
 * Ticker — counts a number from 0 up to `target` over `duration` ms when the
 * element scrolls into view. Uses requestAnimationFrame and writes directly
 * to textContent to avoid React re-render churn during the animation.
 *
 * SSR renders the final value (good for SEO, no-JS users, and reduced-motion
 * users — the effect simply doesn't run for them).
 */
export function Ticker({
  target,
  format = (n) => n.toLocaleString(),
  duration = 1200,
}: TickerProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    if (typeof IntersectionObserver === "undefined") return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const startTime = performance.now();
        // Snap to 0 then animate up; one frame of "0" is hard to perceive.
        el.textContent = format(0);
        const tick = (now: number) => {
          const t = Math.min((now - startTime) / duration, 1);
          // Ease-out cubic — fast at start, settles at the end.
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = format(Math.round(target * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, format]);

  return <span ref={ref}>{format(target)}</span>;
}
