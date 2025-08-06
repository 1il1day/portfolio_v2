import React from 'react'
import { css } from 'styled-components'

export const AnimSpinStar = css`
  .spin-star{
    display: inline-flex;
    animation: animSpin 2s linear infinite;
    transform-origin: center center;
  }
  @keyframes animSpin {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }
`;

export const CircleBtnStyle = css`
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: none;
  background-color: #282C34;
  font-size: 18px;
  color: #FFF;
  user-select: none;
  cursor: pointer;
  @media (min-width: 1600px) {
    width: 150px;
    height: 150px;
  }
`;