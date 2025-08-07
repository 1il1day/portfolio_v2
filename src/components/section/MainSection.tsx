import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import SwiperTab from '../SwiperTab';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import { ReactTyped } from "react-typed";
import { AnimFadeIn } from '../../style/CommonStyle';


export default function MainSection() {
  const [isLightMode, setIsLightMode] = useState(false);
  const isPc = useMediaQuery({ minWidth: 768 });

  const textAlert = "성장하는 웹 퍼블리셔 고은빛입니다.";

  // alert 출력
  const onClickAlert = () => {
    alert(textAlert);
  }
  // console 출력
  const onClickConsole = () => {
  console.log("배움에 즐거움을 느끼며, 지속적으로 성장하고 발전하는 것을 중요하게 여깁니다.\n40여 개의 프로젝트에 참여하며 다국어 개발, 스크롤 인터랙션 등의 실무 역량을 가지고 있습니다.\n사용자의 입장에서 일관된 경험을 할 수 있는 퍼블리싱을 하겠습니다.")
  }

  // 테마 변경
  const clickLightMode = () => {
    setIsLightMode(prev => !prev);
  }

  // 라인 데이터
  const lineData = [
    {
      num: 1,
      contents: <p className="contents"></p>,
    },
    {
      num: 2,
      contents: (
        <p className="contents pointer" onClick={onClickAlert}>
          <span className="color-blue">
          <ReactTyped
            strings={[`alert`]}
            typeSpeed={100}
            style={{color: '#4194E9'}}
            cursorChar=''
          />
          </span>
          <span className="color-yellow">
            <ReactTyped
              strings={["("]}
              typeSpeed={100}
              style={{color:'#FFD714'}}
              startDelay={1000}
              cursorChar=''
            />
          </span>
          <ReactTyped
            strings={[`"${textAlert}"`]}
            typeSpeed={100}
            style={{color:'#98C370'}}
            startDelay={1200}
            cursorChar=''
          />
          <span className="color-yellow">
            <ReactTyped
              strings={[")"]}
              typeSpeed={100}
              style={{color:'#FFD714'}}
              startDelay={4000}
              cursorChar=''
            />
          </span>
          <span className="color-default">
            <ReactTyped
              strings={[";"]}
              typeSpeed={50}
              style={{color:isLightMode ? '#50576C': '#C6C6C6'}}
              startDelay={4100}
              cursorChar=''
            />
          </span>
        </p>
      ),
    },
    {
      num: 3,
      contents: (
        <p className="contents pointer fade delay-1" onClick={onClickConsole}>
          <span className="color-default">console.</span>
          <span className="color-blue">log</span>
          <span className="color-yellow">(</span>
          "배움에 즐거움을 느끼며, 지속적으로 성장하고 발전하는 것을 중요하게 여깁니다.\n
          <br />
          40여 개의 프로젝트에 참여하며 다국어 개발, 스크롤 인터랙션 등의 실무 역량을 가지고 있습니다.\n
          <br />
          사용자의 입장에서 일관된 경험을 할 수 있는 퍼블리싱을 하겠습니다."
          <span className="color-yellow">)</span>
          <span className="color-default">;</span>
        </p>
      ),
    },
    {
      num: 4,
      contents: <p className="contents"></p>,
    },
    {
      num: 5,
      contents: (
        <Link
          to="projects"
          smooth={true}
          duration={400}
          offset={isPc ? -80 : -60} 
        >
          <p className="contents pointer fade delay-2">
            <span className="color-gray">// 프로젝트 보러가기</span>
          </p>
        </Link>
      ),
    },
    {
      num: 6,
      contents: (
        <Link
          to="projects"
          smooth={true}
          duration={400}
          offset={isPc ? -80 : -60} 
        >
          <p className="contents pointer fade delay-2">
            <span className="color-default">projects.</span>
            <span className="color-blue">scrollIntoView</span>
            <span className="color-pink">(</span>
            <span className="color-blue">{"{"} </span>
            <span className="color-red">behavior</span>
            <span className="color-blue"> : </span>
            <span className="color-green">'smooth'</span>
            <span className="color-blue"> {"}"}</span>
            <span className="color-pink">)</span>
            <span className="color-default">;</span>
          </p>
        </Link>
      ),
    },
    {
      num: 7,
      contents: <p className="contents"></p>,
    },
    {
      num: 8,
      contents: <p className="contents pointer fade delay-3" onClick={clickLightMode}>
        <span className="color-gray">// 테마 색상 변경하기</span>
      </p>,
    },
    {
      num: 9,
      contents: <p className="contents pointer fade delay-3" onClick={clickLightMode}>
        <span className="color-default">toggleBtn.</span>
        <span className="color-blue">addEventListener</span>
        <span className="color-yellow">{"("}</span>
        <span className="color-green">'click'</span>
        <span className="color-default">, </span>
        <span className="color-pink">function(){"{"}</span>
      </p>,
    },
    {
      num: 10,
      contents: <p className="contents pointer fade delay-3" onClick={clickLightMode}>
        <span className="color-default" style={{marginLeft: "20px"}}>thisScreen.</span>
        <span className="color-red">classList</span>
        <span className="color-default">.</span>
        <span className="color-blue">toggle</span>
        <span className="color-blue">(</span>
        <span className="color-green">"light-mode"</span>
        <span className="color-blue">)</span>
        <span className="color-default">;</span>
      </p>,
    },
    {
      num: 11,
      contents: <p className="contents pointer fade delay-3" onClick={clickLightMode}>
        <span className="color-pink">{"}"}</span>
        <span className="color-yellow">{")"}</span>
      </p>,
    },
    {
      num: 12,
      contents: <p className="contents"></p>,
    },
    {
      num: 13,
      contents: <p className="contents"></p>,
    },
    {
      num: 14,
      contents: <p className="contents"></p>,
    },
    {
      num: 15,
      contents: <p className="contents"></p>,
    },
  ];

  // 터미널 탭 데이터
  const tabData = [
    {title:"PROBLEMS"},
    {title:"OUTPUT"},
    {title:"DEBUG CONSOLE"},
    {title:"TERMINAL", contents:(
      <>
        <label htmlFor="terminalText">터미널 입력 텍스트</label>
        <textarea id="terminalText" className="terminal-text" defaultValue={"version: react@18.3.1"}/>
      </>
    )},
  ];


  return (
    <MainSectionWrap id="main" className={isLightMode ? "light-mode" : "dark-mode"}>
      <MenuBar>
        <FileTitleWrap>
          <img src="../images/icon_javascript.svg" alt="JS 이미지" />
          <FileTitle>publisher.js</FileTitle>
        </FileTitleWrap>
      </MenuBar>
      <LineWrap>
        {lineData.map(({ num, contents }) => (
          <Line key={num}>
            <span className="num">{num}</span>
            {contents}
          </Line>
        ))}
      </LineWrap>
      <TerminalWrap>      
        <SwiperTab data={tabData} useContents={true} isLightMode={isLightMode}/>
      </TerminalWrap>
    </MainSectionWrap>
  )
}

