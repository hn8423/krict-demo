"use client";

import type { BidStatus } from "@/data/bidParticipation";
import { BID_STATUSES } from "@/data/bidParticipation";
import DateField from "./DateField";

export type BidFilter = {
  readonly fromDate: string;
  readonly toDate: string;
  readonly bidNo: string;
  readonly title: string;
  readonly status: BidStatus | "전체";
};

type BidSearchFilterProps = {
  readonly filter: BidFilter;
  readonly onChange: (next: BidFilter) => void;
  readonly onSearch: () => void;
  readonly onReset: () => void;
};

const inputClass =
  "h-9 w-full rounded border border-gray-300 px-3 text-sm text-gray-700 focus:border-[#1f4e9b] focus:outline-none";
const labelClass = "w-24 shrink-0 text-sm font-semibold text-[#333]";

export default function BidSearchFilter({
  filter,
  onChange,
  onSearch,
  onReset,
}: BidSearchFilterProps) {
  const update = (patch: Partial<BidFilter>) => onChange({ ...filter, ...patch });

  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex items-center gap-3">
          <span className={labelClass}>입찰일자</span>
          <DateField
            ariaLabel="입찰일자 시작"
            value={filter.fromDate}
            onChange={(date) => update({ fromDate: date })}
          />
          <span className="text-gray-400">~</span>
          <DateField
            ariaLabel="입찰일자 종료"
            value={filter.toDate}
            onChange={(date) => update({ toDate: date })}
          />
        </div>

        <div className="flex items-center gap-3">
          <span className={labelClass}>참여상태</span>
          <select
            aria-label="참여상태"
            value={filter.status}
            onChange={(e) =>
              update({ status: e.target.value as BidFilter["status"] })
            }
            className={inputClass}
          >
            <option value="전체">- 전체 -</option>
            {BID_STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-3">
          <span className={labelClass}>입찰번호</span>
          <input
            aria-label="입찰번호"
            value={filter.bidNo}
            onChange={(e) => update({ bidNo: e.target.value })}
            className={inputClass}
          />
        </div>

        <div className="flex items-center gap-3">
          <span className={labelClass}>공고명</span>
          <input
            aria-label="공고명"
            value={filter.title}
            onChange={(e) => update({ title: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-1 rounded border border-gray-300 bg-white px-5 py-2 text-sm text-gray-700 transition-colors hover:border-[#1f4e9b] hover:text-[#1f4e9b]"
        >
          ↻ 초기화
        </button>
        <button
          type="button"
          onClick={onSearch}
          className="flex items-center gap-1 rounded bg-[#1f4e9b] px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-[#173d7a]"
        >
          🔍 조회
        </button>
      </div>
    </div>
  );
}
