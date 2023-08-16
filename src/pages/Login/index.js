import React, { useContext, useState } from 'react';
import sorvetBackground from '../../assets/copo-sorvete1.png';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    senha: '',
  });

  const [showErrorModal, setShowErrorModal] = useState(false);
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

    const loginSuccess = await loginUser(inputValues);

    if (!loginSuccess) {
      setShowErrorModal(true);
    }
  };

  return (
    <main className="h-screen w-full  banner bg-gray-100 flex justify-center items-center ">
      <div className="w-full sm:max-w-xs  rounded-lg  m-3">
        <img
          className="w-20 mx-auto mb-4"
          src={sorvetBackground}
          alt="logo tipo da sorveteria"
        />
        <form
          className="bg-red-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 "
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
              onChange={handleChangeValues}
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

      {showErrorModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <p className="text-red-600 text-center">
              ATENÇÃO! 
              
            </p>
            <p className="text-center">Email ou senha incorretos. Por favor, tente novamente.</p>
            <button
              onClick={() => setShowErrorModal(false)}
              className="block mx-auto mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-pink-300"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Login;
