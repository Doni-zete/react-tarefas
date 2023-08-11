import React from "react";
import image1 from "../../assets/copo-sorvete1.png";
import image2 from "../../assets/copo-sorvete2.png";
import image3 from "../../assets/copo-sorvete3.png";
import image4 from "../../assets/copo-sorvete4.png";
import image5 from "../../assets/copo-sorvete5.png";
import image6 from "../../assets/copo-sorvete6.png";
import image7 from "../../assets/copo-sorvete7.png";
import image8 from "../../assets/copo-sorvete8.png";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    image: image1,
    title: "Copo de Sorvete com Morango",
    description: `Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito
    paradis? Toma um mé que o mundo vai girarzis! Sapien in monti palavris
    qui num significa nadis i pareci latim. Mé faiz elementum girarzis,
    nisi eros vermeio. Per aumento de cachacis, eu reclamis.`,
    price: "R$14,99",
  },
  {
    id: 2,
    image: image2,
    title: "Copo de Sorvete de Amendoim",
    description: `Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito
    paradis? Toma um mé que o mundo vai girarzis! Sapien in monti palavris
    qui num significa nadis i pareci latim. Mé faiz elementum girarzis,
    nisi eros vermeio. Per aumento de cachacis, eu reclamis.`,
    price: "R$11,80",
  },

  {
    id: 3,
    image: image3,
    title: "Copo de Sorvete com Açaí",
    description: `Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito
    paradis? Toma um mé que o mundo vai girarzis! Sapien in monti palavris
    qui num significa nadis i pareci latim. Mé faiz elementum girarzis,
    nisi eros vermeio. Per aumento de cachacis, eu reclamis.`,
    price: "R$12,99",
  },
  {
    id: 4,
    image: image4,
    title: "Copo de Sorvete de Açaí",
    description: `Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito
    paradis? Toma um mé que o mundo vai girarzis! Sapien in monti palavris
    qui num significa nadis i pareci latim. Mé faiz elementum girarzis,
    nisi eros vermeio. Per aumento de cachacis, eu reclamis.`,
    price: "R$9,99",
  },

  {
    id: 5,
    image: image5,
    title: "Copo de Sorvete com Morango",
    description: `Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito
    paradis? Toma um mé que o mundo vai girarzis! Sapien in monti palavris
    qui num significa nadis i pareci latim. Mé faiz elementum girarzis,
    nisi eros vermeio. Per aumento de cachacis, eu reclamis.`,
    price: "R$5,99",
  },
  {
    id: 6,
    image: image6,
    title: "Copo de Sorvete de Chocolate",
    description: `Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito
    paradis? Toma um mé que o mundo vai girarzis! Sapien in monti palavris
    qui num significa nadis i pareci latim. Mé faiz elementum girarzis,
    nisi eros vermeio. Per aumento de cachacis, eu reclamis.`,
    price: "R$50.000,00",
  },

  {
    id: 7,
    image: image7,
    title: "Copo de Sorvete Com Morango",
    description: `Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito
    paradis? Toma um mé que o mundo vai girarzis! Sapien in monti palavris
    qui num significa nadis i pareci latim. Mé faiz elementum girarzis,
    nisi eros vermeio. Per aumento de cachacis, eu reclamis.`,
    price: "R$4,99",
  },

  {
    id: 8,
    image: image8,
    title: "Copo de Sorvete Morango com Açaí",
    description: `Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito
    paradis? Toma um mé que o mundo vai girarzis! Sapien in monti palavris
    qui num significa nadis i pareci latim. Mé faiz elementum girarzis,
    nisi eros vermeio. Per aumento de cachacis, eu reclamis.`,
    price: "R$10,99",
  },
];

const ProductSorvete = () => {
  return (
    <>
      {products.map((product) => (
        <div className="flex  justify-start hover:cursor-pointer py-3 px-3.5">
          <div
            key={product.id}
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
        </div>
      ))}
    </>
  );
};

export default ProductSorvete;
