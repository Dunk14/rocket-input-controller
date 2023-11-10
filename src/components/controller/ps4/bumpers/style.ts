import styled from "styled-components";

export const Bumpers = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 50%;
  width: 588px;
  top: 95px;
  transform: translate(-50%, 0px);
`;

export const Bumper = styled.div`
  background-image: url("/ps4/white/bumper.svg");
  width: 99px;
  height: 22px;

  &.right {
    transform: scaleX(-1);
  }
`;
