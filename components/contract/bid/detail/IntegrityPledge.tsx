"use client";

import { useState } from "react";
import { PLEDGE_TEXT, PLEDGE_TITLE } from "@/data/bidDetail";

export default function IntegrityPledge() {
  const [agreed, setAgreed] = useState(true);

  return (
    <div className="rounded-lg border border-gray-200 p-5">
      <label className="flex cursor-pointer items-center gap-2 text-[15px] font-bold text-[#222]">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="h-4 w-4 accent-[#1f4e9b]"
        />
        아래의 청렴계약서(서약서)에 동의합니다.
        <span className="text-[#1f4e9b]">{agreed ? "✔ 동의" : "미동의"}</span>
      </label>

      <div className="mt-4 space-y-2 text-sm leading-6 text-gray-600">
        <p className="font-bold text-[#222]">{PLEDGE_TITLE}</p>
        {PLEDGE_TEXT.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
