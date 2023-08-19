import React from "react";

import { Link } from "react-router-dom";

const ProductSorvete = ({ product }) => {
  return (
    <>
      <main className="flex min-h-screen w-full  justify-start hover:cursor-pointer py-5 px-3.5">
        <div
          key={product._id}
          className=" bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg "
        >
          <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm px-4 py-1 inline-block mb-4">
            Copo de Sorvete
          </span>
          <img
            className="w-full mx-auto transform transition duration-300 hover:scale-105"
            src={product.image}
            alt={product.title}
          />
          <div className="flex flex-col items-center my-3 text-center gap-2">
            <h1 className="text-gray-900 text-lg">{product.title}</h1>
            <p className="text-gray-500 text-sm">{product.description}</p>
            <h2 className="text-gray-900 text-2xl font-bold">
              {product.price}
            </h2>
            <button className="bg-primary text-white px-8 py-2 rounded-full transition duration-700 hover:scale-105">
              <Link to="/comprarAgora">Comprar Agora</Link>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductSorvete;
