import Link from "next/link";
import { TOP_UTILITY_LINKS } from "@/data/navItems";

export default function TopUtilityBar() {
  return (
    <div className="w-full bg-[#1a1a1a] text-white">
      <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between px-4 text-xs sm:px-6">
        <Link
          href="#main"
          className="rounded border border-white/40 px-2 py-0.5 text-[11px] text-white/90 hover:bg-white/10"
        >
          뎁메뉴 바로가기
        </Link>

        <ul className="flex items-center gap-3 font-medium">
          {TOP_UTILITY_LINKS.map((item, index) => (
            <li key={item.label} className="flex items-center gap-3">
              {index > 0 && (
                <span aria-hidden className="text-krict-cyan">
                  •
                </span>
              )}
              <Link
                href={item.href}
                target={item.newWindow ? "_blank" : undefined}
                rel={item.newWindow ? "noopener noreferrer" : undefined}
                className="hover:text-krict-cyan"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
