import React from 'react';
import './style.css';
import ProductList from './../../components/ProductList/index';

const Home = () => {


  return (
    <>
      <div className="flex-col text-center justify-center items-center background-nome">
        <h2 className="text-3xl lg:text-5xl font-semibold text-red-400 ">
          Bem vindo
        </h2>
        
        
      </div>

      <section className="header-banner w-full">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className=" text-3xl md:text-5xl  text-center lg:text-5xl font-semibold text-red-400">
            Donilicia Sorvetes: Transformando momentos em doçura
          </h1>
        </div>
      </section>
      <ProductList />
    </>
  );
};

export default Home;
