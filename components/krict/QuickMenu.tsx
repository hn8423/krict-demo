export default function QuickMenu() {
  return (
    <aside className="fixed right-0 top-1/3 z-30 hidden flex-col items-center xl:flex">
      <div className="flex flex-col items-center gap-6 rounded-l-lg bg-gradient-to-b from-[#d6f3ee] to-[#bfe9ff] px-3 py-8 shadow-md">
        <span
          className="text-xs font-bold tracking-[0.3em] text-[#14275c]"
          style={{ writingMode: "vertical-rl" }}
        >
          QUICK MENU
        </span>
        <button
          type="button"
          aria-label="위로 가기"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-krict-cyan text-white shadow"
        >
          ↩
        </button>
      </div>
    </aside>
  );
}
