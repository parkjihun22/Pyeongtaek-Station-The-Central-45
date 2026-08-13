const SITE_URL = "https://godeok-sujainhouse.co.kr";

export const siteSeo = {
  siteName: "평택역 더센트럴45",
  siteUrl: SITE_URL,
  ogImage: "/img/og/main.jpg",
  locale: "ko_KR",
  organizationId: `${SITE_URL}/#organization`,
  websiteId: `${SITE_URL}/#website`,

  defaultTitle:
    "평택역 더센트럴45 | 평택역 중심생활권 준공 후분양 아파트",

  defaultDescription:
    "평택역 더센트럴45ㅣ☎️(대표)1533-8848ㅣ평택 더센트럴45ㅣ평택역 인접 준공 후분양 아파트ㅣ분양가ㅣ평면도ㅣ공급정보ㅣ잔여세대 문의ㅣ모델하우스 방문예약",

  project: {
    addressCountry: "KR",
    addressRegion: "경기도",
    addressLocality: "평택시",
    streetAddress: "평택동 45-1번지",
    block: "평택동 45-1번지",
    households: "99세대",
    scale: "지하 5층~지상 24층, 1개 동, 총 99세대",
    unitTypes: [
      "79㎡",
      "84㎡A",
      "84㎡B",
      "84㎡C",
      "84㎡D",
      "125㎡",
    ],
    brand: "더센트럴45",
    brands: ["더센트럴45"],
    navigationSchemaName: "평택역 더센트럴45 주요 메뉴",
  },

  keywords: [
    "평택역 더센트럴45",
    "평택역 센트럴45",
    "평택 더센트럴45",
  ],
};

export const seoNavigation = [
  {
    name: "사업안내",
    path: "/BusinessGuide/intro",
    children: [
      {
        name: "사업안내",
        path: "/BusinessGuide/intro",
      },
      {
        name: "분양일정",
        path: "/BusinessGuide/plan",
      },
    ],
  },
  {
    name: "입지환경",
    path: "/LocationEnvironment/intro",
    children: [
      {
        name: "입지안내",
        path: "/LocationEnvironment/intro",
      },
      {
        name: "프리미엄",
        path: "/LocationEnvironment/primium",
      },
    ],
  },
  {
    name: "단지안내",
    path: "/ComplexGuide/intro",
    children: [
      {
        name: "단지배치도",
        path: "/ComplexGuide/intro",
      },
      {
        name: "호수배치도",
        path: "/ComplexGuide/detailintro",
      },
      {
        name: "커뮤니티",
        path: "/ComplexGuide/community",
      },
    ],
  },
  {
    name: "타입안내",
    path: "/FloorPlan/59A",
    children: [
      {
        name: "79㎡",
        path: "/FloorPlan/59A",
      },
      {
        name: "84㎡A",
        path: "/FloorPlan/59B",
      },
      {
        name: "84㎡B",
        path: "/FloorPlan/84A",
      },
      {
        name: "84㎡C",
        path: "/FloorPlan/84B",
      },
      {
        name: "84㎡D",
        path: "/FloorPlan/114A",
      },
      {
        name: "125㎡",
        path: "/FloorPlan/114B",
      },
      {
        name: "E-모델하우스",
        path: "/FloorPlan/Emodel",
      },
    ],
  },
  {
    name: "홍보센터",
    path: "/Promotion/Press",
    children: [
      {
        name: "관심고객등록",
        path: "/Promotion/Customer",
      },
      {
        name: "언론보도",
        path: "/Promotion/Press",
      },
    ],
  },
];

const page = ({
  path,
  title,
  description,
  menu,
  image = siteSeo.ogImage,
  priority = 0.8,
  changefreq = "weekly",
  robots = "index, follow, max-snippet:-1, max-image-preview:large",
}) => ({
  path,
  title,
  description,
  menu,
  image,
  priority,
  changefreq,
  robots,
});

