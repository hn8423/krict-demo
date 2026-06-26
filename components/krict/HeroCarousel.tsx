"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { HeroSlide } from "@/data/homeContent";

const AUTO_ADVANCE_MS = 5000;

const pad = (n: number) => String(n).padStart(2, "0");

export default function HeroCarousel({
  slides,
}: {
  slides: ReadonlyArray<HeroSlide>;
}) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  const count = slides.length;
  const hasMultiple = count > 1;

  const goTo = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (!playing || !hasMultiple) return;
    const timer = setInterval(
      () => setIndex((current) => (current + 1) % count),
      AUTO_ADVANCE_MS,
    );
    return () => clearInterval(timer);
  }, [playing, hasMultiple, count]);

  if (count === 0) return null;

  return (
    <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-sm bg-[#dfeaf4] lg:min-h-[460px]">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="(max-width: 1024px) 100vw, 55vw"
          className={`object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-4 bg-black/70 px-5 py-2 text-white">
        <button
          type="button"
          aria-label="이전 슬라이드"
          onClick={prev}
          disabled={!hasMultiple}
          className="text-lg disabled:opacity-40"
        >
          ←
        </button>
        <span className="text-sm tracking-widest tabular-nums">
          {pad(index + 1)} / {pad(count)}
        </span>
        <button
          type="button"
          aria-label="다음 슬라이드"
          onClick={next}
          disabled={!hasMultiple}
          className="text-lg disabled:opacity-40"
        >
          →
        </button>
        <button
          type="button"
          aria-label={playing ? "슬라이드 정지" : "슬라이드 재생"}
          aria-pressed={!playing}
          onClick={() => setPlaying((p) => !p)}
          disabled={!hasMultiple}
          className="ml-1 text-lg disabled:opacity-40"
        >
          {playing ? "❚❚" : "▶"}
        </button>
      </div>
    </div>
  );
}
