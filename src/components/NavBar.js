import React, { useEffect, useState } from "react";
import { handleScroll } from "../utils/handleScroll";
import NavMenuMobile from "./NavMenuMobile";
import { useCustomNav } from "../hooks/useCustomNavigation";
import NavMenuDesktop from "./NavMenuDesktop";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
	const { isOpen, handleToggle, isMobile } = useCustomNav();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => handleScroll(setIsScrolled);
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
				isScrolled
					? "bg-[rgba(255,255,255,0.9)] shadow-lg"
					: "bg-transparent text-white"
			} flex justify-between items-center py-[1rem] px-[1.5rem] md:gap-1`}
		>
			<div className="">
				<Link to={"/"}>
					<img src={Logo} alt="logo" className="w-[150px] md:w-[200px]" />
				</Link>
			</div>
			<div className="flex items-center justify-end gap-10">
				{isMobile ? (
					<div onClick={handleToggle}>
						<HiMiniBars3BottomRight size={30} />
					</div>
				) : (
					<NavMenuDesktop />
				)}
			</div>
			<Link
				to="/donate"
				className={`${
					isMobile ? "hidden" : ""
				} border border-customBlue bg-customBlue hover:bg-transparent transition-all duration-500 ease-in-out py-2 px-6 text-sm font-extralight text-white ${
					isScrolled ? "hover:text-[#333]" : ""
				}`}
			>
				Donate
			</Link>

			{isMobile && (
				<div
					className={`absolute top-0 w-screen min-h-screen transition-all duration-500 ease-in-out ${
						isOpen ? "left-0" : "-left-[1000px]"
					}`}
				>
					<NavMenuMobile />
				</div>
			)}
		</nav>
	);
};

export default Nav;
