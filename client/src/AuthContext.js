import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  //   const localUser = JSON.parse(localStorage.getItem("user"));
  const [currentUser, setCurrentUser] = useState(null);
  const login = (inputs) => {
    axios
      .post("http://localhost:8000/api/login", inputs, {
        withCredentials: true,
      })
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
