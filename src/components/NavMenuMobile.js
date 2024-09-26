import React from "react";
import { useCustomNav } from "../hooks/useCustomNavigation";
import { NavLink } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { getNavLinkClass } from "../utils/getActiveList";

const NavMenuMobile = () => {
    const {handleToggle} = useCustomNav();

    return (
        <div className="bg-black text-white h-screen w-screen relative">
            <div className="flex justify-end p-[2rem]" onClick={handleToggle}>
                <IoCloseOutline size={30} className="text-white text-right " />
            </div>
            <div className="flex flex-col justify-start items-start gap-4 px-[2rem] font-extralight">
                <NavLink to={"/"} className={({ isActive }) => getNavLinkClass(isActive)} onClick={handleToggle}>Home</NavLink>
                <NavLink to={"/about"} className={({ isActive }) => getNavLinkClass(isActive)} onClick={handleToggle}>About Us</NavLink>
                <NavLink to={"/contact"} className={({ isActive }) => getNavLinkClass(isActive)} onClick={handleToggle}>Contact Us</NavLink>
                <NavLink to={"/media"} className={({ isActive }) => getNavLinkClass(isActive)} onClick={handleToggle}>Media</NavLink>
                <NavLink to={"/career"} className={({ isActive }) => getNavLinkClass(isActive)} onClick={handleToggle}>Carrier</NavLink>
            </div>
        </div>
    )
}

export default NavMenuMobile;