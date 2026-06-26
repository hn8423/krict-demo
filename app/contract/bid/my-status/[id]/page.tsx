import Link from "next/link";
import { notFound } from "next/navigation";
import DashboardHeader from "@/components/contract/DashboardHeader";
import ContractNav from "@/components/contract/ContractNav";
import ContractFooter from "@/components/contract/ContractFooter";
import ContractBreadcrumb from "@/components/contract/bid/ContractBreadcrumb";
import ContractSidebar from "@/components/contract/bid/ContractSidebar";
import SectionHeader from "@/components/contract/bid/detail/SectionHeader";
import BidStatusStepper from "@/components/contract/bid/detail/BidStatusStepper";
import BidInfoTable from "@/components/contract/bid/detail/BidInfoTable";
import AttachmentUploadTable from "@/components/contract/bid/detail/AttachmentUploadTable";
import QuoteFileTable from "@/components/contract/bid/detail/QuoteFileTable";
import EmptyTable from "@/components/contract/bid/detail/EmptyTable";
import IntegrityPledge from "@/components/contract/bid/detail/IntegrityPledge";
import GoodsDetailTable from "@/components/contract/bid/detail/GoodsDetailTable";
import HazardousWorkPermit from "@/components/contract/bid/detail/HazardousWorkPermit";
import {
  getBidDetail,
  REQUIRED_DOCUMENTS,
  QUOTE_FILES,
} from "@/data/bidDetail";

const SIDEBAR_ITEMS = [
  { label: "소액수의견적입찰 목록", href: "/contract/bids/list" },
  { label: "나의 입찰참여 현황", href: "/contract/bid/my-status" },
  { label: "소액수의견적입찰 결과조회", href: "#" },
] as const;

type BidDetailPageProps = {
  readonly params: Promise<{ id: string }>;
};

export default async function BidDetailPage({ params }: BidDetailPageProps) {
  const { id } = await params;
  const detail = getBidDetail(id);
  if (!detail) notFound();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <DashboardHeader />
      <ContractNav />

      <main className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-10 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#222]">입찰참여 현황 상세</h1>
          <ContractBreadcrumb
            trail={["소액수의견적입찰(경쟁)", "나의 입찰참여 현황", "상세"]}
          />
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <ContractSidebar
            title="소액수의견적입찰(경쟁)"
            items={SIDEBAR_ITEMS}
            activeLabel="나의 입찰참여 현황"
          />

          <div className="min-w-0 flex-1">
            <div className="mb-6 flex items-center justify-between border-b-2 border-[#222] pb-4">
              <h2 className="flex items-center gap-2 text-xl font-bold text-[#222]">
                <span aria-hidden className="text-[#1f4e9b]">
                  ◻
                </span>
                입찰참여 상세
              </h2>
              <Link
                href="/contract/bid/my-status"
                className="rounded border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:border-[#1f4e9b] hover:text-[#1f4e9b]"
              >
                ≣ 목록
              </Link>
            </div>

            <div className="flex flex-col gap-10">
              <BidStatusStepper status={detail.bid.status} />

              <BidInfoTable detail={detail} />

              <section>
                <SectionHeader title="안전작업허가서" />
                <HazardousWorkPermit />
              </section>

              <section>
                <SectionHeader
                  title="제출서류 첨부파일"
                  count={REQUIRED_DOCUMENTS.length}
                />
                <AttachmentUploadTable documents={REQUIRED_DOCUMENTS} />
              </section>

              <section>
                <SectionHeader title="견적서 첨부파일" count={QUOTE_FILES.length} />
                <QuoteFileTable files={QUOTE_FILES} />
              </section>

              <section>
                <SectionHeader title="하자보수 보증 증권 제출 대상" count={0} />
                <EmptyTable headers={["No.", "물품명", "금액", "보증서 첨부"]} />
              </section>

              <IntegrityPledge />

              <section>
                <SectionHeader title="입찰품목 상세 내역" count={detail.goods.length} />
                <GoodsDetailTable items={detail.goods} />
              </section>
            </div>
          </div>
        </div>
      </main>

      <ContractFooter />
    </div>
  );
}
