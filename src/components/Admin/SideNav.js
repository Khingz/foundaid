import React from "react";
import logo from "../../assets/images/logo.png";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { adminSideNavLinks } from "../../utils/navUtils";
import { FaSignOutAlt } from "react-icons/fa";

const SideNav = ({ isSidenavOpen, toggleSidenav }) => {
	const { logout } = useAuth();
	const navigate = useNavigate();

	const handleToggle = () => {
		if (isSidenavOpen) {
			toggleSidenav();
		}
	};

	const handleLogout = () => {
		logout();
		toast.info("Logout successful.");
		navigate("/admin/login");
	};
	return (
		<div
			className={`bg-customBlue text-white w-64 min-h-screen overflow-y-auto fixed top-0 left-0 z-40 transform transition-transform duration-300 ease-in-out mt-[72px] ${
				isSidenavOpen ? "translate-x-0" : "-translate-x-full"
			} md:translate-x-0`}
		>
			<div className="mt-8 bg-white w-full">
				<img src={logo} alt="logo" className="w-[200px] px-4" />
			</div>
			<nav className="mt-6 font-light text-lg">
				<ul>
					{adminSideNavLinks.map((link) => (
						<li key={link.name}>
							<Link
								to={link.url}
								onClick={handleToggle}
								className="flex justify-start items-center gap-2 px-4 py-4 hover:bg-gray-700 cursor-pointer my-4"
							>
								{link.icon} {link.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<button
				className="w-full py-4 flex items-center justify-start gap-2 text-xl font-extralight px-4 mt-6 hover:bg-gray-700 cursor-pointer"
				onClick={handleLogout}
			>
				<FaSignOutAlt className="text-3xl" />
				Exit
			</button>
		</div>
	);
};

export default SideNav;
