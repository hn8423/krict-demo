import Link from "next/link";
import HeroCarousel from "./HeroCarousel";
import ThumbnailRow from "./ThumbnailRow";
import { FEATURED, HERO_SLIDES } from "@/data/homeContent";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#eafaf7] via-white to-[#eef4fb]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-stretch">
        <div className="flex flex-col">
          <p className="mb-4 text-base font-semibold text-gray-500">
            {FEATURED.tag}
          </p>
          <h2 className="text-3xl font-bold leading-snug text-[#14275c] sm:text-[40px] sm:leading-[1.25]">
            <Link
              href={FEATURED.href}
              className="text-krict-cyan underline underline-offset-4 hover:opacity-80"
            >
              {FEATURED.title}
            </Link>
          </h2>

          <ul className="mt-8 space-y-2 text-[15px] leading-7 text-gray-700">
            {FEATURED.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>

          <Link
            href={FEATURED.href}
            className="mt-10 inline-flex w-fit items-center gap-3 text-lg font-bold text-[#14275c]"
          >
            View More
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#14275c]">
              ↗
            </span>
          </Link>

          <ThumbnailRow />
        </div>

        <div className="relative min-h-[320px]">
          <HeroCarousel slides={HERO_SLIDES} />
        </div>
      </div>
    </section>
  );
}
