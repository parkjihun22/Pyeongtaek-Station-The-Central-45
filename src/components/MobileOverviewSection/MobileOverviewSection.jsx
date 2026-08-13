// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect, useRef } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>평택역 더센트럴45</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>경기도 평택시 평택동 45-1번지</span>
        </li>
        <li>
          <strong>대지면적</strong>
          <span>1,446.70㎡</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>지하 5층~지상 24층, 1개 동</span>
        </li>
        <li>
          <strong>공급규모</strong>
          <span>공동주택 총 99세대 및 근린생활시설</span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>전용 79㎡~152㎡</span>
        </li>
        <li>
          <strong>주차대수</strong>
          <span>공동주택 117대, 근린생활시설 28대</span>
        </li>
        <li>
          <strong>사업방식</strong>
          <span>준공 후분양 주상복합 아파트</span>
        </li>
        <li>
          <strong>입지환경</strong>
          <span>평택역 및 평택 도심 중심생활권</span>
        </li>
        <li>
          <strong>시행</strong>
          <span>㈜엠페이브평택</span>
        </li>
        <li>
          <strong>시공</strong>
          <span>파인건설㈜</span>
        </li>
      </ul>
    ),
  },
  {
    key: "location",
    label: "입지환경",
    content: (
      <>
        {/* 입지환경 섹션 상단 문단 */}
        <p>PREMIUM LOCATION</p>
  
        <h3>
          평택역과 완성된 도심 인프라를 가까이 누리는
          <br />
          평택역 더센트럴45 중심생활권
        </h3>
      </>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <p>GREAT PREMIUM</p>
  
        <h3>
          평택역 중심생활권과 준공 후분양의 가치를 누리는
          <br />
          평택역 더센트럴45 프리미엄 라이프
        </h3>
  
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
  ];
  
  function PremiumSlider() {
    const slides = [
      {
        img: slide1,
        title: "평택역을 가까이 누리는 역세권",
        desc:
          "수도권 전철 1호선과 일반철도를 이용할 수 있는 평택역 인접 입지\n평택역 주변 버스 노선과 대중교통을 편리하게 이용하는 생활환경\n평택 도심과 수도권 주요 지역으로 이어지는 편리한 교통 여건",
      },
      {
        img: slide2,
        title: "전용 79㎡~152㎡의 다양한 평면",
        desc:
          "실수요형 전용 79㎡·84㎡부터 대형 주택형까지 다양한 구성\n가족 구성과 생활 방식에 따라 선택할 수 있는 폭넓은 평면\n펜트하우스 타입을 포함한 차별화된 주거 공간",
      },
      {
        img: slide3,
        title: "완성된 준공 후분양 아파트",
        desc:
          "완성된 건물과 주변 환경을 직접 확인할 수 있는 후분양 방식\n일반적인 선분양 아파트보다 짧은 입주 대기기간\n실제 공간과 마감 상태를 확인한 후 선택할 수 있는 주거 상품",
      },
      {
        img: slide4,
        title: "평택 중심상권의 풍부한 생활 인프라",
        desc:
          "AK플라자 평택점과 CGV, 평택역 로데오거리를 가까이 이용\n전통시장과 병원, 금융기관 및 다양한 상업시설이 형성된 생활권\n쇼핑과 문화, 의료, 외식을 편리하게 누리는 도심 생활환경",
      },
      {
        img: slide5,
        title: "생활을 풍요롭게 만드는 커뮤니티",
        desc:
          "학습과 업무를 위한 스터디카페와 공용 오피스\n방문객과 입주민의 편의를 고려한 게스트룸\n맘스·키즈카페와 키즈정원 등 가족 중심의 커뮤니티 공간",
      },
      {
        img: slide6,
        title: "평택 도심에서 누리는 주거 가치",
        desc:
          "평택역 교통망과 기존 도심 생활 인프라를 함께 누리는 입지\n총 99세대로 조성된 도심형 주상복합 아파트\n교통과 생활 편의성, 다양한 주택형을 갖춘 평택역 더센트럴45",
      },
    ];
  

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const itemRefs = useRef({});

  const toggle = (key) => {
    setOpenKey((prevKey) => (prevKey === key ? null : key));

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const targetItem = itemRefs.current[key];
        if (!targetItem) return;

        const fixedHeaderOffset = 96;
        const targetTop =
          window.scrollY + targetItem.getBoundingClientRect().top - fixedHeaderOffset;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "auto",
        });
      });
    });
  };

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      <img src={heroImage} className={styles.heroImage} alt="평택역 더센트럴45 히어로 메인사진" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div
          key={key}
          className={styles.accordionItem}
          ref={(node) => {
            itemRefs.current[key] = node;
          }}
        >
          <button
            type="button"
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
            aria-expanded={openKey === key}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
