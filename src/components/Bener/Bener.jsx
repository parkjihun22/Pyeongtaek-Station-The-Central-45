import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title = "평택역 더센트럴45" }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="평택역 더센트럴45 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <h1
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </h1>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;
const contents = (text, isLoaded) => {
  const normalizedText = text.replace(/\s/g, "");

  const brandTitles = [
    "홍보영상",
    "브랜드소개",
    "평택역더센트럴45",
    "평택더센트럴45",
  ];

  const businessTitles = [
    "사업개요",
    "사업안내",
    "분양일정",
    "공급안내",
    "분양안내",
    "청약안내",
    "모집공고안내",
    "인지세납부안내",
  ];

  const locationTitles = [
    "입지환경",
    "입지안내",
    "프리미엄",
    "오시는길",
  ];

  const complexTitles = [
    "단지안내",
    "단지배치도",
    "호수배치도",
    "동호수배치도",
    "스마트시스템",
    "커뮤니티",
  ];

  const unitTitles = [
    "세대안내",
    "세대안내영상",
    "79㎡평면도",
    "84A㎡평면도",
    "84B㎡평면도",
    "84C㎡평면도",
    "84D㎡평면도",
    "84P㎡평면도",
    "110P㎡평면도",
    "125㎡평면도",
    "125P㎡평면도",
    "152P㎡평면도",
    "인테리어",
    "E모델하우스",
    "E-모델하우스",
  ];

  const promotionTitles = [
    "홍보센터",
    "언론보도",
    "관심고객등록",
    "방문예약등록",
    "방문예약",
  ];

  if (brandTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          평택역 중심에서 만나는 평택역 더센트럴45의 새로운 주거 가치.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          평택역 도보권과 완성된 도심 생활 인프라를 가까이 누리는 주상복합 아파트.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          준공 후분양으로 완성된 공간과 주변 환경을 직접 확인할 수 있습니다.
        </div>
      </>
    );
  } else if (
    businessTitles.includes(normalizedText) ||
    unitTitles.includes(normalizedText) ||
    normalizedText.includes("인테리어")
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          경기도 평택시 평택동 45-1번지에 들어선 평택역 더센트럴45 사업 안내.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          지하 5층부터 지상 24층까지, 총 99세대로 구성된 주상복합 아파트.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          공급 정보부터 분양가, 세대 구성, 평면도와 인테리어까지 확인하세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          평택역 더센트럴45 분양문의 1533-8848
        </div>
      </>
    );
  } else if (locationTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          평택역과 AK플라자, 로데오거리 등 도심 생활 인프라를 가까이 누리는 입지.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          교통과 쇼핑, 문화, 의료시설을 편리하게 이용할 수 있는 평택 중심 생활권.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          평택역 더센트럴45에서 완성된 도심 주거의 편리함을 만나보세요.
        </div>
      </>
    );
  } else if (complexTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          실용적인 공간 구성과 생활 편의 설계를 갖춘 평택역 더센트럴45.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          스터디카페와 공용 오피스, 게스트룸 등 입주민을 위한 커뮤니티 공간.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          스마트 시스템과 동·호수 배치, 단지 특화설계를 자세히 확인하세요.
        </div>
      </>
    );
  } else if (promotionTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          평택역 더센트럴45의 분양 소식과 잔여세대 및 방문예약 정보를 확인하세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          관심고객등록을 통해 공급 정보와 계약 조건, 상담 안내를 받아보실 수 있습니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          모델하우스 방문예약 및 분양문의 1533-8848
        </div>
      </>
    );
  }

  return (
    <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
      평택역 더센트럴45 분양가, 평면도, 잔여세대 및 방문예약 정보를 확인하세요.
    </div>
  );
};