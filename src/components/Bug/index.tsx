import React from 'react';
import { Container } from './styles';

import wing1 from '../../pages/assets/wing1.png';
import wing2 from '../../pages/assets/wing2.png';
import wing3 from '../../pages/assets/wing3.png';
import wing4 from '../../pages/assets/wing4.png';

export interface BugProps {
  rotate: {
    x: number;
  };
  coords: {
    xA: number;
    xB: number;
    yA: number;
    yB: number;
  };
  avatarUrl: string;
  speed: number;
}

const Bug: React.FC<BugProps> = ({ rotate, coords, avatarUrl, speed }) => {
  return (
    <Container
      rotate={rotate}
      coords={coords}
      speed={speed}
      avatarUrl={avatarUrl}
    >
      <main>
        <div>
          <img src={wing2} alt="wing2" id="wing2" />
          <img src={wing1} alt="wing1" id="wing1" />
          <img src={wing3} alt="wing3" id="wing3" />
          <img src={wing4} alt="wing4" id="wing4" />
        </div>
      </main>
    </Container>
  );
};

export default Bug;
