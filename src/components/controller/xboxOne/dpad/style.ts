import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  scale: 1.04;
  top: 347px;
  left: 223px;
  width: 110px;
  height: 110px;
`;

export const Dpad = styled.div`
  position: absolute;

  &.white {
    background-image: url("/xboxOne/dpad.svg");
  }
  
  &.black {
    background-image: url("/xboxOne/dpad.svg");
  }
  
  &.up,
  &.down {
    width: 35px;
    height: 57px;
  }
  
  &.left,
  &.right {
    width: 57px;
    height: 35px;
  }
  
  &.up {
    background-position: 34px 128px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  
  &.down {
    background-position: 71px 0px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  
  &.left {
    background-position: 0px 34px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  
  &.right {
    background-position: 0px 71px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;
