"use client";

import { useState } from "react";
import ContractNavMenu from "./ContractNavMenu";
import { CONTRACT_NAV_ITEMS } from "@/data/navItems";

export default function ContractNav() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const highlightedIndex = activeIndex ?? 0;
  const activeItem =
    activeIndex !== null ? CONTRACT_NAV_ITEMS[activeIndex] : undefined;

  return (
    <nav
      className="relative w-full border-b border-gray-200 bg-white"
      onMouseLeave={() => setActiveIndex(null)}
    >
      <ul className="mx-auto flex max-w-[1200px] items-center justify-center gap-10 px-4 sm:px-6">
        {CONTRACT_NAV_ITEMS.map((item, index) => (
          <li
            key={item.label}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
          >
            <button
              type="button"
              className={`relative block py-5 text-[17px] font-bold transition-colors ${
                highlightedIndex === index
                  ? "text-[#1f4e9b]"
                  : "text-[#333] hover:text-[#1f4e9b]"
              }`}
            >
              {item.label}
              {highlightedIndex === index && (
                <span className="absolute -bottom-px left-0 h-0.5 w-full bg-[#1f4e9b]" />
              )}
            </button>
          </li>
        ))}
      </ul>

      {activeItem && (
        <ContractNavMenu title={activeItem.label} links={activeItem.links} />
      )}
    </nav>
  );
}
