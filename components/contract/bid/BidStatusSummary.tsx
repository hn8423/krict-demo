import type { BidStatus } from "@/data/bidParticipation";
import { BID_STATUSES } from "@/data/bidParticipation";

type BidStatusSummaryProps = {
  readonly counts: Readonly<Record<BidStatus, number>>;
  readonly activeStatus: BidStatus | "전체";
  readonly onSelect: (status: BidStatus | "전체") => void;
};

export default function BidStatusSummary({
  counts,
  activeStatus,
  onSelect,
}: BidStatusSummaryProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {BID_STATUSES.map((status) => {
        const isActive = status === activeStatus;
        return (
          <button
            key={status}
            type="button"
            onClick={() => onSelect(isActive ? "전체" : status)}
            className={`rounded-lg border px-4 py-5 text-center transition-colors ${
              isActive
                ? "border-[#1f4e9b] bg-[#eef3fa]"
                : "border-gray-200 bg-white hover:border-[#1f4e9b]"
            }`}
          >
            <span className="block text-[15px] font-semibold text-[#333]">
              {status}
            </span>
            <span className="mt-2 block text-lg text-gray-700">
              <strong className="text-[#1f4e9b]">{counts[status]}</strong> 건
            </span>
          </button>
        );
      })}
    </div>
  );
}
