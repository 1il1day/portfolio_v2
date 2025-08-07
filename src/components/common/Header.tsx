import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Link, scrollSpy } from 'react-scroll';
import { animateScroll as scroll } from "react-scroll";
import Icon from './Icon';
import { FaFolder } from "react-icons/fa";
import { FaFolderOpen  } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';
import { FaStarOfLife } from "react-icons/fa6";
import { AnimSpinStar } from '../../style/CommonStyle';

export default function Header() {
  const [currentSection, setCurrentSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const isPc = useMediaQuery({ minWidth: 768 });

  // 네비게이션 데이터
  const navItems = [
    {name:"main"},
    {name:"projects"},
    {name:"about"},
    {name:"contact"},
  ]

  // 모바일 메뉴 토글
  const toggleMenu = () => setIsOpen(prev => !prev);

  // 로고 클릭 시
  const clickLogo = () => {
    scroll.scrollToTop({ duration: 400, smooth: true });
    if(!isPc){
      setIsOpen(false);
    }
  }

  // 모바일 네비게이션 클릭 시
  const clickNav = () => {
    if(!isPc){
      setIsOpen(false);
    }
  }

  // isOpen 상태일 때, 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // react-scroll spy 강제 업데이트
  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <HeaderWrap>
      <HeaderInner>
        <LogoWrap onClick={clickLogo}>
          <span>KEB </span>
          <div className="spin-star">
            <Icon name={FaStarOfLife} size={14} color="#282C34"/>
          </div>
          <span className="point"> PUBLISHER</span>
        </LogoWrap>
        <Navigation>
          {navItems.map((item)=>(
            <NavList 
              key={item.name} 
              to={item.name} 
              spy={true} 
              smooth={true} 
              duration={400} 
              offset={isPc ? -80 : -60} 
              onSetActive={() => setCurrentSection(item.name)}
              isOpen={isOpen}
              onClick={clickNav}
            >
              {item.name}
            </NavList>
          ))}
        </Navigation>
        {!isPc && ( 
          <>
            <MenuWrap onClick={toggleMenu}>
              <Icon name={isOpen ? FaFolderOpen : FaFolder } size={30} color="#fff"/>
            </MenuWrap>
            <MobileNav isOpen={isOpen}></MobileNav>
          </>
        )} 
      </HeaderInner>
    </HeaderWrap>
  )
}

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 60px;
  background-color: #3B414D;
  font-family: 'BoldDunggeunmo',sans-serif;
  @media (min-width: 768px) {
    height: 80px;
  }
`;
const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  @media (min-width: 1200px) {
    justify-content: center;
    padding: 0 50px;
  }
`;
const LogoWrap = styled.h1`
  display: inline-block;
  padding: 10px 8px;
  font-size: 16px;
  background-color: #fff;
  color: #282C34;
  border-radius: 4px;
  cursor: pointer;
  @media (min-width: 768px) {
    padding: 14px 12px;
  }
  @media (min-width: 1200px) {
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
  }
  .point{
    color: #4194E9;
  }
  ${AnimSpinStar}
`;
const Navigation = styled.nav`
  display: flex;
  gap: 8px;
  @media (max-width: 767px) { // ~ 767px
    position: absolute;
    top: 60px;
    left: 50%;
    padding: 20px 0 30px;
    transform: translateX(-50%);
    z-index: 100;
    display: flex;
    flex-direction: column;
  }
`;
const NavList = styled(Link)<{isOpen: boolean}>`
  min-width: 94px;
  border-radius: 4px;
  background-color: #fff;
  text-align: center;
  padding: 12px 8px;
  transition: all .2s .2s;
  cursor: pointer;
  @media (max-width: 767px) { // ~ 767px
    visibility: hidden;
    display: inline-block;
    padding: 10px 8px;
    opacity: 0;
    transform: translateY(6px);
    flex: none;
    transition: none;
    ${({isOpen})=>
      isOpen &&
      css`
          visibility: visible;
          opacity: 1;
          transform: translateY(0px);
          transition: all .2s .2s;
      `}
      }
  &.active{
    background-color: #282C34;
    color: #fff;
  }
`;
const MenuWrap = styled.div`
  cursor: pointer;
`;
const MobileNav = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: ${({isOpen})=>(isOpen ? 'calc(100% - 60px)':'0px')};
  z-index: -1;
  background-color: rgba(47, 47, 47, 0.5);
  backdrop-filter: blur(15px);
  visibility: ${({isOpen})=>(isOpen ? 'visible':'hidden')};
  @media (min-width: 768px) {
    height: calc(100% - 80px);
  }
  &::before{
    content: "";
    position: fixed;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: calc(100% + 1px);
    height: ${({isOpen})=>(isOpen ? '218px':'0px')};
    background-color: #3B414D;
    transition: height 0.3s ease;
  }
  &::after{ // 하단 배경 요소
    content: "";
    position: absolute;
    top: ${({isOpen})=>(isOpen ? '218px':'0px')};
    left: 0;
    z-index: 10;
    background-color: #21252B;
    width: 100%;
    height: 18px;
    border-radius: 0 0 8px 8px;
    transition: top 0.3s ease;
  }
`;
