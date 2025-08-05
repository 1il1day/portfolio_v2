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