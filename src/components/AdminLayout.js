import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminNav from "./Admin/AdminNav";
import SideNav from "./Admin/SideNav";
import { useUserNofication } from "../hooks/useNotification";

const AdminLayout = () => {
	const location = useLocation();
	const hideDashboardNavRoutes = ["/admin/login", "/admin/register"];
	const { isNotificationOpen, handleNotificationToggle } = useUserNofication();
	const [isSidenavOpen, setSidenavOpen] = useState(false);

	const toggleSidenav = () => {
		if (!isSidenavOpen && isNotificationOpen) handleNotificationToggle();
		setSidenavOpen(!isSidenavOpen);
	};

	const layoutProps = {
		toggleSidenav,
		isSidenavOpen,
	};

	return (
		<div className="w-screen">
			{!hideDashboardNavRoutes.includes(location.pathname) && (
				<AdminNav toggleSidenav={toggleSidenav} />
			)}

			<div className="flex mt-[72px]">
				{!hideDashboardNavRoutes.includes(location.pathname) && (
					<SideNav isSidenavOpen={isSidenavOpen} toggleSidenav={toggleSidenav} />
				)}

				<main className="flex-1 p-4 mt-2 md:ml-64">
					<Outlet context={layoutProps} />
				</main>
			</div>
		</div>
	);
};

export default AdminLayout;
