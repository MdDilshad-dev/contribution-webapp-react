import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockLogin, mockSignup } from "../services/mockApi";

// Create AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load user from localStorage on page refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // // Login function
  // const login = async (email, password) => {
  //   try {
  //     const response = await fetch("https://your-api.com/auth/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await response.json();
  //     if (data.token) {
  //       setUser(data.user);
  //       localStorage.setItem("user", JSON.stringify(data.user));
  //       localStorage.setItem("token", data.token);
  //       navigate("/dashboard");
  //     } else {
  //       console.error("Login failed!");
  //     }
  //   } catch (error) {
  //     console.error("Login error:", error);
  //   }
  // };

  // // Logout function
  // const logout = () => {
  //   setUser(null);
  //   localStorage.removeItem("user");
  //   localStorage.removeItem("token");
  //   navigate("/login");
  // };
   // Update user details
   const updateUser = (updatedData) => {
    setUser((prevUser) => ({ ...prevUser, ...updatedData }));
    localStorage.setItem("user", JSON.stringify({ ...user, ...updatedData })); // Persist updates
  };

  const login = async (email, password) => {
    try {
      const response = await mockLogin(email, password);
      const userData = {name, email, token: response.token };

      // Save user data to localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      console.log("Login successful:", response);
      navigate("/dashboard");
    } catch (error) {
      console.error(error.message);
    }
  };

  const signup = async (name, email, password) => {
    try {
      const response = await mockSignup(name, email, password);
      const userData = { name, email, token: response.token };

      // Save user data to localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      console.log("Signup successful:", response);
    } catch (error) {
      console.error(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("user"); // Remove from localStorage
    setUser(null);
    navigate("/login"); // Redirect to login page
  };

  return (
    <AuthContext.Provider value={{ user, setUser,login, logout, signup, updateUser  }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
