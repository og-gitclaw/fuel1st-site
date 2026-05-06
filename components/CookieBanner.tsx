"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "fuel1st_cookie_ack";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setShow(true);
    } catch {
      // localStorage unavailable; do nothing
    }
  }, []);

  if (!show) return null;

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
    setShow(false);
  }

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white shadow-lg"
    >
      <div className="container-page flex flex-col items-start gap-3 py-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-ink-soft">
          We use minimal analytics cookies to understand traffic to this site. See our{" "}
          <a href="/cookies" className="text-brand underline underline-offset-2">
            cookie notice
          </a>{" "}
          for details.
        </p>
        <button onClick={accept} className="btn-primary">
          OK, got it
        </button>
      </div>
    </div>
  );
}
