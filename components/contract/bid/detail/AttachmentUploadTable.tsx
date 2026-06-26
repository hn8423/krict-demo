"use client";

import { useEffect, useRef, useState } from "react";
import type { RequiredDocument } from "@/data/bidDetail";

type UploadedFile = {
  readonly name: string;
  readonly url: string;
};

type AttachmentUploadTableProps = {
  readonly documents: ReadonlyArray<RequiredDocument>;
};

export default function AttachmentUploadTable({
  documents,
}: AttachmentUploadTableProps) {
  const [uploaded, setUploaded] = useState<Readonly<Record<string, UploadedFile>>>(
    {},
  );

  // 언마운트 시 생성한 ObjectURL을 모두 해제하기 위한 최신 참조
  const uploadedRef = useRef(uploaded);
  useEffect(() => {
    uploadedRef.current = uploaded;
  }, [uploaded]);
  useEffect(
    () => () => {
      Object.values(uploadedRef.current).forEach((file) =>
        URL.revokeObjectURL(file.url),
      );
    },
    [],
  );

  const handleSelect = (docId: string, fileList: FileList | null) => {
    const file = fileList?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setUploaded((prev) => {
      const previous = prev[docId];
      if (previous) URL.revokeObjectURL(previous.url);
      return { ...prev, [docId]: { name: file.name, url } };
    });
  };

  const handleRemove = (docId: string) => {
    setUploaded((prev) => {
      const previous = prev[docId];
      if (previous) URL.revokeObjectURL(previous.url);
      const next = { ...prev };
      delete next[docId];
      return next;
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-y-2 border-gray-300 text-[#333]">
            <th className="w-16 px-3 py-3 font-bold">No.</th>
            <th className="px-3 py-3 text-left font-bold">제출서류</th>
            <th className="px-3 py-3 text-left font-bold">첨부파일</th>
            <th className="w-40 px-3 py-3 font-bold">관리</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => {
            const file = uploaded[doc.id];
            return (
              <tr key={doc.id} className="border-b border-gray-100 align-middle">
                <td className="px-3 py-3 text-center text-gray-500">
                  {index + 1}
                </td>
                <td className="px-3 py-3 text-gray-700">{doc.label}</td>
                <td className="px-3 py-3">
                  {file ? (
                    <a
                      href={file.url}
                      download={file.name}
                      className="text-[#1f4e9b] hover:underline"
                    >
                      📎 {file.name}
                    </a>
                  ) : doc.sampleFile ? (
                    <span className="text-gray-700">{doc.sampleFile}</span>
                  ) : (
                    <span className="text-gray-400">첨부된 파일이 없습니다.</span>
                  )}
                </td>
                <td className="px-3 py-3">
                  <div className="flex items-center justify-center gap-1">
                    <label className="cursor-pointer rounded border border-gray-300 bg-white px-3 py-1.5 text-xs text-gray-600 transition-colors hover:border-[#1f4e9b] hover:text-[#1f4e9b]">
                      ⬆ {file ? "재업로드" : "파일 선택"}
                      <input
                        type="file"
                        className="hidden"
                        aria-label={`${doc.label} 첨부파일 업로드`}
                        onChange={(e) => handleSelect(doc.id, e.target.files)}
                      />
                    </label>
                    {file && (
                      <button
                        type="button"
                        onClick={() => handleRemove(doc.id)}
                        className="rounded border border-gray-300 bg-white px-3 py-1.5 text-xs text-gray-500 transition-colors hover:border-red-400 hover:text-red-500"
                      >
                        삭제
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
