import React from 'react'
import styled from 'styled-components';
import AboutCardItem from './AboutCardItem';
import AboutCardSkillItem from './AboutCardSkillItem';

export type CardDataType = {
  educations: {
    title: string;
    date: string;
  }[];
  careers: {
    title: string;
    subTitle: string;
    date: string;
  }[];
  skills: {
    src: string;
    alt: string;
    title: string;
  }[];
  certificates: {
    title: string;
    date: string;
  }[];
};
type Props = {
  data: CardDataType;
}

export default function AboutCard({data}: Props) {
  return (
    <CardContainer>
      <div className="card-wrap">
        <div className="card">
          <span className="card-title">학력 및 교육</span>
          <span className="card-title card-title-eng">EDUCATION</span>
          <CardListWrap className="card-list-wrap">
            <AboutCardItem className="education" data={data}/>
          </CardListWrap>
        </div>
        <div className="card">
          <span className="card-title">경력</span>
          <span className="card-title card-title-eng">CAREER & SKILLS</span>
          <CardListWrap className="card-list-wrap">
            <AboutCardItem className="career" data={data}/>
            <SkillsWrap>
              <h3 className="card-title">기술 스택</h3>
              <SkillsListWrap>
                {data.skills.map((skill, index) => 
                  <AboutCardSkillItem key={index} data={skill}/>
                )}
              </SkillsListWrap>
            </SkillsWrap>
          </CardListWrap>
        </div>
        <div className="card">
          <span className="card-title">자격증</span>
          <span className="card-title card-title-eng">CERTIFICATES</span>
          <CardListWrap className="card-list-wrap">
            <AboutCardItem className="certificates" data={data}/>
          </CardListWrap>
        </div>
      </div>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  .card-wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding: 0 20px;
    margin: auto;
    @media (min-width: 600px) {
      padding: 0 60px;
    }
    @media (min-width: 1200px) {
      flex-direction: row;
      align-items: unset;
      gap: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0;
    }
    .card{
      position: relative;
      padding: 20px;
      width: 100%;
      height: 552px;
      border-radius: 20px;
      box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.3);
      background: #fff;
      will-change: transform;
      @media (min-width: 768px) {
        max-width: 420px;
        padding: 26px 35px;
      }
      @media (min-width: 1600px) {
        width: 420px;
        height: 552px;
      }
      &:nth-child(1){
        @media (min-width: 1200px) {
          z-index: 10;
          transform: translateX(90%) translateY(-2%) rotate(-5deg);
          background-color: #FCE6B8;
        }
      }
      &:nth-child(2){
        @media (min-width: 1200px) {
          z-index: 5;
          background-color: #D5FBFE;
        }
      }
      &:nth-child(3){
        @media (min-width: 1200px) {
          transform: translateX(-90%) translateY(2%) rotate(2deg);
          z-index: 1;
          background-color: #FCE3D7;
        }
      }
    }
    .card-title{
      font-family: 'BoldDunggeunmo',sans-serif;
      font-size: 18px;
      @media (min-width: 1600px) {
        font-size: 20px;
      }
    }
    .card-title-eng{
      position: absolute;
      right: 35px;
      bottom: 26px;
    }
  }
`;
const CardListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
  @media (min-width: 1200px) {
    opacity: 0;
  }
`;
const SkillsWrap = styled.div`
  .card-title{
    margin: 20px 0 10px;
  }
`;
const SkillsListWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 6px;
`;