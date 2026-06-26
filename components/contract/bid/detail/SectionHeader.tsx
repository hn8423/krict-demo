type SectionHeaderProps = {
  readonly title: string;
  readonly count?: number;
};

export default function SectionHeader({ title, count }: SectionHeaderProps) {
  return (
    <div className="mb-3 flex items-end justify-between">
      <h2 className="flex items-center gap-2 text-lg font-bold text-[#222]">
        <span aria-hidden className="text-[#1f4e9b]">
          ●
        </span>
        {title}
      </h2>
      {count !== undefined && (
        <span className="text-sm text-gray-500">
          총 <strong className="text-[#1f4e9b]">{count}</strong> 건
        </span>
      )}
    </div>
  );
}
