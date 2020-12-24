import styled from 'styled-components';
import snow from '../assets/snow.png';
import snow2 from '../assets/snow2.png';
import snow3 from '../assets/snow3.png';

export const Title = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 30rem;
  height: 15rem;
  position: absolute;
  left: 50%;
  margin-left: -15rem;
  margin-top: 3rem;
  z-index: 40;

  @keyframes glow {
    from {
      text-shadow: 0 0 5px #fff, 0 0 5px #fff;
    }
    to {
      text-shadow: 0 0 10px #fff, 0 0 20px #fd0;
    }
  }

  h1 {
    font-size: 48px;
    font-family: 'Amatic SC', cursive;
    animation: glow 1s ease-in-out infinite alternate;
  }
  span {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
  }
`;

export const Container = styled.div`
  @keyframes snow {
    0% {
      background-position: 0px 0px, 0px 0px, 0px 0px;
    }
    50% {
      background-position: 500px 500px, 100px 200px, -100px 150px;
    }
    100% {
      background-position: 500px 1000px, 200px 400px, -100px 300px;
    }
  }

  width: 100vw;
  height: 100vh;
  display: flex;
  /* background-image: url(${snow}), url(${snow2}), url(${snow3});
  animation: snow 10s linear infinite; */
  overflow: hidden;

  span img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
