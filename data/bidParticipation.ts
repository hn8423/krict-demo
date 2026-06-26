export type BidStatus = "참여중" | "개찰대기" | "낙찰" | "유찰" | "마감";

export type BidParticipation = {
  readonly id: string; // 입찰번호 (견적번호)
  readonly title: string; // 공고명
  readonly status: BidStatus;
  readonly deadline: string; // 입찰마감일 YYYY-MM-DD
  readonly joinedAt: string; // 참여일 YYYY-MM-DD
};

export const BID_STATUSES: ReadonlyArray<BidStatus> = [
  "참여중",
  "개찰대기",
  "낙찰",
  "유찰",
  "마감",
];

export const BID_PARTICIPATIONS: ReadonlyArray<BidParticipation> = [
  {
    id: "20260605-0021",
    title: "Needle valve 등 10건 구매",
    status: "참여중",
    deadline: "2026-07-03",
    joinedAt: "2026-06-05",
  },
  {
    id: "20260521-0014",
    title: "GP38-4-1 등 29건 구매",
    status: "개찰대기",
    deadline: "2026-06-30",
    joinedAt: "2026-05-21",
  },
  {
    id: "20260418-0008",
    title: "LG 그램 노트북 등 5건 구매",
    status: "낙찰",
    deadline: "2026-05-02",
    joinedAt: "2026-04-18",
  },
  {
    id: "20260312-0042",
    title: "대규모 LLM 모델 파인튜닝 데이터 수집 용역",
    status: "유찰",
    deadline: "2026-03-28",
    joinedAt: "2026-03-12",
  },
  {
    id: "20260227-0019",
    title: "open primer forward 시약 등 12건 구매",
    status: "마감",
    deadline: "2026-03-13",
    joinedAt: "2026-02-27",
  },
  {
    id: "20260603-0033",
    title: "분석실험실 항온항습기 유지보수 용역",
    status: "참여중",
    deadline: "2026-07-10",
    joinedAt: "2026-06-03",
  },
  {
    id: "20260516-0027",
    title: "질량분석기용 소모품 등 7건 구매",
    status: "개찰대기",
    deadline: "2026-06-28",
    joinedAt: "2026-05-16",
  },
];