const MenuBar = styled.div`
  height: 40px;
  background: #21252B;
  @media (min-width: 768px) {
    height: 50px;
  }
`;
const FileTitleWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 15px;
  height: 100%;
  padding: 9px 20px;
  border-right: 1px solid #181A1F;
  background: #282C34;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
const FileTitle = styled.h3`
  color: #5DC985;
`;
const LineWrap = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  height: 100%;
  overflow-y: scroll;
`;
const Line = styled.li`
  display: flex;
  line-height: 1.5;
  @media (hover: hover){
    &:hover{
      .num{
        color: #C6C6C6;
      }
      .contents{
        background-color: #2C313C;
      }
    }
  }
  .num{
    min-width: 40px;
    margin-right: 40px;
    text-align: right;
    color: #50576C;
    cursor: default;
    @media (min-width: 768px) {
      min-width: 81px;
      margin-right: 57px;
      font-size: 18px;
    }
  }
  .contents{
    width: 100%;
    padding-right: 20px;
    line-height: 1.5;
    color: #98C370;
    transition: opacity .4s;
    @media (min-width: 768px) {
      font-size: 18px;
    }
    &.fade{
      visibility: hidden;
      opacity: 0.5;
      animation: fadeIn 0.5s ease forwards;
      &.delay-1 { animation-delay: 4.5s; }
      &.delay-2 { animation-delay: 5s; }
      &.delay-3 { animation-delay: 5.5s; }
      ${AnimFadeIn}
    }
    .color{
      &-blue{
        color: #4194E9;
      }
      &-yellow{
        color: #FFD714;
      }
      &-default{
        color: #C6C6C6;
      }
      &-gray{
        color: #5C6370;
      }
      &-pink{
        color: #CF75CF;
      }
      &-red{
        color: #D46273;
      }
      &-green{
        color: #98C370;
      }
      &-orange{
        color: #D19A66;
      }
      &-mint{
        color: #52ADBE;
      }
    }
  }
  a, .pointer{
    display: block;
    width: 100%;
    cursor: pointer;
  }
`;
const TerminalWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-top: 2px solid #474A4F;
  background-color: #2C313C;
  height: 100%;
  max-height: 220px;
  color: #C6C6C6;
  @media (min-width: 768px) {
    max-height: 300px;
    padding: 0 50px;
  }
  &::after{
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background: #21252B;
    @media (min-width: 768px) {
      height: 30px;
    }
  }
  .terminal-text-wrap{
    display: flex;
    align-items: start;
    gap: 10px;
    width: 100%;
    height: calc(100% - 84px);
    padding: 0 20px;
    @media (min-width: 768px) {
      height: calc(100% - 114px);
      padding: 0;
    }
    span{
      margin-top: 2px;
      color: #C6C6C6;
    }
    label{
      display: none;
    }
    .terminal-text{
      width: 100%;
      height: 100%;
      background: transparent;
      border: none;
      outline: none;
      font-family: 'D2Coding', sans-serif;
      font-size: 16px;
      line-height: 1.2;
      color: #CFD0D1;
      resize: none;
    }
  }
`;

const MainSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
  height: calc(100vh - 60px);
  margin-top: 60px;
  background-color: #282C34;
  font-family: 'D2Coding', sans-serif;
  user-select: none;
  -webkit-user-drag: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-drag: none;
  transition: all .1s;
  @media (min-width: 768px) {
    height: calc(100vh - 80px);
    margin-top: 80px;
  }
  &.light-mode{ // 라이트 모드
    background-color: #fff;
    ${MenuBar}{
      background-color: #F3F3F3;
    }
    ${FileTitleWrap}{
      background-color: #FFFFFF;
      border-color: #F3F3F3;
    }
    ${Line}{
      @media (hover: hover){
        &:hover{
          .num{
            color: #50576C;
          }
          .contents{
            background-color: rgba(44, 49, 60, 0.1);
          }
        }
      }
    }
    .num{
      color: #C6C6C6;
    }
    .contents{
      .color-default{
        color: #50576C;
      }
      .color-gray{
        color: #C6C6C6;
      }
    }
    ${TerminalWrap}{
      background-color: #FFFFFF;
      border-color: #D3D3D3;
      &::after{
        background-color: #F3F3F3;
      }
      .terminal-text{
        color: #9B9DA0;
      }
    }
  }
`;