import Link from "next/link";
import type { BidParticipation, BidStatus } from "@/data/bidParticipation";

type BidResultTableProps = {
  readonly rows: ReadonlyArray<BidParticipation>;
};

const STATUS_STYLES: Readonly<Record<BidStatus, string>> = {
  참여중: "bg-blue-50 text-[#1f4e9b]",
  개찰대기: "bg-amber-50 text-amber-700",
  낙찰: "bg-green-50 text-green-700",
  유찰: "bg-gray-100 text-gray-500",
  마감: "bg-gray-100 text-gray-500",
};

const HEADERS = [
  "No.",
  "입찰상태",
  "입찰번호(견적번호)",
  "공고명",
  "입찰마감일",
  "참여일",
  "견적서",
] as const;

export default function BidResultTable({ rows }: BidResultTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-y-2 border-gray-300 text-[#333]">
            {HEADERS.map((header) => (
              <th key={header} className="whitespace-nowrap px-3 py-3 font-bold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={HEADERS.length}
                className="px-3 py-12 text-center text-gray-400"
              >
                조회된 입찰참여 내역이 없습니다.
              </td>
            </tr>
          ) : (
            rows.map((row, index) => (
              <tr key={row.id} className="border-b border-gray-100 text-center">
                <td className="px-3 py-4 text-gray-500">{index + 1}</td>
                <td className="px-3 py-4">
                  <span
                    className={`inline-block rounded px-2 py-1 text-xs font-semibold ${STATUS_STYLES[row.status]}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-3 py-4 text-gray-700">{row.id}</td>
                <td className="px-3 py-4 text-left">
                  <Link
                    href={`/contract/bid/my-status/${row.id}`}
                    className="text-[#1f4e9b] hover:underline"
                  >
                    {row.title}
                  </Link>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-gray-700">
                  {row.deadline}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-gray-700">
                  {row.joinedAt}
                </td>
                <td className="px-3 py-4">
                  <button
                    type="button"
                    className="rounded border border-gray-300 px-3 py-1.5 text-xs text-gray-600 transition-colors hover:border-[#1f4e9b] hover:text-[#1f4e9b]"
                  >
                    🔍 미리보기
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
