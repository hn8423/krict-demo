import DashboardHeader from "@/components/contract/DashboardHeader";
import ContractNav from "@/components/contract/ContractNav";
import ListPanel from "@/components/contract/ListPanel";
import StatusCard from "@/components/contract/StatusCard";
import SupportCard from "@/components/contract/SupportCard";
import ContractFooter from "@/components/contract/ContractFooter";

const QUOTE_ITEMS = [
  "Needle valve 등 10건",
  "GP38-4-1 등 29건",
  "open primer forward (5'-3'): AAATCGA...",
  "LG 그램 노트북 등 5건",
  "대규모 LLM 모델 파인튜닝 데이터 수집...",
] as const;

const NOTICE_ITEMS = [
  "사업자등록증 변경 (2026년 06월01일)",
  "온라인계약시스템 중지안내",
  "[필독] 한국화학연구원 사칭하여 금품 요...",
  "검수예약 불이행시 패널티 부여 사전 안내",
] as const;

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <DashboardHeader />
      <ContractNav />

      <main className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6">
            <ListPanel title="소액수의견적제출(경쟁)" items={QUOTE_ITEMS} />
            <ListPanel title="공지사항" items={NOTICE_ITEMS} />
          </div>

          <StatusCard />
          <SupportCard />
        </div>
      </main>

      <ContractFooter />
    </div>
  );
}
