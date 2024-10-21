import React, { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { getItemFromLocalStorage } from "../utils/loalStorage";

export const SocketContext = createContext();
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const SocketProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);

	useEffect(() => {
		const token = getItemFromLocalStorage("user")?.access_token;
		const newSocket = io(API_BASE_URL, {
			query: {
				token,
			},
		});

		newSocket.on("connect", () => {
			console.log("Connected to server");
		});

		newSocket.on("error", (err) => {
			console.log(err);
		});

		setSocket(newSocket);

		return () => {
			newSocket.disconnect();
		};
	}, []);

	return (
		<SocketContext.Provider value={{socket}}>{children}</SocketContext.Provider>
	);
};
