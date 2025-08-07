import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';

type TabDataType = {
  title: string;
  contents?: React.ReactNode;
}
type Props = {
  data: TabDataType[];
  useContents?: boolean;
  isLightMode?: boolean;
}

/**
 * @param [props.data] - 탭 제목, 탭 내용 데이터
 * @param [props.useContents] - true일 경우, 탭 내용 표시
 */
export default function SwiperTab({data, useContents = false, isLightMode = false}: Props) {
  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <>
      <div>
        {/* 탭 제목 (swiper) */}
        <TabWrap
          freeMode={true}
          slidesPerView={3}
          watchSlidesProgress={true}
          onClick={(swiper:any) => {
            if(typeof swiper.clickedIndex == 'number'){
              setActiveIndex(swiper.clickedIndex)}}
            }
          breakpoints={
            {
              0: {
                slidesPerView: 3.5,
              },
              350: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }
          }
        >
          {data.map((item,index)=>(
            <TabList 
              key={index} 
              className={index === activeIndex ? "active" : ""}
              isLightMode={isLightMode}
            >{item.title}</TabList>
          ))}
        </TabWrap>
      </div>
      {/* 탭 내용 */}
      <div className="terminal-text-wrap">
        <span>{">"}</span>
        {useContents && data[activeIndex].contents}
      </div>
    </>
  )
}

const TabWrap = styled(Swiper)`
  position: relative;
  padding: 13px 20px 20px;
  font-size: 14px;
  color: #9B9DA0;
  @media (min-width: 768px) {
    padding: 13px 0 35px;
    font-size: 16px;
  }
`;
const TabList = styled(SwiperSlide)<{isLightMode:boolean}>`
  color: #9B9DA0;
  text-align: center;
  cursor: pointer;
  @media (min-width: 350px) {
    width: auto !important;
    padding: 0px;
  }
  &.active{
    position: relative;
    color: ${({isLightMode})=> (isLightMode ? "#50576C":"#CFD0D1")};
    &::after{
      content: "";
      display: block;
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${({isLightMode})=> (isLightMode ? "#50576C":"#CFD0D1")};
    }
  }
`;