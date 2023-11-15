import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
`

/* Base */

export const Base = styled.div`
  width: 750px;
  height: 630px;

  &.white {
    background-image: url('/xboxOne/base-white.svg');
  }

  &.black {
    background-image: url('/xboxOne/base-black.svg');
  }
`
