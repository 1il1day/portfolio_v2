import React from 'react'
import styled from 'styled-components';
import SectionTitle from '../common/SectionTitle';
import { GrGithub } from "react-icons/gr";
import Icon from '../common/Icon';
import Badge from '../common/Badge';
import { AnimWave } from '../../style/CommonStyle';

const listData = [
  {
    title:"H.P",
    contents:"010-4328-1365"
  },
  {
    title:"E-MAIL",
    contents:"isweunb@gmail.com"
  },
];

export default function ContactSection() {
  return (
    <ContactSectionWrap id="contact">
      <div className="anim-wave-wrap">
          <div className="anim-wave"></div>
      </div>
      <SectionInner>
        <TitleIconWrap>
          <SectionTitle>CONTACT</SectionTitle>
          <a href="https://github.com/1il1day" target="_black">
            <Icon name={GrGithub} size={50} color="#282C34"/>
          </a>
        </TitleIconWrap>
        <ContactListWrap>
          <ContactList>
            <Badge className="list-title" hoverBadge>{listData[0].title}</Badge>
            <ListContents href={`tel:${listData[0].contents}`}>{listData[0].contents}</ListContents>
          </ContactList>
          <ContactList>
            <Badge className="list-title" hoverBadge>{listData[1].title}</Badge>
            <ListContents href={`mailto:${listData[1].title}`}>{listData[1].contents}</ListContents>
          </ContactList>
        </ContactListWrap>
      </SectionInner>
    </ContactSectionWrap>
  )
}

const ContactSectionWrap = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: calc(100vh - 80px);
  @media (min-width: 1200px) {
    padding-top: 160px;
  }
  ${AnimWave}
  .anim-wave-wrap{
    bottom: unset;
    top: 0px;
    background: #fff;
    .anim-wave{
      background-color: #50576C;
    }
  }
`;
const SectionInner = styled.div`
  width: 100%;
  max-width: 1600px;
  padding: 0 20px;
  margin: auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0 80px;
  }
`;
const TitleIconWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 1;
`;
const ContactListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  z-index: 1;
  padding-top: 100px;
  @media (min-width: 768px) {
    padding-top: 220px;
  }
`;
const ContactList = styled.li`
  z-index: 1;
  @media (hover: hover) {
    &:hover{
      .list-title{
        &::after{
          content:"클릭시 연결됩니다";
          width: 134px;
        }
      }
    }
  }
`;
const ListContents = styled.a`
  display: block;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: -2px;
  line-height: 1.5;
  @media (min-width: 768px) {
    font-size: clamp(30px, 2.87vw, 46px);
  }
`;