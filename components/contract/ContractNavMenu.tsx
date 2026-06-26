import Link from "next/link";
import type { ContractNavLink } from "@/data/navItems";

type ContractNavMenuProps = {
  readonly title: string;
  readonly links: ReadonlyArray<ContractNavLink>;
};

export default function ContractNavMenu({
  title,
  links,
}: ContractNavMenuProps) {
  return (
    <div className="absolute left-0 top-full z-40 w-full border-t border-gray-200 bg-white shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-4 px-4 py-8 sm:px-6">
        <h3 className="mr-6 min-w-[220px] text-2xl font-bold text-[#1f4e9b]">
          {title}
        </h3>
        <ul className="flex flex-wrap gap-3">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="block rounded bg-[#eef3fa] px-6 py-3 text-[15px] font-medium text-[#1f4e9b] transition-colors hover:bg-[#1f4e9b] hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
