import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import sorvetBackground from '../../assets/copo-sorvete1.png';
import './style.css';
import { AuthContext } from '../../context/AuthContext';
import { BsCart } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';

const NavMenu = () => {
  const { userLogged, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="bg-transparent z-50 w-full bg-nav py-1 text-center text-white">
      <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
        <div className="flex items-center flex-grow">
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

        {userLogged ? (
          <div className="flex items-center justify-end space-x-4">
            <div className="relative flex cursor-pointer">
              <span className="bg-primary w-5 h-5 rounded-full p-1 flex items-center justify-center text-white absolute -right-2 -top-2">
                2
              </span>
              <BsCart className="w-8 h-8 cursor-pointer" />
            </div>
            <img src="" alt="" />
            <p className="hidden sm:inline text-gray-700">Bem vindo,</p>
            <MdLogout className="w-8 h-8 cursor-pointer" onClick={logoutUser} />
          </div>
        ) : (
          <div className="hidden sm:flex items-center justify-center space-x-6">
            <button>Home</button>
            <button onClick={() => navigate('/login')}>Login</button>
            <button>Register</button>
            <button>About</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavMenu;



