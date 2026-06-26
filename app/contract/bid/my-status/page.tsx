import DashboardHeader from "@/components/contract/DashboardHeader";
import ContractNav from "@/components/contract/ContractNav";
import ContractFooter from "@/components/contract/ContractFooter";
import ContractBreadcrumb from "@/components/contract/bid/ContractBreadcrumb";
import ContractSidebar from "@/components/contract/bid/ContractSidebar";
import MyBidStatusView from "@/components/contract/bid/MyBidStatusView";
import { BID_PARTICIPATIONS } from "@/data/bidParticipation";

const SIDEBAR_ITEMS = [
  { label: "소액수의견적입찰 목록", href: "/contract/bids/list" },
  { label: "나의 입찰참여 현황", href: "/contract/bid/my-status" },
  { label: "소액수의견적입찰 결과조회", href: "#" },
] as const;

export default function MyBidStatusPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <DashboardHeader />
      <ContractNav />

      <main className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-10 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#222]">나의 입찰참여 현황</h1>
          <ContractBreadcrumb
            trail={["소액수의견적입찰(경쟁)", "나의 입찰참여 현황"]}
          />
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <ContractSidebar
            title="소액수의견적입찰(경쟁)"
            items={SIDEBAR_ITEMS}
            activeLabel="나의 입찰참여 현황"
          />
          <div className="min-w-0 flex-1">
            <MyBidStatusView data={BID_PARTICIPATIONS} />
          </div>
        </div>
      </main>

      <ContractFooter />
    </div>
  );
}
