import React, { useState } from "react";
import { useNavigate } from "react-router";

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
    <section className="flex justify-center items-center h-screen m-10">
      <div className="w-full max-w-xs">
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
            className="bg-pink-300 hover:bg-green-500 w-full py-2 px-4 rounded text-white"
          >
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
