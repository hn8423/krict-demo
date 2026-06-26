"use client";

import { useMemo, useState } from "react";
import { BID_ROWS } from "@/data/bidList";
import BidSearchFilter, { type BidFilter } from "./BidSearchFilter";
import BidTable from "./BidTable";

const EMPTY_FILTER: BidFilter = { quoteNo: "", name: "", requester: "" };

const matches = (field: string, query: string) =>
  query.trim() === "" ||
  field.toLowerCase().includes(query.trim().toLowerCase());

export default function BidListContent() {
  const [draft, setDraft] = useState<BidFilter>(EMPTY_FILTER);
  const [applied, setApplied] = useState<BidFilter>(EMPTY_FILTER);

  const filtered = useMemo(
    () =>
      BID_ROWS.filter(
        (row) =>
          matches(row.quoteNo, applied.quoteNo) &&
          matches(row.name, applied.name) &&
          matches(row.requester, applied.requester),
      ),
    [applied],
  );

  const reset = () => {
    setDraft(EMPTY_FILTER);
    setApplied(EMPTY_FILTER);
  };

  return (
    <div>
      <BidSearchFilter
        value={draft}
        onChange={setDraft}
        onSearch={() => setApplied(draft)}
        onReset={reset}
      />

      <p className="mt-6 text-sm text-gray-600">
        총 <strong className="text-[#e03131]">{filtered.length}</strong> 건
      </p>

      <BidTable rows={filtered} />
    </div>
  );
}
