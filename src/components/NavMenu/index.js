import React, { useState } from "react";
import { Link } from "react-router-dom";
import sorvetBackground from "../../assets/copo-sorvete1.png";
import './style.css'

const NavMenu = () => {
  const [categoriaTab, setCategoriaTab] = useState("Home");
  return (
    <header className="bg-tranparent z-50 w-full bg-nav py-1 text-center text-white">
      <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
        <div className="flex flex-grow items-center">

        <Link to="/">
        <img
            src={sorvetBackground}
            alt="logo"
            className="w-36 cursor-pointer"
          />
       
      </Link>
         

          <h1 className="text-center text-2xl font-semibold text-white">
            Donilicia Sorvetes
          </h1>
        </div>

        <div className="flex items-center justify-center space-x-6">
          <button
            className={
              categoriaTab === "Home"
                ? "active-menu-tab bg-primary"
                : "menu-tab"
            }
          >
            <Link to="/" onClick={() => setCategoriaTab("Home")}>
              Home
            </Link>
          </button>
          <button
            className={
              categoriaTab === "Login"
                ? "active-menu-tab bg-primary"
                : "menu-tab"
            }
          >
            <Link to="/login" onClick={() => setCategoriaTab("Login")}>
              Login
            </Link>
          </button>
          <button
            className={
              categoriaTab === "Register"
                ? "active-menu-tab bg-primary"
                : "menu-tab"
            }
          >
            <Link to="/register" onClick={() => setCategoriaTab("Register")}>
              Register
            </Link>
          </button>
          <button
            className={
              categoriaTab === "About"
                ? "active-menu-tab bg-primary"
                : "menu-tab"
            }
          >
            <Link to="/about" onClick={() => setCategoriaTab("About")}>
            About
            </Link>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavMenu;
