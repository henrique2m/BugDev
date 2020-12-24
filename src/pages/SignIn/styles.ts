import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    max-width: 700px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div header {
    margin-bottom: 4.8rem;
  }

  div header img {
    width: 30rem;
  }

  div main form {
    width: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  div main form input {
    height: 3.2rem;
    background: none;
    border-bottom: 1px solid #fff;
    padding-left: 10px;
    margin-left: 10px;
  }
  div main form button {
    display: flex;
    justify-content: space-around;
    align-items: center;

    background: #fff;
    margin-left: 10px;
    cursor: pointer;
    transition: opacity 0.2s;
    border-radius: 3px;
    padding: 0 5px;

    &:hover {
      opacity: 0.8;
    }
  }

  div footer {
    margin-top: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 30rem;
    height: 10rem;
  }

  div footer p {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
  }
`;
