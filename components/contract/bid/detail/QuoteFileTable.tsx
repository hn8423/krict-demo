import type { QuoteFile } from "@/data/bidDetail";

type QuoteFileTableProps = {
  readonly files: ReadonlyArray<QuoteFile>;
};

export default function QuoteFileTable({ files }: QuoteFileTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-y-2 border-gray-300 text-[#333]">
            <th className="w-16 px-3 py-3 font-bold">No.</th>
            <th className="px-3 py-3 text-left font-bold">견적서</th>
            <th className="px-3 py-3 text-left font-bold">첨부파일</th>
            <th className="w-48 px-3 py-3 font-bold">관리</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={file.label} className="border-b border-gray-100">
              <td className="px-3 py-3 text-center text-gray-500">{index + 1}</td>
              <td className="px-3 py-3 text-gray-700">{file.label}</td>
              <td className="px-3 py-3 text-gray-700">{file.fileName}</td>
              <td className="px-3 py-3">
                <div className="flex items-center justify-center gap-1">
                  <button
                    type="button"
                    className="rounded border border-gray-300 bg-white px-3 py-1.5 text-xs text-gray-600 transition-colors hover:border-[#1f4e9b] hover:text-[#1f4e9b]"
                  >
                    ⬇ 다운로드
                  </button>
                  {file.canView && (
                    <button
                      type="button"
                      className="rounded border border-gray-300 bg-white px-3 py-1.5 text-xs text-gray-600 transition-colors hover:border-[#1f4e9b] hover:text-[#1f4e9b]"
                    >
                      🔍 견적서보기
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
