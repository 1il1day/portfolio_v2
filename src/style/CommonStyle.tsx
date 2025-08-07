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

export const AnimUpDown = css`
  .anim-up-down{
    animation: animUpDown .8s infinite alternate ease-in-out;
    @keyframes animUpDown {
      0%{transform: translateY(0px)}
      0%{transform: translateY(10px)}
      100%{transform: translateY(0px)}
    }
  }
`;

export const AnimFadeIn = css`
  @keyframes fadeIn {
    to {
      visibility: visible;
      opacity: 1;
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
  font-family: 'BoldDunggeunmo',sans-serif;
  font-size: 20px;
  color: #FFF;
  user-select: none;
  cursor: pointer;
  @media (min-width: 1600px) {
    width: 150px;
    height: 150px;
  }
`;