import React from "react";
import { SectionHeader } from "../ui/Header";
import ProgramCard from "./ProgramCard";
import helathcareImage from "../../assets/images/healthcare.jpg"
import communityDevImage from "../../assets/images/Community-development-women-chatting.jpg"
import kidsInSchoolImage from "../../assets/images/kids in school.jpg"
import emrgencyReliefImage from "../../assets/images/emergency relieve.jpg"


const ProgramSection = () =>{
    return (
        <div className="w-screen text-left px-4 flex flex-col items-center justify-center">
            <SectionHeader name={"How we make a Difference"} />
            <p className="font-extralight text-lg mt-4">Discover the program transforming lives acress communities</p>
            <div className="flex flex-wrap mt-8 gap-4 justify-center items-stretch">
                <ProgramCard title={'Education for All'} description={'Providing access to quality education in underserved areas.'} image={kidsInSchoolImage}/>
                <ProgramCard title={'Healthcare Outreach'} description={' Delivering essential medical services to remote communities.'} image={helathcareImage}/>
                <ProgramCard title={'Community Development'} description={'Building infrastructure and supporting local economies'} image={communityDevImage} />
                <ProgramCard title={'Emergency Relief'} description={'Responding swiftly to natural disasters and humanitarian crises'} image={emrgencyReliefImage}/>
            </div>
        </div>
    )
}

export default ProgramSection;