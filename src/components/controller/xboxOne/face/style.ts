import styled from "styled-components";

export const Faces = styled.div`
  display: flex;
  position: absolute;
  top: 205px;
  right: 110px;
  width: 147px;
  height: 149px;
`;

export const Face = styled.div`
  position: absolute;
  background-image: url("/xboxOne/face.svg");

  &.up,
  &.down,
  &.left,
  &.right {
    width: 48px;
    height: 48px;
  }
  
  &.up {
    background-position: 48px 48px;
    top: 0;
    left: 50%;
    margin-left: -1px;
    transform: translateX(-50%);
  }
  
  &.down {
    background-position: 196px 48px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  
  &.left {
    background-position: 98px 48px;
    left: 0;
    top: 50%;
    margin-left: -2px;
    width: 50px;
    transform: translateY(-50%);
  }
  
  &.right {
    background-position: -48px 48px;
    right: 0;
    top: 50%;
    margin-right: -2px;
    width: 50px;
    transform: translateY(-50%);
  }
`;
