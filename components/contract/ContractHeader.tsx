import Link from "next/link";
import KrictLogo from "@/components/krict/KrictLogo";

export default function ContractHeader() {
  return (
    <header className="w-full bg-[#1f4e9b]">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="KRICT 홈" className="brightness-0 invert">
          <KrictLogo variant="white" />
        </Link>

        <nav className="flex items-center gap-3 text-sm text-white">
          <Link href="#" className="font-semibold hover:underline">
            로그인
          </Link>
          <span aria-hidden className="text-white/50">
            |
          </span>
          <Link href="#" className="hover:underline">
            회원가입(업체등록신청)
          </Link>
        </nav>
      </div>
    </header>
  );
}
