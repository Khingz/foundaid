import React from "react";
import { SectionHeader } from "../ui/Header";
import image from "../../assets/images/pngwing.com.png";
import image1 from "../../assets/images/Group 2 (3).png";
import image2 from "../../assets/images/PikPng.com_world-health-organization-logo_3794936.png";
import image3 from "../../assets/images/tura.png";


const PartnersSection = () => {
    return (
        <div className="w-screen text-left px-4 flex flex-col items-center justify-center">
            <SectionHeader name={"Our Support Network"} />
            <p className="font-extralight text-lg mt-4">We work hand-in-hand with organizations that share our vision for a better future.</p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-10">
                <div>
                    <img src={image} alt="Partners" className="object-cover w-[10rem]" />
                </div>
                <div>
                    <img src={image1} alt="Partners" className="object-cover w-[10rem]" />
                </div>
                <div>
                    <img src={image2} alt="Partners" className="object-cover w-[10rem]" />
                </div>
                <div>
                    <img src={image3} alt="Partners" className="object-cover w-[10rem]" />
                </div>
            </div>
        </div>
    )
}

export default PartnersSection;