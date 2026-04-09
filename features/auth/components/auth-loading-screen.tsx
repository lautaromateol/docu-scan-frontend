"use client";

import { useEffect, useState } from "react";

const MESSAGES = {
  "sign-in": [
    "Connecting to server…",
    "Waking up the backend…",
    "Verifying your credentials…",
    "Almost there…",
    "Hang tight, nearly done…",
  ],
  "sign-up": [
    "Creating your account…",
    "Waking up the server…",
    "Setting up your profile…",
    "Almost there…",
    "Hang tight, nearly done…",
  ],
} as const;

const MESSAGE_INTERVAL_MS = 4000;
const PROGRESS_INTERVAL_MS = 20000 / 5; // fill 5 dots over ~20 seconds

interface AuthLoadingScreenProps {
  type: "sign-in" | "sign-up";
}

export function AuthLoadingScreen({ type }: AuthLoadingScreenProps) {
  const messages = MESSAGES[type];
  const [messageIndex, setMessageIndex] = useState(0);
  const [visibleMessage, setVisibleMessage] = useState(true);
  const [filledDots, setFilledDots] = useState(1);

  // Cycle through messages with a fade transition
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessage(false);
      setTimeout(() => {
        setMessageIndex((i) => (i + 1) % messages.length);
        setVisibleMessage(true);
      }, 300);
    }, MESSAGE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [messages.length]);

  // Fill progress dots over time
  useEffect(() => {
    if (filledDots >= 5) return;
    const timeout = setTimeout(() => {
      setFilledDots((d) => Math.min(d + 1, 5));
    }, PROGRESS_INTERVAL_MS);

    return () => clearTimeout(timeout);
  }, [filledDots]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background gap-8 animate-fade-in">
      {/* Decorative background orbs — mirror the auth page layout */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.18 195) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 w-80 h-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.18 195) 0%, transparent 70%)" }}
      />

      {/* Spinner */}
      <div className="relative flex items-center justify-center">
        {/* Outer spinning ring */}
        <div className="w-20 h-20 rounded-full border-4 border-border border-t-primary animate-spin" />
        {/* Inner glow dot */}
        <div className="absolute w-6 h-6 rounded-full bg-primary animate-glow-pulse" />
      </div>

      {/* Cycling message */}
      <div className="flex flex-col items-center gap-3 text-center px-6">
        <h2
          className="font-display text-2xl text-foreground transition-opacity duration-300"
          style={{ opacity: visibleMessage ? 1 : 0 }}
        >
          {messages[messageIndex]}
        </h2>

        {/* Animated ellipsis */}
        <div className="flex gap-0.5 text-primary text-lg font-mono" aria-hidden>
          <span className="animate-fade-in animation-delay-100">.</span>
          <span className="animate-fade-in animation-delay-200">.</span>
          <span className="animate-fade-in animation-delay-300">.</span>
        </div>

        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
          The server is waking up after a period of inactivity.
          <br />
          This may take up to 5 minutes.
        </p>
      </div>

      {/* Progress dots */}
      <div className="flex gap-2" aria-label="Loading progress">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full transition-all duration-500"
            style={{
              backgroundColor:
                i < filledDots
                  ? "oklch(0.72 0.18 195)"
                  : "oklch(1 0 0 / 12%)",
              boxShadow:
                i < filledDots
                  ? "0 0 8px oklch(0.72 0.18 195 / 60%)"
                  : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}
