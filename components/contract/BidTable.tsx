import type { BidRow } from "@/data/bidList";

const COLUMNS = [
  "No.",
  "견적번호",
  "견적명",
  "구매요구",
  "게시일시",
  "마감일시",
] as const;

export default function BidTable({ rows }: { rows: ReadonlyArray<BidRow> }) {
  return (
    <div className="mt-3 overflow-x-auto">
      <table className="w-full min-w-[760px] border-t-2 border-[#1f4e9b] text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-[#f5f7fa] text-[#222]">
            {COLUMNS.map((col) => (
              <th key={col} className="px-3 py-3 font-bold">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={COLUMNS.length}
                className="px-3 py-12 text-center text-gray-500"
              >
                조회된 견적이 없습니다.
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr
                key={row.quoteNo}
                className="border-b border-gray-200 text-center text-gray-700 hover:bg-[#f8fafc]"
              >
                <td className="px-3 py-4">{row.no}</td>
                <td className="whitespace-nowrap px-3 py-4">{row.quoteNo}</td>
                <td className="px-3 py-4 text-left leading-6">{row.name}</td>
                <td className="px-3 py-4">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 whitespace-nowrap rounded border border-gray-300 bg-white px-3 py-1.5 text-xs text-gray-700 hover:border-[#1f4e9b] hover:text-[#1f4e9b]"
                  >
                    <span aria-hidden>🔍</span> 보기
                  </button>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                  {row.postedAt}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                  {row.deadline}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
