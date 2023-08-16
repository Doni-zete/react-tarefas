import React, { useContext, useState } from 'react';
import sorvetBackground from '../../assets/copo-sorvete1.png';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    senha: '',
  });

  const { loginUser } = useContext(AuthContext);

  const handleChangeValues = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
    console.log(inputValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    loginUser(inputValues);
  };

  return (
    <main className="h-screen w-full  banner">
      <div className="flex flex-col items-center h-screen">
        <img
          className="w-40"
          src={sorvetBackground}
          alt="logo tipo da sorveteria"
        />
        <form
          className="bg-red-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
              id="email"
              type="text"
              placeholder="email"
              name="email"
              onChange={handleChangeValues} //onchange e dispara quando tem mudança no input
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="senha"
            >
              Senha:
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
              id="senha"
              type="password"
              placeholder="*****"
              name="senha"
              onChange={handleChangeValues}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-primary hover:bg-pink-300 w-full focus:ring-4 mt-6 transition duration-300 py-3 px-4 rounded text-white"
          >
            Entrar
          </button>

          <p className="text-base text-primary text-center my-6 hover:underline">
            Precisa de uma conta?
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
