export const CONTRACT_HREF = "/contract";

export type MegaColumn = {
  readonly title: string;
  readonly links: ReadonlyArray<{
    readonly label: string;
    readonly href: string;
    readonly newWindow?: boolean;
  }>;
};

export type GnbItem = {
  readonly label: string;
  readonly columns?: ReadonlyArray<MegaColumn>;
};

export const GNB_ITEMS: ReadonlyArray<GnbItem> = [
  {
    label: "KRICT IS",
    columns: [
      {
        title: "원장 인사말",
        links: [
          { label: "비전 및 전략", href: "#" },
          { label: "연혁", href: "#" },
        ],
      },
      {
        title: "조직 안내",
        links: [
          { label: "조직도", href: "#" },
          { label: "연구조직", href: "#" },
        ],
      },
      {
        title: "찾아오시는 길",
        links: [
          { label: "대전 본원", href: "#" },
          { label: "울산·여수", href: "#" },
        ],
      },
    ],
  },
  {
    label: "연구분야",
    columns: [
      {
        title: "화학플랫폼연구본부",
        links: [
          { label: "정밀·바이오화학", href: "#" },
          { label: "의약바이오", href: "#" },
        ],
      },
      {
        title: "화학소재연구본부",
        links: [
          { label: "고분자·복합소재", href: "#" },
          { label: "에너지소재", href: "#" },
        ],
      },
      {
        title: "탄소중립연구본부",
        links: [
          { label: "CO₂ 전환", href: "#" },
          { label: "그린수소", href: "#" },
        ],
      },
    ],
  },
  {
    label: "기술지원",
    columns: [
      {
        title: "기술이전",
        links: [
          { label: "기술이전 절차", href: "#" },
          { label: "보유기술 검색", href: "#" },
        ],
      },
      {
        title: "분석·시험",
        links: [
          { label: "시험·분석의뢰", href: "#", newWindow: true },
          { label: "장비예약", href: "#" },
        ],
      },
      {
        title: "창업지원",
        links: [
          { label: "연구소기업", href: "#" },
          { label: "창업보육", href: "#" },
        ],
      },
    ],
  },
  {
    label: "고객참여",
    columns: [
      {
        title: "고객서비스헌장",
        links: [
          { label: "온라인계약시스템", href: CONTRACT_HREF, newWindow: true },
          { label: "상생기술협력센터 예약", href: "#" },
        ],
      },
      {
        title: "고객의소리",
        links: [
          { label: "방문견학신청", href: "#" },
          { label: "경력증명서 신청", href: "#" },
        ],
      },
      {
        title: "채용정보",
        links: [
          { label: "채용안내", href: "#" },
          { label: "채용공고", href: "#" },
          { label: "KRICT 우수인재등록시스템", href: "#" },
          { label: "KRICT 온라인 투어", href: "#", newWindow: true },
        ],
      },
      {
        title: "입찰공고",
        links: [
          { label: "입찰공고", href: "#" },
          { label: "디딤돌플라자 예약", href: "#" },
        ],
      },
    ],
  },
  {
    label: "정보공개",
    columns: [
      {
        title: "경영공시",
        links: [
          { label: "알리오", href: "#", newWindow: true },
          { label: "사전정보공표", href: "#" },
        ],
      },
      {
        title: "정보공개제도",
        links: [
          { label: "정보공개청구", href: "#" },
          { label: "공공데이터개방", href: "#" },
        ],
      },
      {
        title: "규정·법령",
        links: [
          { label: "주요규정", href: "#" },
          { label: "관련법령", href: "#" },
        ],
      },
    ],
  },
  {
    label: "윤리경영",
    columns: [
      {
        title: "윤리경영 안내",
        links: [
          { label: "윤리헌장", href: "#" },
          { label: "임직원 행동강령", href: "#" },
        ],
      },
      {
        title: "신고센터",
        links: [
          { label: "부패·공익신고", href: "#" },
          { label: "갑질·괴롭힘 신고", href: "#" },
        ],
      },
      {
        title: "인권경영",
        links: [
          { label: "인권경영 선언", href: "#" },
          { label: "인권침해 구제", href: "#" },
        ],
      },
    ],
  },
];

export const TOP_UTILITY_LINKS: ReadonlyArray<{
  readonly label: string;
  readonly href: string;
  readonly newWindow?: boolean;
}> = [
  { label: "시험·분석의뢰시스템", href: "#", newWindow: true },
  { label: "온라인계약시스템", href: CONTRACT_HREF, newWindow: true },
  { label: "동문회", href: "#", newWindow: true },
];

export type ContractNavLink = {
  readonly label: string;
  readonly href: string;
};

export type ContractNavItem = {
  readonly label: string;
  readonly links: ReadonlyArray<ContractNavLink>;
};

const link = (label: string, href = "#"): ContractNavLink => ({ label, href });

export const CONTRACT_NAV_ITEMS: ReadonlyArray<ContractNavItem> = [
  {
    label: "계약진행및현황",
    links: [link("계약대기 목록"), link("계약진행현황"), link("계약완료내역")],
  },
  {
    label: "소액수의견적입찰(경쟁)",
    links: [
      link("소액수의견적입찰 목록", "/contract/bids/list"),
      link("나의 입찰참여 현황", "/contract/bid/my-status"),
      link("소액수의견적입찰 결과조회"),
    ],
  },
  {
    label: "검수 시간예약",
    links: [
      link("검수시간 예약신청"),
      link("나의 예약현황"),
      link("예약 가능시간 조회"),
    ],
  },
  {
    label: "실적증명서",
    links: [link("실적증명서 발급"), link("발급내역 조회")],
  },
  {
    label: "고객지원",
    links: [
      link("공지사항"),
      link("자주묻는질문(FAQ)"),
      link("1:1 문의"),
      link("매뉴얼 다운로드"),
    ],
  },
];

export const SUPPORT_CONTACTS: ReadonlyArray<{
  readonly label: string;
  readonly phone: string;
}> = [
  { label: "검수", phone: "042-860-7843" },
  { label: "재료/소모품", phone: "042-860-7850" },
  { label: "시약/비품", phone: "042-860-7856" },
  { label: "기술장비", phone: "042-860-7852" },
  { label: "일반용역", phone: "042-860-7859" },
  { label: "연구용역", phone: "042-860-7849" },
  { label: "공사", phone: "042-860-7854" },
  { label: "울산검수", phone: "052-241-6125,6373" },
  { label: "울산계약", phone: "052-241-6113" },
  { label: "여수검수", phone: "061-640-3422" },
];
