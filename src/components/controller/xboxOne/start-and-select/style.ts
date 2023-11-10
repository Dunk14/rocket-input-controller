import styled, { css } from "styled-components";

export const StartAndSelect = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 50.1%;
  width: 158px;
  top: 255px;
  transform: translate(-50%, 0px);
`;

const whiteImage = css`
  background-image: url("/xboxOne/start.svg");
`;

const blackImage = css`
  background-image: url("/xboxOne/start.svg");
`;

const commonStyle = css`
  width: 50px;
  height: 50px;
  scale: 0.78;
  background-repeat: no-repeat;
  background-size: cover;

  &.white {
    ${whiteImage}
  }

  &.black {
    ${blackImage}
  }
`;

export const Start = styled.div`
  ${commonStyle}
`;

export const Select = styled.div`
  background-position-x: right;
  ${commonStyle}
`;
