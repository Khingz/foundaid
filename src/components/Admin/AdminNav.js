import React from "react";
import { FaBell, FaBars } from "react-icons/fa";
import { useCustomNav } from "../../hooks/useCustomNavigation.js";
import { useAuth } from "../../hooks/useAuth.js";
import Notification from "./Notification.js";
import { capitalize } from "../../utils/index.js";
import { useUserNofication } from "../../hooks/useNotification.js";

const AdminNav = ({ toggleSidenav }) => {
	const { isMobile } = useCustomNav();
	const { user } = useAuth();
	const { notifications, isNotificationOpen, handleNotificationToggle } =
		useUserNofication();

	return (
		<nav className="bg-white shadow-md p-4 fixed w-full z-100 top-0 left-0">
			<div
				className={`container mx-auto flex items-center justify-between md:justify-end relative`}
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
				<div className="flex items-center space-x-6 cursor-pointer">
					<div className="relative pointer" onClick={handleNotificationToggle}>
						<FaBell size={25} className="text-gray-500 hover:text-gray-700" />
						{
							notifications && notifications.unreadCount > 0 && <span className="absolute -top-4 -right-2 h-6 w-6 text-sm bg-red-400 rounded-full text-white flex items-center justify-center">
								{notifications && notifications.unreadCount}
							</span>
						}
					</div>
					<div className="flex items-center space-x-2">
						<img
							src="https://via.placeholder.com/40"
							alt="Profile"
							className="w-10 h-10 rounded-full"
						/>
						<span className="text-gray-800 font-extralight">
							{user && capitalize(user.username)}
						</span>
					</div>
				</div>
				{isNotificationOpen && (
					<div className="absolute top-16 right-0 w-full md:w-2/4 max-h-[600px] overflow-y-auto">
						<Notification />
					</div>
				)}
			</div>
		</nav>
	);
};

export default AdminNav;
