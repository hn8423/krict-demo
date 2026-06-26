"use client";

import { useEffect, useRef, useState } from "react";
import Calendar from "./Calendar";

type DateFieldProps = {
  readonly value: string; // YYYY-MM-DD or ""
  readonly onChange: (date: string) => void;
  readonly ariaLabel: string;
};

export default function DateField({ value, onChange, ariaLabel }: DateFieldProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleSelect = (date: string) => {
    onChange(date);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative inline-flex items-center">
      <input
        type="text"
        readOnly
        aria-label={ariaLabel}
        value={value}
        placeholder="YYYY-MM-DD"
        onClick={() => setOpen((prev) => !prev)}
        className="h-9 w-32 cursor-pointer rounded border border-gray-300 px-2 text-center text-sm text-gray-700 focus:border-[#1f4e9b] focus:outline-none"
      />
      <button
        type="button"
        aria-label={`${ariaLabel} 달력 열기`}
        onClick={() => setOpen((prev) => !prev)}
        className="-ml-7 flex h-6 w-6 items-center justify-center text-gray-400 hover:text-[#1f4e9b]"
      >
        📅
      </button>

      {open && (
        <div className="absolute left-0 top-10 z-50">
          <Calendar selected={value} onSelect={handleSelect} />
        </div>
      )}
    </div>
  );
}
