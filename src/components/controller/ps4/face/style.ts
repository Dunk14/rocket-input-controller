import styled from 'styled-components'

export const Faces = styled.div`
  display: flex;
  position: absolute;
  top: 160px;
  right: 70px;
  width: 170px;
  height: 170px;
`

export const Face = styled.div`
  position: absolute;
  background-image: url('/ps4/white/face.svg');

  &.up,
  &.down,
  &.left,
  &.right {
    width: 56px;
    height: 56px;
  }

  &.up {
    background-position: 56px 56px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &.down {
    background-position: 224px 56px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &.left {
    background-position: 112px 56px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &.right {
    background-position: -56px 56px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`
