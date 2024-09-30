import React from "react";
import { NavLink } from "react-router-dom";
import { getNavLinkClass, navLinks } from "../utils/navUtils";

const NavMenuDesktop = () => {
    return (
        <div className="flex items-center justify-center gap-10 font-extralight text-sm">
            {
                navLinks.map((link, index) => (
                    <NavLink key={index} to={link.url} className={({ isActive }) => getNavLinkClass(isActive)}>{link.name}</NavLink>
                ))
            }
        </div>
    )
}

export default NavMenuDesktop;