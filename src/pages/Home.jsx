import React from "react";
import HeroSection from "../components/HomeComponent/HeroSection";
import AboutSection from "../components/HomeComponent/AboutSection";
import ProgramSection from "../components/HomeComponent/Programs";
import VolunteerSection from "../components/HomeComponent/Volunteer";
import PartnersSection from "../components/HomeComponent/PartnersSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Foundaid America - Home</title>
                <meta name='description' content='Welcome to foundaid america. We are a voluntary organisation that foster community development, education etc' />
            </Helmet>
            <div className="">
                <HeroSection />
            </div>
            <div className="my-10 px-2">
                <AboutSection />
            </div>
            <div className="w-screen border-t border-t-gray-200 mb-10"></div>
            <div className="mb-10">
                <ProgramSection />
            </div>
            <div className="mb-10">
                <VolunteerSection />
            </div>
            <div className="mb-10">
                <PartnersSection/>
            </div>
        </>
    );
}

export default Home;