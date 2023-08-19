import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sorvetBackground from '../../assets/copo-sorvete1.png';
import './style.css';
import { AuthContext } from '../../context/AuthContext';
import { BsCart } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';

const NavMenu = () => {
  const [categoriaTab, setCategoriaTab] = useState('Home');
  const [categoriaNav, setCategoriaNav] = useState('Login');

  const { userLogged, logoutUser } = useContext(AuthContext);

  const [userEmail, setUserEmail] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    if (!userEmail && !token) {
      setUserEmail(localStorage.getItem('email'));
      setToken(localStorage.getItem('token'));
    }
  }, [token, userEmail]);
  // const navigate = useNavigate();
  //
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
          <div className="flex-col">
            <h1 className="text-center text-2xl font-semibold text-white">
              Donilicia Sorvetes
            </h1>

          </div>
        </div>

        {userLogged ? (
          <div className="hidden sm:flex items-center justify-center space-x-6">
            <button
              className={
                categoriaTab === 'Home'
                  ? 'active-menu-tab bg-primary font-bold'
                  : 'menu-tab'
              }
            >
              <Link to="/" onClick={() => setCategoriaTab('Home')}>
                Home
              </Link>
            </button>
            <button
              className={
                categoriaTab === 'About'
                  ? 'active-menu-tab bg-primary font-bold'
                  : 'menu-tab'
              }
              font-bold
            >
              <Link to="/about" onClick={() => setCategoriaTab('About')}>
                About
              </Link>
            </button>

            <div className="relative  cursor-pointer">
              <span className="bg-primary w-5 h-5 rounded-full p-1 flex items-center justify-center text-white absolute -right-2 -top-2">
                2
              </span>
              <BsCart className="w-8 h-8 cursor-pointer my-3" />
            </div>
            <MdLogout className="w-8 h-8 cursor-pointer" onClick={logoutUser} />
            <p className="text-gray-700 text-xs font-bold ">{userEmail}</p>
            
          </div>
        ) : (
          <div className="hidden sm:flex items-center justify-center space-x-6">
            <button
              className={
                categoriaNav === 'Login'
                  ? 'active-menu-tab bg-primary'
                  : 'menu-tab'
              }
            >
              <Link to="/login" onClick={() => setCategoriaNav('Login')}>
                Login
              </Link>
            </button>

            <button
              className={
                categoriaNav === 'Register'
                  ? 'active-menu-tab bg-primary'
                  : 'menu-tab'
              }
            >
              <Link to="/register" onClick={() => setCategoriaNav('Register')}>
                Register
              </Link>
            </button>

            
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavMenu;
