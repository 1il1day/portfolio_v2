import React from 'react'
import styled from 'styled-components';
import { FaStarOfLife } from "react-icons/fa6";
import { AnimSpinStar } from '../../style/CommonStyle';
import Icon from './Icon';
import { useMediaQuery } from 'react-responsive';

type Props = {
  children: string;
}

/**
 * @param [props.children] - 내용
 */
export default function SectionTitle({children}: Props) {
  const isPc = useMediaQuery({ minWidth: 768 });

  return (
    <SectionTitleWrap>
      <span className="spin-star">
        <Icon name={FaStarOfLife} size={isPc ? 50 : 30} color="#4194E9"/>
      </span>
      <div className="section-title">{children}</div>
    </SectionTitleWrap>
  )
}

const SectionTitleWrap = styled.div`
  display: inline-flex;
  align-items: start;
  flex-direction: column;
  gap: 20px;
  font-family: 'BoldDunggeunmo',sans-serif;
  font-size: 36px;
  ${AnimSpinStar}
  @media (min-width: 768px) {
    font-size: clamp(36px, 4vw, 64px);
    gap: 38px;
  }
`;