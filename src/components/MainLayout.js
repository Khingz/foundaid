import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
	return (
		<>
			<Nav />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default MainLayout;
