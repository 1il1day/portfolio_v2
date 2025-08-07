import React from 'react'
import styled from 'styled-components';
import Badge from '../../common/Badge';
import { useMediaQuery } from 'react-responsive';

type ListDataType = {
  title: string;
  image: string;
  alt: string;
  period: string;
  type: string;
  url: string | null;
  docUrl: string | null;
}
type Props = {
  data: ListDataType;
}

export default function ProjectItem({data}: Props) {
  const isPc = useMediaQuery({ minWidth: 768 });
  const openMobileWindow = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string
  ) => {
    e.preventDefault();
    window.open(
      url,
      '_blank',
      'width=414,height=896,top=50,left=50,scrollbars=yes,resizable=yes'
    );
  };

  return (
    <>
      <ImgBox className="img-box">
        <img src={data.image} alt={data.alt} />
      </ImgBox>
      <ContentsBox>
        <DateWrap>
          <span>{data.period}</span>
          <span>{data.type}</span>
        </DateWrap>
        <Title>{data.title}</Title>
        <BadgeWrap>
          {data.url && (
            <>
              <a href={data.url} target="_blank">
                <Badge>{isPc ? "PC 새창보기" : "보러가기"}</Badge>
              </a>
              {isPc &&
                <a
                  href={data.url}
                  onClick={(e) => openMobileWindow(e, data.url!)}
                >
                  <Badge>Mobile 새창보기</Badge>
                </a>
              }
            </>
          )}
          {data.docUrl && (
            <a href={data.docUrl} target="_blank">
              <Badge>프로젝트 기술서</Badge>
            </a>
          )}
        </BadgeWrap>
      </ContentsBox>
    </>
  )
}

const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  @media (min-width: 768px) {
    height: 528px;
  }
  @media (min-width: 1200px) {
    height: calc(642 / 1080 * 100%);
  }
  &::after{ // dim
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    transition: opacity .4s;
  }
  &.hidden-dim{
    &::after{
      opacity: 0;
    }
  }
  img{
    width: 100%;
    transition: all 6s ease;
    transform: translateY(0);
  }
`;
const ContentsBox = styled.div`
  padding: 35px 40px;
`;
const DateWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 27px;
  span{
    font-weight: 600;
    color: #fff;
  }
`;
const Title = styled.h3`
  margin-bottom: 35px;
  font-size: clamp(32px,3.37vw ,48px);
  font-weight: 600;
  color: #fff;
  @media (min-width: 1200px) {
    font-size: 48px;
  }
`;
const BadgeWrap = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;