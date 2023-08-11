import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("formulario enviado");
    setIsRegistered(true);
    setTimeout(() => {
      setIsRegistered(false);
      navigate("/login");
    }, 3000);
    setUsername("");
    setSenha("");
    setEmail("");
    setEndereco("");
    setTelefone("");
  };

  return (
    <section className="flex justify-center items-center h-screen m-10">
      <div className="w-full max-w-xs ">
        
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
              value={username}
              onChange={(event) => setUsername(event.target.value)}
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
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*****"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              required 
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Av. Pedro de Lara, n°1000"
              value={endereco}
              onChange={(event) => setEndereco(event.target.value)}
              required 
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="telefone"
            >
              Telefone:
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="telefone"
              type="telefone"
              placeholder="(99) 99999-9999"
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
              required 
            />
          </div>
          <button
            className="bg-pink-300 hover:bg-green-500 w-full py-2 px-4 rounded text-white"
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
    </section>
  );
};

export default Register;
