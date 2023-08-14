import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import sorvetBackground from "../../assets/copo-sorvete1.png";
import "./style.css";
import { AuthContext } from "../../context/AuthContext";

const NavMenu = () => {
  const userLogged = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(userLogged);

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
          <button>Home</button>
          <button onClick={() => navigate("/login")}>Login</button>
          <button>Register</button>
          <button>About</button>
        </div>
      </nav>
    </header>
  );
};

export default NavMenu;
