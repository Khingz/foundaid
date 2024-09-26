import React, { useEffect, useState } from "react";
import { handleScroll } from "../utils/handleScroll";
import NavMenuMobile from "./NavMenuMobile";
import { useCustomNav } from "../hooks/useCustomNavigation";
import NavMenuDesktop from "./NavMenuDesktop";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

const Nav = () => {
    const {isOpen, handleToggle, isMobile} = useCustomNav();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => handleScroll(setIsScrolled);
        window.addEventListener("scroll", onScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed w-full top-0 z-50 transition-colors duration-300 ${isScrolled ? "bg-[rgba(255,255,255,0.9)] shadow-lg text-gray-900" : "bg-transparent text-white"} flex justify-between items-center md:py-[2rem] py-[1.3rem] px-[1.5rem] md:px-[6rem]`}>
            <div className="">
                <p className="font-bold md:text-2xl">FOUNDAID</p>
            </div>
            <div className="flex items-center justify-end gap-10">
                {
                    isMobile ? <div onClick={handleToggle}>
                        <HiMiniBars3BottomRight size={30} />
                    </div> : <NavMenuDesktop />
                }
            </div>
            {
                isOpen && <div className="absolute top-0 left-0 w-screen min-h-screen">
                    <NavMenuMobile />
                </div>
            }
        </nav>
    )
}


export default Nav;