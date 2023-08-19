import React from 'react';
import { createContext } from 'react';

import useAuth from '../hooks/useAuth';

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const { userLogged, loading, loginUser, logoutUser } = useAuth();

  const currentUser = localStorage.getItem('useInfo');

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <AuthContext.Provider
      value={{ currentUser, userLogged, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
