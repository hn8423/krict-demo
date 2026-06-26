import type { BidParticipation } from "./bidParticipation";
import { BID_PARTICIPATIONS } from "./bidParticipation";

export type RequiredDocument = {
  readonly id: string;
  readonly label: string;
  readonly sampleFile?: string;
};

export const REQUIRED_DOCUMENTS: ReadonlyArray<RequiredDocument> = [
  { id: "doc-1", label: "견적서(원가계산서/산출내역서 포함)", sampleFile: "26년도 원가계산서.pdf" },
  { id: "doc-2", label: "비교견적서", sampleFile: "비교견적서(샘플).pdf" },
  { id: "doc-3", label: "가격증빙자료/단가조사서", sampleFile: "기술자 평균임금.pdf" },
  { id: "doc-4", label: "관련 면허증 및 허가증", sampleFile: "직접생산확인.pdf" },
  { id: "doc-5", label: "사업자등록증 사본", sampleFile: "사업자등록증.pdf" },
  { id: "doc-6", label: "법인 등기부등본" },
  { id: "doc-7", label: "국세 납세증명서", sampleFile: "국세납세증명.pdf" },
  { id: "doc-8", label: "지방세 납세증명서", sampleFile: "지방세납세증명.pdf" },
  { id: "doc-9", label: "통장 사본", sampleFile: "통장사본.pdf" },
  { id: "doc-10", label: "중소기업 확인서" },
  { id: "doc-11", label: "청렴이행 서약서", sampleFile: "청렴이행서약서.pdf" },
  { id: "doc-12", label: "사용인감계", sampleFile: "사용인감계.pdf" },
  { id: "doc-13", label: "기타서류" },
];

export type QuoteFile = {
  readonly label: string;
  readonly fileName: string;
  readonly canView?: boolean;
};

export const QUOTE_FILES: ReadonlyArray<QuoteFile> = [
  { label: "견적서", fileName: "인증_공사(용역)견적서.pdf", canView: true },
];

export type GoodsItem = {
  readonly no: number;
  readonly name: string;
  readonly amount: number;
  readonly account: string;
};

export const HAZARD_PERMIT_URL =
  "https://backoffice.todayworkings.com/krict-landing?autoLogin=1";

export const PLEDGE_TITLE = "청렴계약서(서약서)";

export const PLEDGE_TEXT = [
  "연구원 「계약사무처리요령」 제2조의 2 및 「국가를 당사자로 하는 계약에 관한 법률」 제5조의 2에 따라 본 계약을 체결하는 당사 대리인과 임직원은 입찰·낙찰, 계약체결 또는 계약이행 등의 과정(준공·납품 이후를 포함한다)에서 아래 각 호의 청렴계약 조건을 준수할 것이며, 이를 위반할 때에는 입찰·낙찰을 취소하거나 계약을 해제·해지하는 등의 불이익을 감수하고, 이에 민·형사상 이의를 제기하지 않을 것을 약정합니다.",
  "1. 금품, 향응, 취업제공(친인척 등에 대한 부정한 취업 제공 포함) 및 알선 등을 요구 또는 약속하거나 수수(授受)하지 않겠습니다.",
  "2. 입찰가격의 사전 협의 또는 특정인의 낙찰을 위한 담합 등 공정한 경쟁을 방해하는 행위를 하지 않겠습니다.",
  "3. 공정한 직무수행을 방해하는 알선·청탁을 통하여 입찰 또는 계약과 관련된 특정 정보의 제공을 요구하거나 받는 행위를 하지 않겠습니다.",
  "4. 「국가를 당사자로 하는 계약에 관한 법률 시행령」 제4조의2 제1항 제2호 위반시에 아래의 손해배상액을 납부토록 하겠습니다.",
] as const;

export type BidDetailInfo = {
  readonly bid: BidParticipation;
  readonly method: string;
  readonly reason: string;
  readonly estimatedAmount: number;
  readonly goods: ReadonlyArray<GoodsItem>;
};

const DEMO_REASON =
  "5천만원 이하의 공사 또는 2천만원 이하의 물품 및 용역 계약(국가계약법 시행령 제26조 1항 5호 가목)";

// 데모: 입찰번호 끝 4자리로 그럴듯한 금액을 만들어 입찰마다 다르게 표시
const toAmount = (id: string): number => {
  const tail = Number(id.replace(/\D/g, "").slice(-4)) || 0;
  return 5_000_000 + tail * 2_500;
};

export const getBidDetail = (id: string): BidDetailInfo | null => {
  const bid = BID_PARTICIPATIONS.find((item) => item.id === id);
  if (!bid) return null;

  const estimatedAmount = toAmount(bid.id);
  return {
    bid,
    method: "소액수의견적입찰(경쟁)",
    reason: DEMO_REASON,
    estimatedAmount,
    goods: [
      {
        no: 1,
        name: bid.title,
        amount: estimatedAmount,
        account: "1912-1",
      },
    ],
  };
};

export const formatWon = (value: number): string =>
  `${value.toLocaleString("ko-KR")} 원`;
