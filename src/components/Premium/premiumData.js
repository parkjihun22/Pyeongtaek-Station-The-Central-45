import premiumIcon1 from "../../assets/Main/section3-img1.png";
import premiumIcon2 from "../../assets/Main/section3-img2.png";
import premiumIcon3 from "../../assets/Main/section3-img3.png";
import premiumIcon4 from "../../assets/Main/section3-img4.png";

export const premiumData = {
  eyebrow: "GREAT PREMIUM",
  title: ["평택역 중심생활권", "평택역 더센트럴45"],
  description:
    "평택역을 가까이 이용하는 역세권 입지와 완성된 도심 생활 인프라, 준공 후분양의 장점을 갖춘 평택역 더센트럴45의 프리미엄 라이프를 만나보세요.",

  items: [
    {
      id: "premium-location",
      number: "01",
      icon: premiumIcon1,
      title: "평택역 인접 역세권 입지",
      subtitle: "편리한 이동을 완성하는 도심 교통환경",
      description:
        "수도권 전철 1호선과 일반철도를 이용할 수 있는 평택역을 가까이 두어 대중교통 이용과 평택 도심 이동이 편리합니다.",
      link: "/LocationEnvironment/intro",
      linkText: "입지환경 보기",
    },
    {
      id: "premium-completed",
      number: "02",
      icon: premiumIcon2,
      title: "완성된 준공 후분양 아파트",
      subtitle: "직접 확인하고 선택하는 새로운 주거 기준",
      description:
        "완성된 건물과 실제 공간, 주변 생활환경을 직접 확인할 수 있는 준공 후분양 아파트로 빠른 입주를 계획할 수 있습니다.",
      link: "/BusinessGuide/intro",
      linkText: "사업안내 보기",
    },
    {
      id: "premium-infra",
      number: "03",
      icon: premiumIcon3,
      title: "풍부한 도심 생활 인프라",
      subtitle: "쇼핑부터 문화와 의료까지 가까운 생활",
      description:
        "AK플라자 평택점과 CGV, 평택역 로데오거리, 전통시장, 병원과 금융기관 등 이미 형성된 평택 중심상권을 편리하게 이용할 수 있습니다.",
      link: "/LocationEnvironment/intro",
      linkText: "생활환경 보기",
    },
    {
      id: "premium-unit",
      number: "04",
      icon: premiumIcon4,
      title: "다양한 평면과 주거 편의",
      subtitle: "라이프스타일에 따라 선택하는 주거 공간",
      description:
        "전용 79㎡와 84㎡ 실수요형부터 110㎡, 125㎡, 152㎡ 대형·펜트하우스 타입까지 다양한 주택형과 입주민 중심의 커뮤니티를 갖췄습니다.",
      link: "/LocationEnvironment/primium",
      linkText: "프리미엄 보기",
    },
  ],
};
