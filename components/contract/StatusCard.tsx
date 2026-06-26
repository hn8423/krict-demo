import Link from "next/link";

const WAIT_ITEMS = [
  { label: "계약대기", count: 0 },
  { label: "검수대기", count: 0 },
] as const;

const SHORTCUTS = [
  {
    title: "검수시간예약",
    desc: "예약 가능한 검수 시간을 확인하고 예약을 진행할 수 있습니다.",
  },
  {
    title: "계약진행현황",
    desc: "진행 중인 계약현황을 조회할 수 있습니다.",
  },
] as const;

export default function StatusCard() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5">
      <ul className="space-y-3">
        {WAIT_ITEMS.map((item) => (
          <li
            key={item.label}
            className="flex items-center justify-between rounded-md border border-gray-100 bg-gray-50 px-4 py-3"
          >
            <span className="flex items-center gap-2 text-[15px] font-semibold text-[#222]">
              <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-[#1f4e9b] text-xs text-white">
                ✓
              </span>
              {item.label}
            </span>
            <span className="text-[15px] text-gray-700">
              <strong className="text-[#1f4e9b]">{item.count}</strong> 건
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-5 space-y-4">
        {SHORTCUTS.map((shortcut) => (
          <Link
            key={shortcut.title}
            href="#"
            className="block rounded-lg border border-gray-200 p-4 transition-colors hover:border-[#1f4e9b]"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-[#222]">
                {shortcut.title}
              </h4>
              <span aria-hidden className="text-gray-400">
                →
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              {shortcut.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
