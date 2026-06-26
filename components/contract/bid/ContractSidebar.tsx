import Link from "next/link";

type SidebarItem = {
  readonly label: string;
  readonly href: string;
};

type ContractSidebarProps = {
  readonly title: string;
  readonly items: ReadonlyArray<SidebarItem>;
  readonly activeLabel: string;
};

export default function ContractSidebar({
  title,
  items,
  activeLabel,
}: ContractSidebarProps) {
  return (
    <aside className="w-full shrink-0 lg:w-56">
      <div className="rounded-t-lg bg-[#1f4e9b] px-6 py-7 text-2xl font-bold text-white">
        {title}
      </div>
      <ul className="rounded-b-lg border border-t-0 border-gray-200">
        {items.map((item) => {
          const isActive = item.label === activeLabel;
          return (
            <li key={item.label} className="border-b border-gray-100 last:border-b-0">
              <Link
                href={item.href}
                className={`flex items-center gap-2 px-5 py-4 text-[15px] transition-colors ${
                  isActive
                    ? "font-bold text-[#1f4e9b]"
                    : "text-gray-600 hover:text-[#1f4e9b]"
                }`}
              >
                <span aria-hidden className="text-gray-300">
                  ·
                </span>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
