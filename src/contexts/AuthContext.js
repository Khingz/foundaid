import { createContext, useEffect, useState } from "react";
import { loginUser, registerUser } from "../service/authService";
import {
	getItemFromLocalStorage,
	removeItemFromLocalStorage,
	saveToLocalStorage,
} from "../utils/loalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const [user, setUser] = useState(null);

	const login = async (credentials) => {
		try {
			const data = await loginUser(credentials);
			if (data.error) {
				throw new Error(data.message);
			}
			setIsLoggedIn(true);
			setUser(data.data.user);
			saveToLocalStorage("user", data.data);
		} catch (err) {
			throw err;
		}
	};
  const getCurrentUser = () => {
    try {
      const user = getItemFromLocalStorage("user");
      if (!user) {
        setIsLoggedIn(false);
        setUser(null);
      } else {
        setIsLoggedIn(true);
        setUser(user.user);
      }
    } catch (err) {
      console.error("Error fetching user:", err);
      setIsLoggedIn(false);
      setUser(null);
    }
  };

	const logout = async () => {
	    removeItemFromLocalStorage("user");
		setIsLoggedIn(false);
		setUser(null);
	}

	const register = async (credentials) => {
		try {
			const data = await registerUser(credentials);
			if (data.error) {
				throw new Error(data.message);
			}
		} catch (error) {
			throw new Error(error.message);
		}
	};

	useEffect(() => {
		getCurrentUser()
	}, []);

	return (
		<AuthContext.Provider value={{ register, isLoggedIn, login, user, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
