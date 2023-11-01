/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

import { logIn, logOut, onUserStateChange } from "../api/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
}
