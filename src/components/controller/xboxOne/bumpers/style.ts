import styled from "styled-components";

export const Bumpers = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 50%;
  width: 536px;
  top: 128px;
  transform: translate(-50%, 0px);
`;

export const Bumper = styled.div`
  background-image: url(/xboxOne/bumper.svg);
  width: 171px;
  height: 62px;

  &.right {
    transform: scaleX(-1);
  }
`;
