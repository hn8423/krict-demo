"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const TABS = [
  "공동인증서 로그인",
  "나라장터쇼핑몰 검수예약 로그인",
  "검수예약 로그인",
] as const;

const SUB_BUTTONS = [
  "인증서철치파일",
  "업체등록신청",
  "계약서viewer설치",
  "메뉴얼",
] as const;

export default function LoginPanel() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const [bizNo, setBizNo] = useState<readonly [string, string, string]>([
    "",
    "",
    "",
  ]);

  const updateBizNo = (index: number, value: string) => {
    const digits = value.replace(/\D/g, "");
    setBizNo((prev) => prev.map((v, i) => (i === index ? digits : v)) as
      | [string, string, string]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/contract/dashboard");
  };

  const lengths = [3, 2, 5] as const;

  return (
    <div>
      <div className="grid grid-cols-3">
        {TABS.map((tab, index) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(index)}
            className={`border px-3 py-4 text-center text-[15px] font-bold transition-colors ${
              activeTab === index
                ? "border-[#1f4e9b] bg-[#1f4e9b] text-white"
                : "border-gray-200 bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5 border border-t-0 border-gray-200 px-6 py-12 sm:flex-row sm:justify-center"
      >
        <label className="text-lg font-bold text-[#222]" htmlFor="bizNo-0">
          사업자등록번호
        </label>
        <div className="flex items-center gap-2">
          {lengths.map((len, index) => (
            <span key={index} className="flex items-center gap-2">
              {index > 0 && <span className="text-gray-400">-</span>}
              <input
                id={`bizNo-${index}`}
                inputMode="numeric"
                maxLength={len}
                value={bizNo[index]}
                onChange={(e) => updateBizNo(index, e.target.value)}
                className="h-11 w-24 rounded border border-gray-300 px-3 text-center text-base focus:border-[#1f4e9b] focus:outline-none"
              />
            </span>
          ))}
        </div>
        <button
          type="submit"
          className="h-11 rounded bg-[#1f4e9b] px-10 text-base font-bold text-white hover:bg-[#173d7a]"
        >
          로그인
        </button>
      </form>

      <div className="mt-6 flex flex-wrap justify-end gap-2">
        {SUB_BUTTONS.map((label) => (
          <button
            key={label}
            type="button"
            className="rounded border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:border-[#1f4e9b] hover:text-[#1f4e9b]"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
