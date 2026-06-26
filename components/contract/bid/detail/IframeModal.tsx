"use client";

import { useEffect } from "react";

type IframeModalProps = {
  readonly url: string;
  readonly title: string;
  readonly onClose: () => void;
};

export default function IframeModal({ url, title, onClose }: IframeModalProps) {
  // ESC 닫기 + 열린 동안 배경 스크롤 잠금
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex h-[85vh] w-[90vw] max-w-5xl flex-col overflow-hidden rounded-lg bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
          <h3 className="text-base font-bold text-[#222]">{title}</h3>
          <button
            type="button"
            aria-label="닫기"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded text-gray-500 transition-colors hover:bg-gray-100 hover:text-[#222]"
          >
            ✕
          </button>
        </div>
        <iframe
          src={url}
          title={title}
          className="h-full w-full flex-1 border-0"
        />
      </div>
    </div>
  );
}
