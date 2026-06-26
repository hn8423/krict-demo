import Link from "next/link";
import KrictLogo from "@/components/krict/KrictLogo";

type DashboardHeaderProps = {
  readonly userName?: string;
};

export default function DashboardHeader({
  userName = "데모상사 (김현인)",
}: DashboardHeaderProps) {
  return (
    <header className="w-full bg-[#1f4e9b]">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="KRICT 홈" className="brightness-0 invert">
          <KrictLogo variant="white" />
        </Link>

        <nav className="flex items-center gap-3 text-sm text-white">
          <span className="font-semibold">{userName} 님</span>
          <span aria-hidden className="text-white/50">
            |
          </span>
          <Link href="/contract" className="hover:underline">
            로그아웃
          </Link>
          <span aria-hidden className="text-white/50">
            |
          </span>
          <Link href="#" className="hover:underline">
            내정보관리
          </Link>
        </nav>
      </div>
    </header>
  );
}
