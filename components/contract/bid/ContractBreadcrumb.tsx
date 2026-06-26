type ContractBreadcrumbProps = {
  readonly trail: ReadonlyArray<string>;
};

export default function ContractBreadcrumb({ trail }: ContractBreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className="flex items-center gap-2 text-sm text-gray-400">
      <span aria-hidden>🏠</span>
      {trail.map((item, index) => (
        <span key={item} className="flex items-center gap-2">
          {index > 0 && <span aria-hidden>›</span>}
          <span className={index === trail.length - 1 ? "text-[#1f4e9b]" : undefined}>
            {item}
          </span>
        </span>
      ))}
    </nav>
  );
}
