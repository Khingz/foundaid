import React from "react";
import { SectionHeader } from "../ui/Header";
import ProgramCard from "./ProgramCard";
import image2 from "../../assets/images/smile.jpg"
import communityDevImage from "../../assets/images/communityDev.jpg"
import kidsInSchoolImage from "../../assets/images/kids in school.jpg"

const ProgramSection = () =>{
    return (
        <div className="w-screen text-left px-4 flex flex-col items-center justify-center">
            <SectionHeader name={"How we make a Difference"} />
            <p className="font-extralight text-lg mt-4">Discover the program transforming lives acress communities</p>
            <div className="flex flex-wrap mt-8 gap-4 justify-center items-stretch">
                <ProgramCard title={'Education for All'} description={'Providing free education to children in rural areas.'} image={kidsInSchoolImage}/>
                <ProgramCard title={'Healthcare Initiative'} description={'Offering medical camps and preventive care.'} image={image2}/>
                <ProgramCard title={'Community Development'} description={'Building sustainable and self-reliant communities through skill training and entrepreneurship.'} image={communityDevImage} />
            </div>
        </div>
    )
}

export default ProgramSection;