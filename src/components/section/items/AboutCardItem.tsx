import React from 'react'
import styled from 'styled-components';
import { CardDataType } from './AboutCard';

type Props = {
  className: string;
  data: CardDataType;
}

export default function AboutCardItem({className,data}: Props) {
  return (
    <>
      {
        className === "education" &&
          data.educations.map((item, index) => (
            <CardItem className={className} key={index}>
              <h3 className="list-title">{item.title}</h3>
              <span className="list-date">{item.date}</span>
            </CardItem>
          ))
      }
    {
      className == "career" && (
        data.careers.map((item, index) => (
          <CardItem className={className} key={index}>
            <h3 className="list-title">{item.title}</h3>
            <h4 className="career-sub-title">{item.subTitle}</h4>
            <span className="list-date">{item.date}</span>
          </CardItem>
        ))
      )
    }
    {
      className == "certificates" && (
        data.certificates.map((item, index) => (
          <CardItem className={className} key={index}>
            <h3 className="list-title">{item.title}</h3>
            <span className="list-date">{item.date}</span>
          </CardItem>
        ))
      )
    }
    </>
  )
}

const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  background-color: #EDEEF0;
  .list-title{
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
    @media (min-width: 1600px) {
      font-size: 20px;
    }
  }
  .list-date{
    font-size: 14px;
  }
  &.career{ // 경력 및 기술 예외
    gap: 6px;
    .list-title{
      font-size: 20px, 1.6667vw, 32px;
      @media (min-width: 1600px) {
        font-size: 32px;
      }
    }
    .list-date{
      line-height: 1.2;
    }
  }
  &.certificates{ // 자격증 예외
    flex-direction: row;
    justify-content: space-between;
  }
`;