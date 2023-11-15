import styled, { css } from 'styled-components'

export const ShareAndOptions = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 50%;
  width: 354px;
  top: 141px;
  transform: translate(-50%, 0px);
`

const whiteImage = css`
  background-image: url('/ps4/white/start.svg');
`

const blackImage = css`
  background-image: url('/ps4/black/start.svg');
`

const commonStyle = css`
  width: 30px;
  height: 50px;
  background-repeat: no-repeat;
  background-size: cover;

  &.white {
    ${whiteImage}
  }

  &.black {
    ${blackImage}
  }
`

export const Share = styled.div`
  ${commonStyle}
`

export const Options = styled.div`
  background-position-x: right;
  ${commonStyle}
`
