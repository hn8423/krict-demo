import Link from "next/link";
import ContractHeader from "@/components/contract/ContractHeader";
import ContractNav from "@/components/contract/ContractNav";
import MemberSidebar from "@/components/contract/MemberSidebar";
import LoginPanel from "@/components/contract/LoginPanel";
import NoticeBlock from "@/components/contract/NoticeBlock";
import ContractFooter from "@/components/contract/ContractFooter";

export default function ContractLoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ContractHeader />
      <ContractNav />

      <main className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row">
          <MemberSidebar />

          <section className="flex-1">
            <div className="flex items-center justify-between border-b-2 border-[#222] pb-4">
              <h1 className="text-3xl font-bold text-[#222]">로그인</h1>
              <nav className="flex items-center gap-2 text-sm text-gray-500">
                <Link href="/" className="hover:text-[#1f4e9b]">
                  🏠
                </Link>
                <span aria-hidden>›</span>
                <span>회원서비스</span>
                <span aria-hidden>›</span>
                <span className="text-[#1f4e9b]">로그인</span>
              </nav>
            </div>

            <div className="mt-8 space-y-1 text-[15px] leading-7 text-gray-700">
              <p>
                본 서비스는 한국화학연구원 업체등록 신청 완료 후 승인된 사용자에
                한하여 이용이 가능합니다.
              </p>
              <p>서비스 이용을 위해 로그인 하여 주시기 바랍니다.</p>
              <p className="flex items-center gap-1.5 font-medium text-[#e03131]">
                <span aria-hidden>⛔</span> 반드시 크롬(chrome)브라우저를
                사용해주시기 바랍니다.
              </p>
            </div>

            <div className="mt-6">
              <LoginPanel />
            </div>

            <NoticeBlock />
          </section>
        </div>
      </main>

      <ContractFooter />
    </div>
  );
}
