"use client";

import { useMemo, useState } from "react";
import type {
  BidParticipation,
  BidStatus,
} from "@/data/bidParticipation";
import { BID_STATUSES } from "@/data/bidParticipation";
import BidSearchFilter, { type BidFilter } from "./BidSearchFilter";
import BidStatusSummary from "./BidStatusSummary";
import BidResultTable from "./BidResultTable";

type MyBidStatusViewProps = {
  readonly data: ReadonlyArray<BidParticipation>;
};

const DEFAULT_FILTER: BidFilter = {
  fromDate: "",
  toDate: "",
  bidNo: "",
  title: "",
  status: "전체",
};

const matchesNonStatus = (row: BidParticipation, filter: BidFilter): boolean => {
  if (filter.bidNo && !row.id.includes(filter.bidNo.trim())) return false;
  if (filter.title && !row.title.includes(filter.title.trim())) return false;
  if (filter.fromDate && row.joinedAt < filter.fromDate) return false;
  if (filter.toDate && row.joinedAt > filter.toDate) return false;
  return true;
};

const emptyCounts = (): Record<BidStatus, number> =>
  BID_STATUSES.reduce(
    (acc, status) => ({ ...acc, [status]: 0 }),
    {} as Record<BidStatus, number>,
  );

export default function MyBidStatusView({ data }: MyBidStatusViewProps) {
  const [draft, setDraft] = useState<BidFilter>(DEFAULT_FILTER);
  const [applied, setApplied] = useState<BidFilter>(DEFAULT_FILTER);

  const nonStatusRows = useMemo(
    () => data.filter((row) => matchesNonStatus(row, applied)),
    [data, applied],
  );

  const counts = useMemo(
    () =>
      nonStatusRows.reduce(
        (acc, row) => ({ ...acc, [row.status]: acc[row.status] + 1 }),
        emptyCounts(),
      ),
    [nonStatusRows],
  );

  const visibleRows = useMemo(
    () =>
      applied.status === "전체"
        ? nonStatusRows
        : nonStatusRows.filter((row) => row.status === applied.status),
    [nonStatusRows, applied.status],
  );

  const handleSelectStatus = (status: BidStatus | "전체") => {
    setDraft((prev) => ({ ...prev, status }));
    setApplied((prev) => ({ ...prev, status }));
  };

  return (
    <div className="flex flex-col gap-6">
      <BidSearchFilter
        filter={draft}
        onChange={setDraft}
        onSearch={() => setApplied(draft)}
        onReset={() => {
          setDraft(DEFAULT_FILTER);
          setApplied(DEFAULT_FILTER);
        }}
      />

      <BidStatusSummary
        counts={counts}
        activeStatus={applied.status}
        onSelect={handleSelectStatus}
      />

      <div>
        <p className="mb-2 text-sm text-gray-600">
          총 <strong className="text-[#1f4e9b]">{visibleRows.length}</strong> 건
        </p>
        <BidResultTable rows={visibleRows} />
      </div>
    </div>
  );
}
