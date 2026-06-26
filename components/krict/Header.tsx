"use client";

import { useState } from "react";
import Link from "next/link";
import KrictLogo from "./KrictLogo";
import MegaMenu from "./MegaMenu";
import { GNB_ITEMS } from "@/data/navItems";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem =
    activeIndex !== null ? GNB_ITEMS[activeIndex] : undefined;

  return (
    <header
      className="relative w-full border-b border-gray-200 bg-white"
      onMouseLeave={() => setActiveIndex(null)}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="KRICT 홈">
          <KrictLogo />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {GNB_ITEMS.map((item, index) => (
              <li
                key={item.label}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                <button
                  type="button"
                  className={`relative py-7 text-[17px] font-semibold transition-colors ${
                    activeIndex === index
                      ? "text-krict-cyan"
                      : "text-[#222] hover:text-krict-cyan"
                  }`}
                >
                  {item.label}
                  {activeIndex === index && (
                    <span className="absolute -bottom-px left-0 h-0.5 w-full bg-krict-cyan" />
                  )}
                </button>
              </li>
            ))}
            <li className="py-7">
              <span className="font-[cursive] text-xl italic text-krict-cyan">
                Channel
              </span>{" "}
              <span className="text-[17px] font-bold text-[#222]">KRICT</span>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-5 text-[#222]">
          <button
            type="button"
            className="flex items-center gap-1 text-sm font-semibold hover:text-krict-cyan"
          >
            <span aria-hidden>🌐</span> ENG
          </button>
          <button type="button" aria-label="검색" className="text-xl">
            🔍
          </button>
          <button type="button" aria-label="전체메뉴" className="text-xl">
            ☰
          </button>
        </div>
      </div>

      {activeItem?.columns && (
        <MegaMenu title={activeItem.label} columns={activeItem.columns} />
      )}
    </header>
  );
}