export const seoPages = {
  home: page({
    path: "/",
    title:
      "평택역 더센트럴45",
    description: siteSeo.defaultDescription,
    menu: "홈",
    priority: 1,
    changefreq: "daily",
  }),

  businessIntro: page({
    path: "/BusinessGuide/intro",
    title:
      "사업개요 | 평택역 더센트럴45 총 99세대 준공 후분양",
    description:
      "평택역 더센트럴45 사업개요 안내ㅣ경기도 평택시 평택동 45-1번지ㅣ지하 5층~지상 24층ㅣ총 99세대ㅣ주상복합 아파트 공급정보를 확인하세요.",
    menu: "사업안내",
    image: "/img/og/business.jpg",
    priority: 0.9,
  }),

  businessPlan: page({
    path: "/BusinessGuide/plan",
    title:
      "분양일정 | 평택역 더센트럴45 계약 및 입주 안내",
    description:
      "평택역 더센트럴45 분양일정 안내ㅣ공급 일정ㅣ계약 절차ㅣ서류 준비ㅣ잔금 납부ㅣ입주 관련 주요 정보를 확인하세요.",
    menu: "사업안내",
    image: "/img/og/business.jpg",
  }),

  locationIntro: page({
    path: "/LocationEnvironment/intro",
    title:
      "입지환경 | 평택역 더센트럴45 평택역 중심생활권",
    description:
      "평택역 더센트럴45 입지환경 안내ㅣ평택역 인접 역세권ㅣAK플라자ㅣCGVㅣ로데오거리ㅣ전통시장ㅣ의료·상업시설 등 평택 중심생활권을 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),

  locationPremium: page({
    path: "/LocationEnvironment/primium",
    title:
      "프리미엄 | 평택역 더센트럴45 준공 후분양 아파트",
    description:
      "평택역 더센트럴45 프리미엄 안내ㅣ평택역 인접 입지ㅣ완성된 도심 인프라ㅣ준공 후분양ㅣ전용 79㎡~152㎡의 다양한 주거 가치를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
  }),

  complexIntro: page({
    path: "/ComplexGuide/intro",
    title:
      "단지배치도 | 평택역 더센트럴45 주상복합 아파트",
    description:
      "평택역 더센트럴45 단지배치도 안내ㅣ지하 5층~지상 24층, 1개 동으로 구성된 주상복합 아파트의 단지 구성과 공간 배치를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
    priority: 0.9,
  }),

  complexDetail: page({
    path: "/ComplexGuide/detailintro",
    title:
      "호수배치도 | 평택역 더센트럴45 타입별 세대 배치",
    description:
      "평택역 더센트럴45 호수배치도 안내ㅣ층별 호수 구성ㅣ타입별 세대 위치ㅣ전용 79㎡부터 152㎡까지의 주택형 배치를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  complexCommunity: page({
    path: "/ComplexGuide/community",
    title:
      "커뮤니티 | 평택역 더센트럴45 입주민 편의시설",
    description:
      "평택역 더센트럴45 커뮤니티 안내ㅣ스터디카페ㅣ공용 오피스ㅣ게스트룸ㅣ맘스·키즈카페 등 입주민 중심의 편의시설을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  floorPlan79: page({
    path: "/FloorPlan/59A",
    title:
      "79㎡ 평면도 | 평택역 더센트럴45 타입안내",
    description:
      "평택역 더센트럴45 전용 79㎡ 평면도 안내ㅣ실내 공간 구성ㅣ생활 동선ㅣ수납 계획과 타입별 주요 특징을 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
  }),

  floorPlan84A: page({
    path: "/FloorPlan/59B",
    title:
      "84㎡A 평면도 | 평택역 더센트럴45 타입안내",
    description:
      "평택역 더센트럴45 전용 84㎡A 평면도 안내ㅣ실거주 중심의 공간 구성ㅣ수납 계획ㅣ가족 생활 동선을 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
  }),

  floorPlan84B: page({
    path: "/FloorPlan/84A",
    title:
      "84㎡B 평면도 | 평택역 더센트럴45 타입안내",
    description:
      "평택역 더센트럴45 전용 84㎡B 평면도 안내ㅣ타입별 공간 구성ㅣ실내 동선ㅣ수납과 주거 공간의 주요 특징을 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
  }),

  floorPlan84C: page({
    path: "/FloorPlan/84B",
    title:
      "84㎡C 평면도 | 평택역 더센트럴45 타입안내",
    description:
      "평택역 더센트럴45 전용 84㎡C 평면도 안내ㅣ가족 중심의 실내 구성ㅣ공간 활용ㅣ생활 동선과 타입별 특징을 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
  }),

  floorPlan84D: page({
    path: "/FloorPlan/114A",
    title:
      "84㎡D 평면도 | 평택역 더센트럴45 타입안내",
    description:
      "평택역 더센트럴45 전용 84㎡D 평면도 안내ㅣ실용적인 공간 배치ㅣ수납 계획ㅣ타입별 실내 구성과 생활 동선을 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
  }),

  floorPlan125: page({
    path: "/FloorPlan/114B",
    title:
      "125㎡ 평면도 | 평택역 더센트럴45 대형 타입",
    description:
      "평택역 더센트럴45 전용 125㎡ 평면도 안내ㅣ여유로운 실내 공간ㅣ대형 주택형의 생활 동선ㅣ타입별 주요 특징을 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
  }),

  emodel: page({
    path: "/FloorPlan/Emodel",
    title:
      "E-모델하우스 | 평택역 더센트럴45 평면도",
    description:
      "평택역 더센트럴45 E-모델하우스 안내ㅣ타입별 실내 구조ㅣ인테리어ㅣ공간 구성과 생활 동선을 온라인으로 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
    priority: 0.9,
  }),

  customer: page({
    path: "/Promotion/Customer",
    title:
      "관심고객등록 | 평택역 더센트럴45 방문예약",
    description:
      "평택역 더센트럴45 관심고객등록ㅣ모델하우스 방문예약ㅣ타입별 분양가ㅣ잔여세대ㅣ공급정보와 현재 계약 조건에 관한 상담을 신청하세요.",
    menu: "홍보센터",
    image: "/img/og/customer.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  press: page({
    path: "/Promotion/Press",
    title:
      "언론보도 | 평택역 더센트럴45 분양소식",
    description:
      "평택역 더센트럴45 언론보도 페이지ㅣ평택역 중심생활권ㅣ총 99세대ㅣ준공 후분양ㅣ타입별 평면도ㅣ분양가와 잔여세대 관련 소식을 확인하세요.",
    menu: "홍보센터",
    image: "/img/og/main.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  notFound: page({
    path: "/404",
    title:
      "페이지를 찾을 수 없습니다 | 평택역 더센트럴45",
    description:
      "요청하신 페이지를 찾을 수 없습니다. 평택역 더센트럴45의 사업안내, 입지환경, 단지안내, 타입안내와 관심고객등록 메뉴를 이용해 주세요.",
    menu: "오류",
    priority: 0,
    changefreq: "yearly",
    robots: "noindex, follow",
  }),
};

export const seoPathMap = Object.fromEntries(
  Object.entries(seoPages).map(([key, value]) => [
    value.path.toLowerCase(),
    key,
  ])
);

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/")
    ? path
    : `/${path}`;

  return `${siteSeo.siteUrl}${normalizedPath}`;
};

export const getSeoPageByPath = (pathname = "/") => {
  let decodedPath = "/";

  try {
    decodedPath = decodeURI(pathname);
  } catch (error) {
    decodedPath = pathname;
  }

  const cleanPath = decodedPath.split("?")[0].split("#")[0];
  const normalizedPath =
    cleanPath.replace(/\/+$/, "").toLowerCase() || "/";

  const exactKey = seoPathMap[normalizedPath];

  if (exactKey) {
    return seoPages[exactKey];
  }

  if (normalizedPath.includes("/promotion/press/")) {
    return seoPages.press;
  }

  if (normalizedPath.endsWith("/press")) {
    return seoPages.press;
  }

  if (normalizedPath.endsWith("/customer")) {
    return seoPages.customer;
  }

  return seoPages.notFound;
};