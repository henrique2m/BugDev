import styled, { keyframes } from 'styled-components';
import SantaClaus from '../../pages/assets/SantaClaus.png';

import { RotateProps } from '.';

interface AnimationProps {
  rotate: RotateProps;
}

const rotateZ = (toAxisZ: number, fromAxisZ: number) =>
  keyframes`
    to {
      transform: rotateZ(${toAxisZ}deg);
    }
    from { 
      transform: rotateZ(${fromAxisZ}deg); 
    }`;

export const Container = styled.div<AnimationProps>`
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${rotateZ(-15, 10)} ${(props) => props.rotate.speed}s ease infinite
    alternate;
  transform-origin: center bottom;
  z-index: 10;
`;

export const Head = styled.header<AnimationProps>`
  width: 15rem;
  height: 15rem;
  background: '#000';
  border: 1px solid #fff;
  border-radius: 50%;

  animation: ${rotateZ(-10, 10)} ${(props) => props.rotate.speed}s ease infinite
    alternate;
  transform-origin: center bottom;
`;

export const Body = styled.main`
  width: 30rem;
  height: 30rem;
  background: url(${SantaClaus}) no-repeat;
  background-size: cover;
  background: '#000';
  border: 1px solid #fff;
  border-radius: 50%;
`;
