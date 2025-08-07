import React, { useLayoutEffect } from 'react'
import styled from 'styled-components';
import SectionTitle from '../common/SectionTitle';
import { FaArrowDown } from "react-icons/fa";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimUpDown, CircleBtnStyle } from '../../style/CommonStyle';
import Icon from '../common/Icon';
import { useMediaQuery } from 'react-responsive';
import AboutCard from './items/AboutCard';


// 카드 데이터
const cardData = {
  educations: [
    {
      title: "이젠컴퓨터 UI/UX웹&앱 디자인&프론트엔드(React.js) 과정",
      date: "2022.01 ~ 2022.07 (수료)"
    },
    {
      title: "강원대학교 / 영상문화학과",
      date: "2018.03 - 2022.02 (졸업)"
    },
    {
      title: "이현고등학교",
      date: "2016.03 - 2018.02 (졸업)"
    }
  ],
  careers: [
    {
      title: "리커너스",
      subTitle: "웹 에이전시",
      date: "2022.08 - 2024.11 (2년 4개월)"
    },
  ],
  skills: [
    {
      src: `${process.env.PUBLIC_URL}/images/icon_html.png`,
      alt: "HTML5 로고 이미지",
      title: "HTML5",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/icon_css.png`,
      alt: "CSS3 로고 이미지",
      title: "CSS3",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/icon_sass.svg`,
      alt: "SCSS 로고 이미지",
      title: "SCSS",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/icon_javascript.svg`,
      alt: "JavaScript 로고 이미지",
      title: "JavaScript",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/icon_jquery.png`,
      alt: "jQuery 로고 이미지",
      title: "jQuery",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/icon_react.svg`,
      alt: "React 로고 이미지",
      title: "React",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/icon_typescript.svg`,
      alt: "TypeScript 로고 이미지",
      title: "TypeScript",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/icon_styled-components.png`,
      alt: "Styled-Component 로고 이미지",
      title: "Styled-Component",
    },
  ],
  certificates: [
    {
      title: "웹디자인기능사",
      date: "2022.09"
    },
    {
      title: "컴퓨터활용능력 1급",
      date: "2021.09"
    },
    {
      title: "워드프로세서 1급",
      date: "2014.07"
    },
    {
      title: "GTQ 포토샵 1급",
      date: "2015.01"
    },
    {
      title: "OA 마스터",
      date: "2022.02"
    },
  ],
};

export default function AboutSection() {
  const isPc = useMediaQuery({ minWidth: 1200 });

  gsap.registerPlugin(ScrollTrigger);

  // 카드 스크롤 인터랙션
  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    let ctx = gsap.context(() => {
      mm.add("(min-width: 1200px) and (max-width: 1299px)", () => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#about",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
            pin: ".card-wrap",
            invalidateOnRefresh: true,
            // markers: true,
          },
        });
        tl.to(".card:nth-child(1)", { x: "-5%", y:0, rotate:"0deg", scaleX:0 })
          .to(".card:nth-child(2)", { scaleX:0 },"<")
          .to(".card:nth-child(3)", { x: "5%", y:0, rotate:"0deg", scaleX:0 },"<")
          .to(".card:nth-child(1)", { scaleX:1 })
          .to(".card:nth-child(1)", { backgroundColor: "#fff", duration:0 },"<")
          .to(".card:nth-child(1) .card-list-wrap", { opacity: 1, duration:0},"<")
          .to(".card:nth-child(2)", { scaleX:1},"<")
          .to(".card:nth-child(2)", { backgroundColor: "#fff", duration:0 },"<")
          .to(".card:nth-child(2) .card-list-wrap", { opacity: 1, duration:0},"<")
          .to(".card:nth-child(3)", { scaleX:1},"<")
          .to(".card:nth-child(3)", { backgroundColor: "#fff", duration:0 },"<")
          .to(".card:nth-child(3) .card-list-wrap", { opacity: 1, duration:0},"<")
      });
      mm.add("(min-width: 1300px)", () => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#about",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
            pin: ".card-wrap",
            invalidateOnRefresh: true,
            // markers: true,
          },
        });
        tl.to(".card:nth-child(1)", { x: "-20%", y:0, rotate:"0deg", scaleX:0 })
          .to(".card:nth-child(2)", { scaleX:0 },"<")
          .to(".card:nth-child(3)", { x: "20%", y:0, rotate:"0deg", scaleX:0 },"<")
          .to(".card:nth-child(1)", { scaleX:1 })
          .to(".card:nth-child(1)", { backgroundColor: "#fff", duration:0 },"<")
          .to(".card:nth-child(1) .card-list-wrap", { opacity: 1, duration:0},"<")
          .to(".card:nth-child(2)", { scaleX:1},"<")
          .to(".card:nth-child(2)", { backgroundColor: "#fff", duration:0 },"<")
          .to(".card:nth-child(2) .card-list-wrap", { opacity: 1, duration:0},"<")
          .to(".card:nth-child(3)", { scaleX:1},"<")
          .to(".card:nth-child(3)", { backgroundColor: "#fff", duration:0 },"<")
          .to(".card:nth-child(3) .card-list-wrap", { opacity: 1, duration:0},"<")
      });
    });

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <AboutSectionWrap id="about">
      <AboutCardWrap className="about-1">
        <div className="anim-wave-wrap">
          <div className="anim-wave"></div>
        </div>
        <SectionInner>
          <SectionTitle>ABOUT ME</SectionTitle>
          {isPc && <ScrollHint>
            SCROLL
            <div className="anim-up-down">
              <Icon name={FaArrowDown}/>
            </div>
            </ScrollHint>
          }
        </SectionInner>
        {isPc && <AboutCard data={cardData}/>}
      </AboutCardWrap>
      <div className="about-2">
        {!isPc && <AboutCard data={cardData}/>}
      </div>
    </AboutSectionWrap>
  )
}

const AboutSectionWrap = styled.section`
  position: relative;
  @media (min-width: 1200px) {
    height: 200vh;
  }
  .about-1{
    position: relative;
    width: 100%;
    @media (min-width: 1200px) {
      height: 100vh;
    }
    .anim-wave-wrap{
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 500px;
      background-color: #50576C;
      overflow: hidden;
      @media (min-width: 768px) {
        height: 600px;
      }
      .anim-wave {
        position: absolute;
        scale: 2;
        width: 1000px;
        height: 1000px;
        top: -230%;
        left: 0%;
        border-radius: 40%;
        background: #fff;
        animation: animSpin 20s infinite linear;
        will-change: transform;
        @media (min-width: 768px) {
          scale: 3;
          top: -347%;
          left: 20%;
          width: 1200px;
          height: 1200px;
        }
      }
    }
  }
  .about-2{
    position: relative;
    padding-top: 80px;
    width: 100%;
    background-color: #50576C;
    z-index: -1;
    @media (min-width: 1200px) {
      padding-top: 0;
      height: 100vh;
    }
  }
`;
const SectionInner = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: auto;
  padding: 0 20px;
  .section-title{
    @media (max-width: 1200px) {
      color: #fff;
    }
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0 clamp(20px, 4.16vw, 80px);
  }
  @media (min-width: 1600px) {
    padding: 0 80px;
  }
`;
const ScrollHint = styled.div`
  ${CircleBtnStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: auto;
  ${AnimUpDown}
`;
const AboutCardWrap = styled.div`
  padding-top: 160px;
`;