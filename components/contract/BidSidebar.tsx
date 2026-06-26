"use client";

import { useState } from "react";
import Link from "next/link";

const MENU: ReadonlyArray<{ label: string; href: string; active: boolean }> = [
  { label: "소액수의견적입찰 목록", href: "/contract/bids/list", active: true },
  { label: "나의 입찰참여 현황", href: "/contract/bid/my-status", active: false },
  { label: "소액수의견적입찰 결과조회", href: "#", active: false },
];

export default function BidSidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside className="w-full shrink-0 lg:w-[230px]">
      <div className="relative bg-[#1f4e9b] px-7 py-8">
        <h2 className="text-xl font-bold leading-7 text-white">
          소액수의견적입찰(경쟁)
        </h2>
        <button
          type="button"
          aria-label={open ? "메뉴 접기" : "메뉴 펼치기"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="absolute -right-3 top-7 flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white text-sm text-[#1f4e9b] shadow"
        >
          {open ? "‹" : "›"}
        </button>
      </div>

      {open && (
        <ul className="border-x border-b border-gray-200">
          {MENU.map((item) => (
            <li
              key={item.label}
              className="border-b border-gray-200 last:border-0"
            >
              <Link
                href={item.href}
                aria-current={item.active ? "page" : undefined}
                className={`flex items-center gap-2 px-7 py-4 text-[15px] ${
                  item.active
                    ? "font-bold text-[#1f4e9b]"
                    : "text-gray-600 hover:text-[#1f4e9b]"
                }`}
              >
                {item.active && <span className="text-[#1f4e9b]">—</span>}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
