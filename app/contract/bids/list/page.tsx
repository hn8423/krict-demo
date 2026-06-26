import Link from "next/link";
import DashboardHeader from "@/components/contract/DashboardHeader";
import ContractNav from "@/components/contract/ContractNav";
import ContractFooter from "@/components/contract/ContractFooter";
import BidSidebar from "@/components/contract/BidSidebar";
import BidListContent from "@/components/contract/BidListContent";

export default function BidListPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <DashboardHeader />
      <ContractNav />

      <main className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row">
          <BidSidebar />

          <section className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#222] pb-4">
              <h1 className="text-2xl font-bold text-[#222] sm:text-3xl">
                소액수의견적입찰 목록
              </h1>
              <nav className="flex items-center gap-2 text-sm text-gray-500">
                <Link href="/" className="hover:text-[#1f4e9b]">
                  🏠
                </Link>
                <span aria-hidden>›</span>
                <span>소액수의견적입찰(경쟁)</span>
                <span aria-hidden>›</span>
                <span className="text-[#1f4e9b]">소액수의견적입찰 목록</span>
              </nav>
            </div>

            <div className="mt-6">
              <BidListContent />
            </div>
          </section>
        </div>
      </main>

      <ContractFooter />
    </div>
  );
}
