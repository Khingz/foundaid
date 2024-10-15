import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminNav from "../components/AdminNav";
import SideNav from "./Admin/SideNav";

const AdminLayout = () => {
	const location = useLocation();
	const hideDashboardNavRoutes = ["/admin/login", "/admin/register"];

	const [isSidenavOpen, setSidenavOpen] = useState(false);

	const toggleSidenav = () => {
		setSidenavOpen(!isSidenavOpen);
	};

	return (
		<div className="w-screen">
			{!hideDashboardNavRoutes.includes(location.pathname) && (
				<AdminNav toggleSidenav={toggleSidenav} />
			)}

			<div className="flex mt-[72px]">
				{!hideDashboardNavRoutes.includes(location.pathname) && (
					<SideNav isSidenavOpen={isSidenavOpen} />
				)}

				<main className="flex-1 p-4 border-4 md:ml-64">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default AdminLayout;
