import styled from "styled-components";

export const Triggers = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 588px;
  left: 50%;
  transform: translate(-50%, 0px);
`;

export const Trigger = styled.div`
  /* Half of image */
  width: 100px;
  height: 91px;

  &.white {
    background-image: url("/ps4/white/triggers.svg");
  }
  
  &.black {
    background-image: url("/ps4/black/triggers.svg");
  }
  
  &.left {
    background-position-x: left;
  }
  
  &.right {
    background-position-x: right;
  }
`;
