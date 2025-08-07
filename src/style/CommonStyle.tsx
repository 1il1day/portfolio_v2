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

export const AnimWave = css`
  .anim-wave-wrap{
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 500px;
    background-color: #50576C;
    overflow: hidden;
    @media (min-width: 768px) {
      height: 600px;
    }
    .anim-wave {
      position: absolute;
      z-index: 1;
      width: 1000px;
      height: 1000px;
      top: -130%;
      left: 50%;
      border-radius: 40%;
      background: #fff;
      animation: animWave 20s linear infinite;
      transform-origin: center center;
      backface-visibility: hidden;
      will-change: transform;
      transform-origin: 0 50%;
      @media (min-width: 768px) {
        top: -470%;
        left: 50%;
        width: 3200px;
        height: 3200px;
      }
    }
      @keyframes animWave {
        0%{
          transform: rotate(0) translateX(-50%);
        }
        100%{
          transform: rotate(360deg) translateX(-50%);
        }
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