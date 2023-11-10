import styled from "styled-components";

export const Sticks = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 350px;
  top: 309px;
  left: 50%;
  transform: translate(-50%, 0px);
`;

export const Stick = styled.div`
  /* A third of images width */
  width: 94px;
  height: 94px;
  transition: transform 0.15s;

  &.white {
    background-image: url("/ps4/white/sticks.svg");
  }
  
  &.black {
    background-image: url("/ps4/black/sticks.svg");
  }
  
  &.left,
  &.right {
    background-position-x: left;
  }
  
  &.left.pressed {
    background-position-x: center;
  }
  
  &.right.pressed {
    background-position-x: right;
  }
`;
