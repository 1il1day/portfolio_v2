import React, { useLayoutEffect } from 'react'
import styled from 'styled-components';
import SectionTitle from '../SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';
import ProjectItem from '../ProjectItem';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CircleBtnStyle } from '../../style/CommonStyle';


const projectsData = [
  {
    title: '대한조선',
    image: '../images/img_project_01.png',
    alt: '대한조선 썸네일 이미지',
    period: '2024.11.28 - 2024.12.06 (7일)',
    type: '반응형 웹',
    url: 'https://www.daehanship.com/',
    docUrl: null,
  },
  {
    title: 'Metanex',
    image: '../images/img_project_02.png',
    alt: '메타넥스 썸네일 이미지',
    period: '2024.08 - 2024.08 (10일)',
    type: 'React 반응형 웹',
    url: 'https://www.metanex.com/',
    docUrl: 'https://charm-ski-3f0.notion.site/197977f397df81e8b74dfe35d2150bd4',
  },
  {
    title: 'SAMYANG VALVE',
    image: '../images/img_project_03.png',
    alt: '삼양발브 썸네일 이미지',
    period: '2024.07 - 2024.08 (10일)',
    type: 'React 반응형 웹',
    url: 'https://en.samyangvalve.com/',
    docUrl: 'https://charm-ski-3f0.notion.site/197977f397df81108453c9511ec1be30',
  },
  {
    title: '한솔데코',
    image: '../images/img_project_04.png',
    alt: '한솔데코 썸네일 이미지',
    period: '2023.05 - 2023.05 (11일)',
    type: '반응형 웹',
    url: 'https://www.hansoldeco.co.kr/',
    docUrl: 'https://charm-ski-3f0.notion.site/197977f397df8116b73cd98d8af521d4',
  },
  {
    title: '영화 ‘밀수’ 이벤트 페이지',
    image: '../images/img_project_05.png',
    alt: '밀수 썸네일 이미지',
    period: '2023.05 - 2023.07',
    type: 'React 반응형 웹',
    url: null,
    docUrl: 'https://charm-ski-3f0.notion.site/197977f397df811fb243e2b3a847db3f',
  },
];

export default function ProjectsSection() {
  const isPc = useMediaQuery({ minWidth: 1200 });
  
  gsap.registerPlugin(ScrollTrigger);

  // 모바일 스크롤 인터랙션
  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(max-width: 1200px)", () => { // ~ 1200px
      const lists = gsap.utils.toArray('.project-list') as HTMLElement[];
  
      lists.forEach((item) => {
        const imgBox = item.querySelector('.img-box');
        if (!imgBox) return;
  
        gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top center",
            end: "bottom center",
            scrub: true,
            // markers: true,
            onEnter: () => imgBox.classList.add('hidden-dim'),
            onEnterBack: () => imgBox.classList.add('hidden-dim'),
            onLeave: () => imgBox.classList.remove('hidden-dim'),
            onLeaveBack: () => imgBox.classList.remove('hidden-dim'),
          },
        });
      });
      return () => mm.revert(); // 클린업
    });
  }, []);

  return (
    <ProjectsSectionWrap id="projects">
      <SectionTitleArea>
        <div>
          <SectionTitle>PROJECTS</SectionTitle>
          {isPc &&
            <BtnWrap>
              <SwiperBtn type="button" className="swiper-prev-btn">이전</SwiperBtn>
              <SwiperBtn type="button" className="swiper-next-btn">다음</SwiperBtn>
            </BtnWrap>
          }
        </div>
      </SectionTitleArea>

      {isPc ? (
        // PC
        <StyledSwiper 
          modules={[Navigation]} 
          navigation={{
            prevEl: '.swiper-prev-btn',
            nextEl: '.swiper-next-btn',
          }}
          className="projectStyledSwiper"
          breakpoints={
            {
              0: {
                slidesPerView: 1.5,
              },
              1200: {
                slidesPerView: 2.1,
              },
            }
          }
        >
        {projectsData.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectItem data={project}/>
          </SwiperSlide>
        ))}
        </StyledSwiper>
      ):(
        // Mobile
        <ul>
        {projectsData.map((project, index) => (
          <ProjectsList key={index} className="project-list">
            <ProjectItem data={project}/>
          </ProjectsList>
        ))}
        </ul>
      )}
    </ProjectsSectionWrap>
  )
}

const ProjectsSectionWrap = styled.div`
  display: block;
  position: relative;
  background-color: #fff;
  padding-top: 80px;
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    height: calc(100vh - 80px);
    padding-top: 0;
  }
`;
const SectionTitleArea = styled.div`
  padding: 0 20px;
  margin-bottom: 60px;
  @media (min-width: 1200px) {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: calc(800 / 1920 * 100%);
    padding: 0;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 40px;
  @media (min-width: 1200px) {
    margin-top: 85px;
  }
`;
const SwiperBtn = styled.button`
  ${CircleBtnStyle}
  &.swiper-button-disabled{
    opacity: 0.7;
    background-color: #50576C;
    color: #b0b4bd;
    pointer-events: none;
  }
`;
const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  .swiper-slide{
    height: 100%;
    cursor: grab;
    &:nth-child(1) {
      background-color: #50576C;
    }
    &:nth-child(2) {
      background-color: #454C60;
    }
    &:nth-child(3) {
      background-color: #3B414D;
    }
    &:nth-child(4) {
      background-color: #2F333B;
    }
    &:nth-child(5) {
      background-color: #21252B;
      .img-box{
        display: flex;
        align-items: center;
      }
    }
    @media (min-width: 1200px) {
      padding-top: 58px;
    }
    &:hover{
      .img-box{
        &::after{
          opacity: 0;
        }
      }
    }
    &:not(:nth-child(5)):hover{
      img{
        @media (min-width: 768px) {
          transform: translateY(calc(-100% + 528px));
        }
        @media (min-width: 1200px) {
          transform: translateY(calc(-100% + (642 / 1080)));
        }
      }
    }
  }
`;
const ProjectsList = styled.li`
  height: 100%;
  &:nth-child(1) {
    background-color: #50576C;
  }
  &:nth-child(2) {
    background-color: #454C60;
  }
  &:nth-child(3) {
    background-color: #3B414D;
  }
  &:nth-child(4) {
    background-color: #2F333B;
  }
  &:nth-child(5) {
    background-color: #21252B;
    .img-box{
      display: flex;
      align-items: center;
    }
  }
  @media (min-width: 1200px) {
    padding-top: 58px;
  }
`;

