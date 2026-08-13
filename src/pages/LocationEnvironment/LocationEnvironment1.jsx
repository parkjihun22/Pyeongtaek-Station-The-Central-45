import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const locationMenu = [
  { title: "입지안내", url: "/LocationEnvironment/intro" },
  { title: "프리미엄", url: "/LocationEnvironment/primium" },
];

const locationSections = [
  {
    img: section2Image1,
    titleText: "평택역을 가까이 누리는<br />도심 역세권 입지",
    contentText:
      "수도권 전철 1호선과 일반철도를 이용할 수 있는 평택역 인접<br />평택 도심과 수도권 주요 지역으로 편리하게 이동하는 교통환경",
  },
  {
    img: section2Image2,
    titleText: "풍부한 생활 인프라<br />편리한 중심생활권",
    contentText:
      "AK플라자 평택점과 CGV, 로데오거리를 가까이 이용하는 생활권<br />쇼핑과 문화, 외식을 편리하게 누리는 평택 도심 주거환경",
  },
  {
    img: section2Image3,
    titleText: "다양한 대중교통<br />편리한 도심 이동",
    contentText:
      "평택역 주변의 다양한 버스 노선과 대중교통 기반<br />평택 주요 생활권과 업무지역으로 이어지는 편리한 이동환경",
  },
  {
    img: section2Image4,
    titleText: "의료와 생활 편의를 갖춘<br />완성된 도심 생활권",
    contentText:
      "전통시장과 병원, 금융기관 및 다양한 생활 편의시설 인접<br />입주와 동시에 기존 도심 인프라를 누릴 수 있는 주거환경",
  },
  {
    img: section2Image5,
    titleText: "완성된 공간을 확인하는<br />준공 후분양 아파트",
    contentText:
      "건물 외관과 실제 공간, 주변 환경을 직접 확인할 수 있는 후분양<br />입주 대기기간을 줄이고 구체적인 주거 계획을 세울 수 있는 아파트",
  },
  {
    img: section2Image6,
    titleText: "전용 79㎡부터 152㎡까지<br />다양한 주거 선택",
    contentText:
      "실수요형 전용 79㎡·84㎡부터 대형 펜트하우스까지 다양한 구성<br />가족 구성과 라이프스타일에 따라 선택하는 평택역 더센트럴45",
  },
];

const LocationEnvironment1 = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!zoomImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setZoomImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomImage]);

  const openZoom = (src, alt) => {
    setZoomImage({ src, alt });
  };

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />
      <MenuBar contents={locationMenu} />

      <div className={styles.textBox}>
        <div>평택의 생활권에서</div>
        <div>삶의 가치가 높아지는 곳</div>
        <div>평택역 더센트럴45가 새로운 주거 가치로 찾아옵니다.</div>
      </div>

      <figure className={styles.locationMapFrame}>
        <img
          src={page1}
          className={styles.image2}
          alt="평택역 더센트럴45 입지환경과 생활권 안내 이미지"
        />
        <button
          type="button"
          className={styles.zoomButton}
          onClick={() =>
            openZoom(
              page1,
              "평택역 더센트럴45 입지환경과 생활권 안내 이미지"
            )
          }
          aria-label="입지환경 이미지 크게 보기"
        >
          <FiSearch />
          <span>크게 보기</span>
        </button>
      </figure>

      <div className={styles.section2}>
        {locationSections.map((value) => (
          <LocationSectionBox
            key={value.titleText}
            image={value.img}
            title={value.titleText}
            text={value.contentText}
            onZoom={() =>
              openZoom(
                value.img,
                `평택역 더센트럴45 ${value.titleText.replace(/<[^>]*>/g, " ")} 이미지`
              )
            }
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          본 홍보물의 내용과 이미지는 소비자의 이해를 돕기 위한 것으로, 개발 예정 및 교통,
          학교 계획 등에 관한 사항은 해당 기관의 자료를 토대로 제작되었습니다. 사업계획 및
          일정은 관계 기관과 사업 주체의 사정에 따라 변경될 수 있으며, 자세한 내용은
          입주자모집공고와 관계 기관의 최종 고시를 확인하시기 바랍니다.
        </div>
      </div>

      {zoomImage && (
        <div
          className={styles.zoomModal}
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대 보기"
          onClick={() => setZoomImage(null)}
        >
          <div className={styles.zoomModalInner} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.zoomClose}
              onClick={() => setZoomImage(null)}
              aria-label="확대 이미지 닫기"
            >
              <FiX />
            </button>
            <img src={zoomImage.src} alt={zoomImage.alt} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
