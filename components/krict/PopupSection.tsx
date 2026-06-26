const TABS = ["일반", "기업", "연구"] as const;

export default function PopupSection() {
  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-4 py-6 sm:px-6">
        <ul className="flex items-center gap-6 text-sm">
          {TABS.map((tab, index) => (
            <li key={tab}>
              <button
                type="button"
                className={`flex items-center gap-1.5 font-medium ${
                  index === 0 ? "text-[#14275c]" : "text-gray-400"
                }`}
              >
                {index === 0 && (
                  <span className="h-2 w-2 rounded-full bg-krict-cyan" />
                )}
                {tab}
              </button>
            </li>
          ))}
        </ul>

        <p className="text-2xl font-extrabold tracking-tight text-[#222]">
          POP-UP
        </p>

        <div className="flex items-center gap-3 text-gray-600">
          <button type="button" aria-label="이전" className="text-lg">
            ←
          </button>
          <span className="text-sm tracking-widest">01 / 03</span>
          <button type="button" aria-label="다음" className="text-lg">
            →
          </button>
          <button type="button" aria-label="정지" className="ml-1 text-lg">
            ❚❚
          </button>
        </div>
      </div>
    </section>
  );
}
