import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { NavigationProvider } from "./contexts/NavigationContext";
import { HelmetProvider } from "react-helmet-async";
import { NotificationProvider } from "./contexts/NotificationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const helmetContext = {};

root.render(
	<React.StrictMode>
		<HelmetProvider context={helmetContext}>
			<AuthProvider>
				<NavigationProvider>
					<NotificationProvider>
						<App />
					</NotificationProvider>
				</NavigationProvider>
			</AuthProvider>
		</HelmetProvider>
	</React.StrictMode>
);
