import React from 'react';
import { Container, Head, Body } from './styles';

export interface RotateProps {
  speed: number;
  toAxisZ: number;
  fromAxisZ: number;
}

interface SantaClausAnimationProps {
  rotateContainer: RotateProps;
  rotateHead: RotateProps;
}

const SantaClaus: React.FC<SantaClausAnimationProps> = ({
  rotateContainer,
  rotateHead,
  children,
}) => {
  return (
    <Container rotate={rotateContainer}>
      <Head rotate={rotateHead}>{children}</Head>
      <Body />
    </Container>
  );
};

export default SantaClaus;
