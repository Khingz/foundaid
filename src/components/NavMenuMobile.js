import React from "react";
import { useCustomNav } from "../hooks/useCustomNavigation";
import { Link, NavLink } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { getNavLinkClass, navLinks } from "../utils/navUtils";

const NavMenuMobile = () => {
    const {handleToggle} = useCustomNav();

    return (
        <div className="bg-[#333] text-white h-screen w-screen relative">
            <div className="flex justify-end p-[2rem]" onClick={handleToggle}>
                <IoCloseOutline size={30} className="text-white text-right " />
            </div>
            <div className="flex flex-col justify-start items-start gap-4 px-[2rem] font-extralight">
                {
                    navLinks.map((link, index) => (
                        <NavLink key={index} to={link.url} className={({ isActive }) => getNavLinkClass(isActive)} onClick={handleToggle}>{link.name}</NavLink>
                    ))
                }
                <Link to="/donate" className={`border border-customBlue bg-customBlue hover:bg-transparent transition-all duration-500 ease-in-out py-3 px-6 text-lg font-extralight text-white mt-4 w-full text-center`} onClick={handleToggle}>Donate</Link>

            </div>
        </div>
    )
}

export default NavMenuMobile;