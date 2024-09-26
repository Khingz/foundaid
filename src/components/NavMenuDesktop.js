import React from "react";
import { NavLink } from "react-router-dom";
import { getNavLinkClass } from "../utils/getActiveList";

const NavMenuDesktop = () => {
    return (
        <div className="flex items-center justify-end gap-10 font-extralight">
            <NavLink to={"/"} className={({ isActive }) => getNavLinkClass(isActive)}>Home</NavLink>
            <NavLink to={"/about"} className={({ isActive }) => getNavLinkClass(isActive)}>About Us</NavLink>
            <NavLink to={"/contact"} className={({ isActive }) => getNavLinkClass(isActive)}>Contact Us</NavLink>
            <NavLink to={"/media"} className={({ isActive }) => getNavLinkClass(isActive)}>Media</NavLink>
            <NavLink to={"/career"} className={({ isActive }) => getNavLinkClass(isActive)}>Carrier</NavLink>
        </div>
    )
}

export default NavMenuDesktop;