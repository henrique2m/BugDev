import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { AiFillGithub, AiOutlineSend } from 'react-icons/ai';
import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import { Container } from './styles';
import logo from '../assets/bugdev.png';
import apiGithub from '../../services/apiGithub';

export default function SignIn() {
  const history = useHistory();
  const [login, setLogin] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    try {
      if (login === '') {
        toast.info('Informe um Username.');
        return;
      }

      setLoading(true);

      const response = await apiGithub.get(`users/${login}`);

      setLoading(false);

      history.push({
        pathname: '/home',
        state: { user: response.data },
      });
    } catch (error) {
      setLoading(false);
      toast.error('Não foi possível localizar o usuário.');
    }
  }
  return (
    <Container>
      <div>
        <header>
          <img src={logo} alt="Logo DevsTree" />
        </header>

        <main>
          <form onSubmit={handleSignIn} method="POST">
            <span>
              <AiFillGithub size={32} color="#fff" />
            </span>
            <input
              type="text"
              name="login"
              onChange={(event) => {
                setLogin(event.target.value);
              }}
              placeholder="Username"
            />
            <button type="submit">
              {loading ? (
                <Loader type="Puff" color="#00BFFF" height={32} width={32} />
              ) : (
                <AiOutlineSend size={32} color="#292929" />
              )}
            </button>
          </form>
        </main>

        <footer>
          <p>Devs em metamorfose.</p>
        </footer>
      </div>
    </Container>
  );
}
