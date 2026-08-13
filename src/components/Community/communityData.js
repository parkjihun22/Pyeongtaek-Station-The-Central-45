import bgImage from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import bannerImage from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";
import layoutImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

export const communityData = {
  eyebrow: "COMMUNITY",
  title: "도심 속 일상을 풍요롭게 만드는 공간",
  description:
    "평택역 더센트럴45는 편리한 도심 생활과 여유로운 휴식이 조화를 이루도록 실용적인 단지 설계와 입주민 중심의 커뮤니티 공간을 제공합니다.",
  backgroundImage: bgImage,
  banner: {
    image: bannerImage,
    alt: "평택역 더센트럴45 주상복합 아파트 전경",
  },
  items: [
    {
      id: "complex-layout",
      label: "동·호수 배치도",
      title: "도심형 주거에 최적화된 공간 배치",
      description:
        "지하 5층부터 지상 24층까지 1개 동으로 구성된 평택역 더센트럴45의 동·호수 배치와 타입별 세대 구성을 확인할 수 있습니다.",
      image: layoutImage,
      alt: "평택역 더센트럴45 동호수 배치도",
    },
    {
      id: "complex-design",
      label: "스마트 시스템",
      title: "안전하고 편리한 스마트 주거 시스템",
      description:
        "입주민의 안전과 생활 편의를 고려한 보안·에너지 관리 시스템을 적용해 더욱 편리하고 효율적인 주거 환경을 제공합니다.",
      image: designImage,
      alt: "평택역 더센트럴45 스마트 시스템",
    },
    {
      id: "community-space",
      label: "커뮤니티",
      title: "일상에 여유를 더하는 커뮤니티",
      description:
        "스터디카페와 공용 오피스, 게스트룸, 맘스·키즈카페 등 학습과 업무, 휴식과 소통을 위한 다양한 커뮤니티 공간을 마련했습니다.",
      image: communityImage,
      alt: "평택역 더센트럴45 입주민 커뮤니티 시설",
    },
  ],
};
