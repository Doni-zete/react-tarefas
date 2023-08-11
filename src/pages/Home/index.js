import { useLocation } from "react-router-dom";
import "./style.css";
import ProductList from "./../../components/ProductList/index";
const Home = () => {
  const { state } = useLocation();
  const nomes = state ? state.nomes : [];

  return (
    <>
      <div className="flex justify-center items-center  background-nome ">
        <h2 className=" text-3xl  lg:text-5xl font-semibold text-red-400  mb-4">
          Bem vindo
        </h2>
        </div>

        <div className="flex justify-center items-center  background-nome">
          {nomes.map((nome, index) => (
            <p
              key={index}
              className=" text-gray-700  md:text-5xl font-bold mb-8"
            >
              {nome}
            </p>
          ))}
        </div>
      
      <section className="header-banner w-full">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className=" text-3xl md:text-5xl lg:text-5xl font-semibold text-red-400">
          Donilicia Sorvetes: Transformando momentos em doçura
          </h1>
        </div>
      </section>
      <ProductList/>
      
    </>
  );
};

export default Home;
