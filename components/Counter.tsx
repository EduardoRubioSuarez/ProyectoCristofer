"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  target,
  prefix = "",
  suffix = "",
  label,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const duration = 1500;
        const start = performance.now();

        function tick(now: number) {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.round(progress * target));
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      <span className="text-4xl font-extrabold text-accent sm:text-5xl">
        {prefix}
        {value}
        {suffix}
      </span>
      <span className="text-sm text-ink/70">{label}</span>
    </div>
  );
}
