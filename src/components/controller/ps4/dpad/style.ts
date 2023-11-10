import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 180px;
  left: 90.5px;
  width: 127px;
  height: 126px;
`;

export const Dpad = styled.div`
  position: absolute;

  &.white {
    background-image: url("/ps4/white/dpad.svg");
  }
  
  &.black {
    background-image: url("/ps4/black/dpad.svg");
  }
  
  &.up,
  &.down {
    width: 36px;
    height: 53px;
  }
  
  &.left,
  &.right {
    width: 53px;
    height: 37px;
  }
  
  &.up {
    background-position: 141px 53px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  
  &.down {
    background-position: 179px 53px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  
  &.left {
    background-position: 105px 53px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  
  &.right {
    background-position: 53px 53px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;
