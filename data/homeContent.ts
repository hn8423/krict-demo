export type HeroSlide = {
  readonly src: string;
  readonly alt: string;
};

export type Thumb = {
  readonly src: string;
  readonly alt: string;
  readonly tag: string;
  readonly title: string;
  readonly href: string;
};

export type Featured = {
  readonly tag: string;
  readonly title: string;
  readonly bullets: ReadonlyArray<string>;
  readonly href: string;
};

// 보도자료 (이미지 1의 SOEC 기사)
export const FEATURED: Featured = {
  tag: "보도자료",
  title: "전기로 이산화탄소 분해하는 니켈 기반 SOEC 상용화 성큼",
  bullets: [
    "- 고온에서 쉽게 갈라지던 전해질 계면 문제를 복합소재 설계와 대면적화에 쉬운 공정으로 해결",
    "- 기존 니켈 기반 SOEC 대비 CO₂ 전기분해 성능 3.6배 향상… 800℃에서 전류밀도 2.14 A/cm² 달성…",
  ],
  href: "#",
};

// 히어로 캐러셀 이미지. 슬라이드를 추가하려면 항목을 더 넣으면 됨.
export const HERO_SLIDES: ReadonlyArray<HeroSlide> = [
  { src: "/krict/hero-1.jpg", alt: "한국화학연구원 50주년 연구진 단체사진" },
  { src: "/krict/hero-2.jpg", alt: "KRICT 연구 현장" },
  { src: "/krict/hero-3.jpg", alt: "KRICT 연구진" },
  { src: "/krict/hero-4.jpg", alt: "KRICT 연구 성과" },
];

// 하단 썸네일 3장
export const THUMBS: ReadonlyArray<Thumb> = [
  {
    src: "/krict/thumb-1.jpg",
    alt: "건물 앞 연구진",
    tag: "창립 50주년",
    title: "화학과 함께한 50년, 행복으로 보답하는 내일",
    href: "#",
  },
  {
    src: "/krict/thumb-2.jpg",
    alt: "AI 영상 공모 포스터",
    tag: "공모전",
    title: "AI 영상 공모 — 화학기술이 만들어갈 미래",
    href: "#",
  },
  {
    src: "/krict/thumb-3.jpg",
    alt: "복도의 두 연구진",
    tag: "연구성과",
    title: "KRICT 연구진, 차세대 화학기술 성과 공유",
    href: "#",
  },
];
