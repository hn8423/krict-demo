import type { BidDetailInfo } from "@/data/bidDetail";
import { formatWon } from "@/data/bidDetail";

type BidInfoTableProps = {
  readonly detail: BidDetailInfo;
};

type Row = {
  readonly label: string;
  readonly value: string;
  readonly full?: boolean;
};

export default function BidInfoTable({ detail }: BidInfoTableProps) {
  const { bid } = detail;
  const rows: ReadonlyArray<Row> = [
    { label: "입찰번호", value: bid.id },
    { label: "참여상태", value: bid.status },
    { label: "공고명", value: bid.title, full: true },
    { label: "입찰방법", value: detail.method, full: true },
    { label: "수의계약사유", value: detail.reason, full: true },
    { label: "예정금액", value: formatWon(detail.estimatedAmount), full: true },
    { label: "입찰마감일", value: bid.deadline },
    { label: "참여일", value: bid.joinedAt },
  ];

  return (
    <div className="grid grid-cols-1 overflow-hidden rounded border border-gray-200 sm:grid-cols-2">
      {rows.map((row) => (
        <div
          key={row.label}
          className={`flex border-b border-gray-100 ${row.full ? "sm:col-span-2" : ""}`}
        >
          <span className="w-32 shrink-0 bg-gray-50 px-4 py-3 text-sm font-semibold text-[#333]">
            {row.label}
          </span>
          <span className="flex-1 px-4 py-3 text-sm text-gray-700">
            {row.value}
          </span>
        </div>
      ))}
    </div>
  );
}
