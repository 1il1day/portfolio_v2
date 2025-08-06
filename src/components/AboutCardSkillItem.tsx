import React from 'react'
import styled from 'styled-components';

type SkillDataType = {
  src: string;
  alt: string;
  title: string;
}
type Props = {
  data: SkillDataType;
}

export default function AboutCardSkillItem({data}: Props) {
  return (
    <SkillsList>
      <img src={data.src} alt={data.alt} />
      <p className="title">{data.title}</p>
    </SkillsList>
  )
}
const SkillsList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 6px;
  border: 2px solid #EDEEF0;
  border-radius: 12px;
  img{
    width: 30px;
  }
  .title{
    text-align: center;
    font-size: 14px;
    letter-spacing: -.5px;
  }
`;