import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
`;

/* Base */

export const Base = styled.div`
  width: 806px;
  height: 599px;

  &.white {
    background-image: url("/ps4/white/base.svg");
  }
  
  &.black {
    background-image: url("/ps4/black/base.svg");
  }
`;
