import styled from 'styled-components'

export const Sticks = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 372px;
  height: 196px;
  top: 240px;
  left: 329px;
  transform: translate(-50%, 0px);
`

export const Stick = styled.div`
  position: absolute;
  /* A third of images width */
  width: 84px;
  height: 84px;
  transition: transform 0.15s;

  &.white {
    background-image: url('/xboxOne/sticks.svg');
  }

  &.black {
    background-image: url('/xboxOne/sticks.svg');
  }

  &.left {
    top: 0;
    left: 0;
  }

  &.right {
    bottom: 0;
    right: 0;
  }

  &.left,
  &.right {
    background-position-x: right;
  }

  &.left.pressed,
  &.right.pressed {
    background-position-x: left;
  }
`
