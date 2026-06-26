export type BidFilter = {
  readonly quoteNo: string;
  readonly name: string;
  readonly requester: string;
};

type BidSearchFilterProps = {
  readonly value: BidFilter;
  readonly onChange: (next: BidFilter) => void;
  readonly onSearch: () => void;
  readonly onReset: () => void;
};

const FIELDS: ReadonlyArray<{ key: keyof BidFilter; label: string }> = [
  { key: "quoteNo", label: "견적번호" },
  { key: "name", label: "물품명" },
  { key: "requester", label: "구매요청자" },
];

export default function BidSearchFilter({
  value,
  onChange,
  onSearch,
  onReset,
}: BidSearchFilterProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearch();
      }}
      className="rounded-md border border-gray-200 bg-[#f9fafb] px-5 py-5"
    >
      <div className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
        {FIELDS.map((field) => (
          <div key={field.key} className="flex items-center gap-4">
            <label
              htmlFor={`filter-${field.key}`}
              className="w-20 shrink-0 text-sm font-semibold text-[#222]"
            >
              {field.label}
            </label>
            <input
              id={`filter-${field.key}`}
              type="text"
              value={value[field.key]}
              onChange={(event) =>
                onChange({ ...value, [field.key]: event.target.value })
              }
              className="h-9 flex-1 rounded border border-gray-300 bg-white px-3 text-sm focus:border-[#1f4e9b] focus:outline-none"
            />
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1.5 rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-[#1f4e9b] hover:text-[#1f4e9b]"
        >
          <span aria-hidden>↺</span> 초기화
        </button>
        <button
          type="submit"
          className="inline-flex items-center gap-1.5 rounded bg-[#1f4e9b] px-5 py-2 text-sm font-bold text-white hover:bg-[#173d7a]"
        >
          <span aria-hidden>🔍</span> 조회
        </button>
      </div>
    </form>
  );
}
