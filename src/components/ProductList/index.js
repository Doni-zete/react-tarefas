import React, { useState } from "react";
import ProductSorvete from "../ProductSorvete";
// import ProductPicole from "../ProductPicole";
import { Link } from "react-router-dom";
// import ProductPicole from "../NotFound";

const ProductList = () => {
  const [categoriaTab, setCategoriaTab] = useState("Copo de Sorvete");

  return (
    <section className="my-12 max-w-screen-xl mx-auto px-3">
      <div className="flex items-center justify-center space-x-6">
        <p
          className={
            categoriaTab === "Copo de Sorvete"
              ? "active-menu-tab bg-primary"
              : "menu-tab"
          }
          onClick={() => setCategoriaTab("Copo de Sorvete")}
        >
          Copo de Sorvete
        </p>
        <button
          className={
            categoriaTab === "Picole"
              ? "active-menu-tab bg-primary"
              : "menu-tab"
          }
        >
          <Link to="/picole" onClick={() => setCategoriaTab("Picole")}>
            Picole
          </Link>
        </button>
        <p
          className={
            categoriaTab === "Modelos novos"
              ? "active-menu-tab bg-primary"
              : "menu-tab"
          }
          onClick={() => setCategoriaTab("Modelos novos")}
        >
          <Link
            to="/poteSorvete"
            onClick={() => setCategoriaTab("Pote de Sorvete")}
          >
            Pote de Sorvete
          </Link>
      
        </p>
      </div>

      <div className="grid  grid-cols-4">
        {/* {categoriaTab === "Copo de Sorvete" && } */}
        <ProductSorvete />
        {/* <ProductPicole /> */}
      </div>
    </section>
  );
};

export default ProductList;
