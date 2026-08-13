import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from "./BusinessGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";

const projectData = [
  { label: "사업명", value: "평택역 더센트럴45" },
  {
    label: "대지위치",
    value: "경기도 평택시 평택동 45-1번지",
  },
  {
    label: "건축규모",
    value: "지하 5층~지상 24층, 1개 동",
  },
  {
    label: "주택형",
    value: "전용 79㎡~152㎡",
  },
  {
    label: "세대수",
    value: "공동주택 총 99세대",
  },
  {
    label: "주차대수",
    value: "공동주택 117대, 근린생활시설 28대",
  },
  {
    label: "입지환경",
    value: "평택역 및 평택 도심 중심생활권",
  },
  {
    label: "생활인프라",
    value: "AK플라자, CGV, 로데오거리, 전통시장, 의료·상업시설 인접",
  },
  {
    label: "사업방식",
    value: "준공 후분양 주상복합 아파트",
  },
  {
    label: "시행",
    value: "㈜엠페이브평택",
  },
  {
    label: "시공",
    value: "파인건설㈜",
  },
];

const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

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

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="사업개요" />

      <MenuBar contents={menuContents} />

      <div className={styles.textBox}>
  <div>평택역 중심생활권이 완성하는 새로운 주거 가치</div>
  <div>평택역 더센트럴45, 도심 속 프리미엄을 선보입니다.</div>
</div>

<section className={styles.businessShell} aria-labelledby="business-title">
  <div className={styles.businessHeader}>
    <span>PROJECT</span>
    <h2 id="business-title">사업개요</h2>
    <p>
      경기도 평택시 평택동 45-1번지에 들어선
      <br />
      지하 5층~지상 24층, 총 99세대 규모의 준공 후분양 주상복합
      아파트입니다.
    </p>
  </div>
        <img
          className={styles.img3}
          src={page1}
          alt="평택역 더센트럴45 사업개요 이미지"
        />

        <div className={styles.tableContainer}>
          {!isMobile && (
            <img
              className={styles.tableImg}
              src={tableImage}
              alt="평택역 더센트럴45 사업개요 표 이미지"
            />
          )}

          <table className={styles.projectTable}>
            <tbody>
              {projectData.map((item, index) => (
                <tr key={index}>
                  <td className={styles.label}>{item.label}</td>
                  <td className={styles.contents}>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며,
          추후 계획의 변동 등은 당사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BusinessGuide1;