import React from "react";
import { FaBell, FaBars } from "react-icons/fa";
import { useCustomNav } from "../hooks/useCustomNavigation";
import { useAuth } from "../hooks/useAuth";

const AdminNav = ({ toggleSidenav }) => {
	const { isMobile } = useCustomNav();
	const { user } = useAuth();

	return (
		<nav className="bg-white shadow-md p-4 fixed w-full z-100 top-0 left-0">
			<div
				className={`container mx-auto flex items-center justify-between md:justify-end`}
			>
				{isMobile && (
					<button
						className="text-gray-600 focus:outline-none tablet:hidden"
						onClick={toggleSidenav}
					>
						<FaBars size={24} />
					</button>
				)}

				{/* Notifications and Profile */}
				<div className="flex items-center space-x-4">
					<div className="relative">
						<FaBell size={20} className="text-gray-500 hover:text-gray-700" />
						<span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
					</div>
					<div className="flex items-center space-x-2">
						<img
							src="https://via.placeholder.com/40"
							alt="Profile"
							className="w-10 h-10 rounded-full"
						/>
						<span className="text-gray-800 font-extralight">
							{user &&
								user.username.charAt(0).toUpperCase() + user.username.slice(1)}
						</span>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default AdminNav;
