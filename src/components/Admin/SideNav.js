import React from "react";
import {
	FaHome,
	FaUsers,
	FaCog,
	FaSignOutAlt,
} from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SideNav = ({ isSidenavOpen }) => {
	const { logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		toast.info("Logout successful.");
		navigate("/admin/login");
	}
	return (
		<div
			className={`bg-customBlue text-white w-64 h-screen fixed top-0 left-0 z-40 transform transition-transform duration-300 ease-in-out mt-[72px] ${
				isSidenavOpen ? "translate-x-0" : "-translate-x-full"
			} md:translate-x-0`}
		>
			<div className="mt-8">
				<img src={logo} alt="logo" className="w-40 px-2 mx-auto bg-white" />
			</div>
			<nav className="mt-10 font-light text-lg">
				<ul>
					<li className="py-2 px-6 hover:bg-gray-700 cursor-pointer">
						<FaHome className="inline mr-4 text-2xl" /> Dashboard
					</li>
					<li className="py-2 px-6 hover:bg-gray-700 cursor-pointer">
						<FaUsers className="inline mr-4 text-2xl" /> Users
					</li>
					<li className="py-2 px-6 hover:bg-gray-700 cursor-pointer">
						<FaCog className="inline mr-4 text-2xl" /> Settings
					</li>
				</ul>
			</nav>
			<button className="w-full py-2 flex items-center text-xl font-extralight px-6 mt-10 hover:bg-gray-700 cursor-pointer" onClick={handleLogout}>
				<FaSignOutAlt className="mr-4 "/>Logout
			</button>
		</div>
	);
};

export default SideNav;
