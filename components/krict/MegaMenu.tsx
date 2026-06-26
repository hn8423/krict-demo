import Link from "next/link";
import type { MegaColumn } from "@/data/navItems";

type MegaMenuProps = {
  readonly title: string;
  readonly columns: ReadonlyArray<MegaColumn>;
};

function NewWindowIcon() {
  return (
    <span
      aria-label="새창으로 열립니다"
      className="ml-1 inline-block h-3 w-3 border border-current align-middle"
      style={{ boxShadow: "2px -2px 0 -1px currentColor" }}
    />
  );
}

export default function MegaMenu({ title, columns }: MegaMenuProps) {
  return (
    <div className="absolute left-0 top-full z-40 w-full border-t border-gray-200 bg-white shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[200px_repeat(4,1fr)] gap-6 px-6 py-10">
        <h3 className="text-2xl font-bold text-[#14275c]">{title}</h3>
        {columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-4">
            <p className="text-base font-bold text-[#222]">{column.title}</p>
            <ul className="flex flex-col gap-3">
              {column.links.map((link) => {
                const highlighted = link.href.startsWith("/");
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.newWindow ? "_blank" : undefined}
                      rel={
                        link.newWindow ? "noopener noreferrer" : undefined
                      }
                      className={`text-sm hover:underline ${
                        highlighted
                          ? "font-semibold text-krict-cyan"
                          : "text-gray-600 hover:text-[#14275c]"
                      }`}
                    >
                      {link.label}
                      {link.newWindow && <NewWindowIcon />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
