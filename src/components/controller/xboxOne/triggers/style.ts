import styled from 'styled-components'

export const Triggers = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 447px;
  left: 50%;
  transform: translate(-50%, 0px);
`

export const Trigger = styled.div`
  /* Half of image */
  width: 88px;
  height: 121px;

  &.white {
    background-image: url('/xboxOne/triggers.svg');
  }

  &.black {
    background-image: url('/xboxOne/triggers.svg');
  }

  &.left {
    background-position-x: left;
  }

  &.right {
    transform: rotateY(180deg);
  }
`
