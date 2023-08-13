import React, { useState } from "react";
import { useNavigate } from "react-router";
import sorvetBackground from "../../assets/copo-sorvete1.png";

const Login = () => {
  const [nomeText, setNomeText] = useState("");
  const [senhaText, setSenhaText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nomeText.trim() === "" || senhaText.trim() === "") {
      return;
    }
    navigate("/", { state: { nomes: [nomeText] } });
  };

  const handleChangeNome = (event) => {
    setNomeText(event.target.value);
  };

  const handleChangeSenha = (event) => {
    setSenhaText(event.target.value);
  };

  return (
    <main className="h-screen w-full  banner">
      <div className="flex flex-col items-center pt-20 h-screen">
        <img className="w-52" src={sorvetBackground} alt="logo tipo da sorveteria" />
        <form
          className="bg-red-200 shadow-lg rounded-lg w-96 px-4 py-2"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
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
              value={nomeText}
              onChange={handleChangeNome}
              required
            />
          </div>

          <div className="mb-6">
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
              value={senhaText}
              onChange={handleChangeSenha}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-primary hover:bg-pink-300 w-full focus:ring-4 mt-6 transition duration-300 py-3 px-4 rounded text-white"
          >
            Entrar
          </button>

          <p className="text-base text-primary text-center my-6 hover:underline">Precisa de uma conta?</p>
        </form>
      </div>
    </main>
  );
};

export default Login;
