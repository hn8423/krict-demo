import Link from "next/link";

const MENU = [
  { label: "로그인", active: true },
  { label: "업체등록 신청", active: false },
  { label: "비밀번호 찾기", active: false },
] as const;

export default function MemberSidebar() {
  return (
    <aside className="w-full shrink-0 lg:w-[230px]">
      <div className="bg-[#1f4e9b] px-7 py-9">
        <h2 className="text-2xl font-bold text-white">회원서비스</h2>
      </div>
      <ul className="border-x border-b border-gray-200">
        {MENU.map((item) => (
          <li key={item.label} className="border-b border-gray-200 last:border-0">
            <Link
              href="#"
              className={`flex items-center gap-2 px-7 py-4 text-[15px] ${
                item.active
                  ? "font-bold text-[#1f4e9b]"
                  : "text-gray-600 hover:text-[#1f4e9b]"
              }`}
            >
              {item.active && <span className="text-[#1f4e9b]">—</span>}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
