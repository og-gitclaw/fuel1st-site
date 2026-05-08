"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay before this item animates in (ms). Use `index * 80` for stagger. */
  delay?: number;
  /** Class applied to the wrapper. Common: `h-full` to preserve grid heights. */
  className?: string;
  /** How far it rises during the entrance, in px. Default 16. */
  distance?: number;
  /** Animation duration (ms). Default 600. */
  duration?: number;
};

/**
 * Reveal — fades in and rises an element when it enters the viewport.
 * Pure CSS transition triggered by an IntersectionObserver.
 *
 * - Respects `prefers-reduced-motion` (renders visible immediately).
 * - Falls back to immediate visibility if IntersectionObserver isn't supported.
 * - Animation runs once, then the observer disconnects.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  distance = 16,
  duration = 600,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : `translateY(${distance}px)`,
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: visible ? undefined : "transform, opacity",
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
