import React from 'react'
import styled, { css } from 'styled-components';

type Props = {
  children:string;
  className?: string;
  hoverBadge?:boolean;
}

export default function Badge({children, className = '', hoverBadge = false}: Props) {
  return (
    <BadgeWrap className={className} hoverBadge={hoverBadge}>{children}</BadgeWrap>
  )
}

const BadgeWrap = styled.span<{hoverBadge:boolean}>`
  position: relative;
  display: inline-block;
  padding: 12px 8px;
  margin-bottom: 5px;
  background-color: #282C34;
  border-radius: 4px;
  color: #fff;
  font-family: 'BoldDunggeunmo',sans-serif;
  font-size: 16px;
  color: #fff;
  transition: background-color .2s, color .2s;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (hover:hover) {
    &:hover{
      background-color: #fff;
      color: #282C34;
    }
  }
  ${({hoverBadge})=>
  hoverBadge &&
  css`
    &:hover{
      background-color: #282C34;
      color: #fff;
    }
    &::after{ // hover 스타일
      content:"";
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      left: 100%;
      width: 16px;
      height: 100%;
      margin-left: 5px;
      padding: 8px 6px;
      background: #282C34;
      border-radius: 4px;
      font-size: 14px;
      color: #fff;
      transition: width .4s;
      white-space: nowrap;
      @media (min-width: 768px) {
        padding: 12px 8px;
        font-size: 14px;
      }
    }
  `
  }
`;