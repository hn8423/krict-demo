import Link from "next/link";

type ListPanelProps = {
  readonly title: string;
  readonly items: ReadonlyArray<string>;
};

export default function ListPanel({ title, items }: ListPanelProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white">
      <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
        <h3 className="text-lg font-bold text-[#222]">{title}</h3>
        <Link
          href="#"
          aria-label={`${title} 더보기`}
          className="text-2xl leading-none text-gray-400 hover:text-[#1f4e9b]"
        >
          +
        </Link>
      </div>
      <ul className="max-h-[170px] overflow-y-auto px-5 py-3">
        {items.map((item, index) => (
          <li key={`${item}-${index}`}>
            <Link
              href="#"
              className="flex items-start gap-2 py-1.5 text-sm text-gray-700 hover:text-[#1f4e9b]"
            >
              <span aria-hidden className="mt-0.5 text-gray-400">
                ·
              </span>
              <span className="line-clamp-1">{item}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
