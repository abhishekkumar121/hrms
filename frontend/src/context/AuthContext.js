// import React, { createContext, useState, useEffect } from "react";
// import api, { setAuthToken } from "../services/api"; // Import your API service and setAuthToken function

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setAuthToken(token); // Set the token in axios headers
//     if (token) {
//       try {
//         const storedUser = JSON.parse(localStorage.getItem("user"));
//         setUser(storedUser);
//         setIsAuthenticated(true);
//       } catch (error) {
//         console.error("Error parsing user from local storage:", error);
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//         setAuthToken(null);
//         setIsAuthenticated(false);
//         setUser(null);
//       }
//     }
//     setLoading(false);
//   }, []);

//   const login = async (data) => {
//     try {
//       const res = await api.post("/auth/login", data);
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));
//       setAuthToken(res.data.token);
//       setUser(res.data.user);
//       setIsAuthenticated(true);
//       return res.data; // Return the data from the login response
//     } catch (err) {
//       console.error("Login Error:", err);
//       throw err; // Re-throw the error to be handled by the component
//     }
//   };

//   const logout = async () => {
//     try {
//       await api.post("/auth/logout");
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//       setAuthToken(null);
//       setUser(null);
//       setIsAuthenticated(false);
//     } catch (error) {
//       console.error("Error during logout:", error);
//       // Handle logout error if needed
//     }
//   };

//   const value = { isAuthenticated, user, loading, login, logout };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export { AuthContext, AuthProvider };
import React, { createContext, useState, useEffect } from "react";
import api, { setAuthToken } from "../services/api"; // Import your API service and setAuthToken function

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthToken(token); // Set the token in axios headers
    if (token) {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setUser(storedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error parsing user from local storage:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setAuthToken(null);
        setIsAuthenticated(false);
        setUser(null);
      }
    }
    setLoading(false);
  }, []);

  const login = async (data) => {
    try {
      const res = await api.post("/auth/login", data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setAuthToken(res.data.token);
      setUser(res.data.user);
      setIsAuthenticated(true);
      return res.data; // Return the data from the login response
    } catch (err) {
      console.error("Login Error:", err);
      throw err; // Re-throw the error to be handled by the component
    }
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setAuthToken(null);
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Error during logout:", error);
      // Handle logout error if needed
    }
  };

  const value = { isAuthenticated, user, loading, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
