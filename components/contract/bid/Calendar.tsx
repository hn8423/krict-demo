"use client";

import { useState } from "react";

type CalendarProps = {
  readonly selected: string; // YYYY-MM-DD or ""
  readonly onSelect: (date: string) => void;
};

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"] as const;

const pad = (value: number): string => String(value).padStart(2, "0");

const formatYmd = (date: Date): string =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

const parseYmd = (value: string): Date | null => {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  const [, y, m, d] = match;
  return new Date(Number(y), Number(m) - 1, Number(d));
};

export default function Calendar({ selected, onSelect }: CalendarProps) {
  const initial = parseYmd(selected) ?? new Date();
  const [view, setView] = useState(() => ({
    year: initial.getFullYear(),
    month: initial.getMonth(),
  }));

  const firstWeekday = new Date(view.year, view.month, 1).getDay();
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
  const today = formatYmd(new Date());

  const cells: Array<number | null> = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const moveMonth = (delta: number) =>
    setView((prev) => {
      const next = new Date(prev.year, prev.month + delta, 1);
      return { year: next.getFullYear(), month: next.getMonth() };
    });

  return (
    <div className="w-64 rounded-lg border border-gray-200 bg-white p-3 shadow-lg">
      <div className="mb-2 flex items-center justify-between">
        <button
          type="button"
          aria-label="이전 달"
          onClick={() => moveMonth(-1)}
          className="flex h-7 w-7 items-center justify-center rounded text-gray-500 hover:bg-gray-100"
        >
          ◀
        </button>
        <span className="text-sm font-bold text-[#222]">
          {view.year}년 {view.month + 1}월
        </span>
        <button
          type="button"
          aria-label="다음 달"
          onClick={() => moveMonth(1)}
          className="flex h-7 w-7 items-center justify-center rounded text-gray-500 hover:bg-gray-100"
        >
          ▶
        </button>
      </div>

      <div className="mb-1 grid grid-cols-7 text-center text-xs text-gray-400">
        {WEEKDAYS.map((day) => (
          <span key={day} className="py-1">
            {day}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-1 text-center text-sm">
        {cells.map((day, index) => {
          if (day === null) return <span key={`empty-${index}`} />;
          const ymd = `${view.year}-${pad(view.month + 1)}-${pad(day)}`;
          const isSelected = ymd === selected;
          const isToday = ymd === today;
          return (
            <button
              key={ymd}
              type="button"
              onClick={() => onSelect(ymd)}
              className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                isSelected
                  ? "bg-[#1f4e9b] font-bold text-white"
                  : isToday
                    ? "border border-[#1f4e9b] text-[#1f4e9b]"
                    : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
