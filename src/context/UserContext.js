"use client";
import React, { useState, useEffect, useContext, createContext } from "react";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [refreshtoken, setRefreshtoken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    const storedRefreshToken = localStorage.getItem("refreshToken");

    if (storedUser && storedToken && storedRefreshToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      setRefreshtoken(storedRefreshToken);
    }
    setLoading(false);
  }, []);

  const login = (userData, token, refreshToken) => {
    try {
      if (userData && token && refreshToken) {
        setUser(userData);
        setToken(token);
        setRefreshtoken(refreshToken);

        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
        console.log("User info stored in localStorage via context API");
      }
    } catch (error) {
      console.error("Something Went Wrong", error);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setRefreshtoken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken"); 
  };

  return (
    <UserContext.Provider value={{ user, token, refreshtoken, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};
