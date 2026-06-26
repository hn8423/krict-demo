"use client";

import { useState } from "react";
import { HAZARD_PERMIT_URL } from "@/data/bidDetail";
import IframeModal from "./IframeModal";

export default function HazardousWorkPermit() {
  const [isHazardous, setIsHazardous] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg border border-gray-200 p-5">
      <label className="flex cursor-pointer items-center gap-2 text-[15px] font-bold text-[#222]">
        <input
          type="checkbox"
          checked={isHazardous}
          onChange={(e) => setIsHazardous(e.target.checked)}
          className="h-4 w-4 accent-[#1f4e9b]"
        />
        위험작업에 해당되는 경우 체크 후 허가서를 작성하세요.
      </label>

      <div className="mt-4">
        <button
          type="button"
          disabled={!isHazardous}
          onClick={() => setOpen(true)}
          className={`rounded px-6 py-2 text-sm font-bold text-white transition-colors ${
            isHazardous
              ? "bg-[#1f4e9b] hover:bg-[#173d7a]"
              : "cursor-not-allowed bg-gray-300"
          }`}
        >
          허가서 작성하기
        </button>
        {!isHazardous && (
          <p className="mt-2 text-sm text-gray-400">
            위험작업 해당 여부를 먼저 체크해 주세요.
          </p>
        )}
      </div>

      {open && (
        <IframeModal
          url={HAZARD_PERMIT_URL}
          title="안전작업허가서 작성"
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
