import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useAuth = () => {
  const [userLogged, setUserLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

const location = useLocation();
console.log('location',location)

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');

    if (userInfo) {
      setUserLogged(true);
    }

    setLoading(false);
  }, []);

  const loginUser = async (inputValues) => {
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputValues),
      });

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem('userInfo', JSON.stringify(data));

        localStorage.setItem('email', data.email);
        localStorage.setItem('token', data.token);

        navigate('/');
        setUserLogged(true);
        setError(null);
      } else {
        setError('Email ou senha incorretos');
      }
    } catch (error) {
      console.error('Ocorreu um erro:', error);
      setError('Ocorreu um erro ao fazer login');
    }
  };

  const logoutUser = () => {
    setUserLogged(false);
    localStorage.clear();
    navigate('/login');
  };

  return { userLogged, loading, error, loginUser, logoutUser };
};

export default useAuth;
