import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Bug from '../../components/Bug';
import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import SantaClaus from '../../components/SantaClaus';
import useWindowSize from '../../Hooks/useWindowSize';
import apiGithub from '../../services/apiGithub';

import { Container, Title } from './styles';

interface LocationState {
  user: {
    login: string;
    avatar_url: string;
  };
}

interface FollowersProps {
  id: number;
  login: string;
  avatar_url: string;
  coordsXA: number;
  coordsXB: number;
  coordsYA: number;
  coordsYB: number;
  speed: number;
  rotate: number;
}

interface CoordinateProps {
  coordsXA: number;
  coordsXB: number;
  coordsYA: number;
  coordsYB: number;
  speed: number;
  rotate: number;
}

const Home: React.FC = () => {
  const [width, height] = useWindowSize();
  const [loading, setLoading] = useState(false);
  const location = useLocation<LocationState>();
  const [followers, setFollowers] = useState<FollowersProps[]>([]);

  const { user } = location.state;

  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  useEffect(() => {
    async function handleFollowers() {
      try {
        setLoading(true);
        const response = await apiGithub.get(`/users/${user.login}/followers`);
        setLoading(false);
        const { data } = response;

        data.map((add: CoordinateProps) => {
          const addProps = () => {
            add.coordsXA = randomNumber(80, width - 100);
            add.coordsXB = randomNumber(80, width - 100);
            add.coordsYA = randomNumber(80, height - 100);
            add.coordsYB = randomNumber(80, height - 100);
            add.speed = randomNumber(5, 30);
            add.rotate = randomNumber(45, 90);
          };
          return addProps();
        });

        setFollowers(data);
      } catch (error) {
        setLoading(false);
        toast.error('não foi possível carregar os seguidores.');
      }
    }

    handleFollowers();
  }, [user, width, height]);

  return (
    <Container>
      <Title>
        <h1>Merry Christmas</h1>

        {loading && (
          <>
            <span>Devs estão em processo de metamorfose!</span>
            <Loader type="TailSpin" color="#00BFFF" height={68} width={68} />
          </>
        )}
      </Title>

      {!loading && (
        <SantaClaus
          rotateContainer={{
            speed: 5,
            toAxisZ: -90,
            fromAxisZ: 15,
          }}
          rotateHead={{
            speed: 4,
            toAxisZ: -90,
            fromAxisZ: 15,
          }}
        >
          {user && (
            <span>
              <img src={user.avatar_url} alt={user.login} />
            </span>
          )}
        </SantaClaus>
      )}

      {followers.length !== 0 &&
        !loading &&
        followers.map((follower, index) => (
          <div key={follower.id}>
            {index <= 20 && (
              <Bug
                avatarUrl={follower.avatar_url}
                coords={{
                  xA: follower.coordsXA,
                  xB: follower.coordsXB,
                  yA: follower.coordsYA,
                  yB: follower.coordsYB,
                }}
                speed={follower.speed}
                rotate={{
                  x: follower.rotate,
                }}
              />
            )}
          </div>
        ))}
    </Container>
  );
};

export default Home;
