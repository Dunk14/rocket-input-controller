import styled from "styled-components";

export const Triggers = styled.div` 
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 448px;
  left: 50%;
  transform: translate(-50%, 0px);
`;

export const Trigger = styled.div`
  /* Half of image */
  width: 89px;
  height: 122px;

  &.white {
    background-image: url("/xboxOne/triggers.svg");
  }

  &.black {
    background-image: url("/xboxOne/triggers.svg");
  }

  &.left {
    background-position-x: left;
  }

  &.right {
    transform: rotateY(180deg);
  }
`;
