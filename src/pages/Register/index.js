import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import sorvetBackground from '../../assets/copo-sorvete1.png';

const Register = () => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('formulario enviado');
    setIsRegistered(true);
    setTimeout(() => {
      setIsRegistered(false);
      navigate('/login');
    }, 3000);
    setUsername('');
    setSenha('');
    setEmail('');
    setEndereco('');
  };

  return (
    <main className="h-screen w-full  banner bg-gray-100 flex justify-center items-center ">
      <div className="w-full sm:max-w-xs  rounded-lg  m-6">
        <img
          className="w-20 mx-auto mb-4"
          src={sorvetBackground}
          alt="logo tipo da sorveteria"
        />
        <form
          className="bg-red-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Nome de usuário:
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Senha:
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
              id="password"
              type="password"
              placeholder="*****"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
              id="email"
              type="email"
              placeholder="joão@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Endereço:
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
              id="address"
              type="text"
              placeholder="Av. Pedro de Lara, n°1000"
              value={endereco}
              onChange={(event) => setEndereco(event.target.value)}
              required
            />
          </div>

          <button
            className="bg-primary hover:bg-pink-300 w-full focus:ring-4 mt-6 transition duration-300 py-3 px-4 rounded text-white"
            type="submit"
          >
            Registrar
          </button>
        </form>
        {isRegistered && (
          <div className="bg-green-200 text-green-800 p-2 mb-4 text-center rounded">
            Cadastro realizado com sucesso!
          </div>
        )}
      </div>
    </main>
  );
};

export default Register;
