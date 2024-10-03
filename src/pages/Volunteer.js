import React from "react";
import {FormInput, TextArea} from "../components/ui/formElements";

const VolunteerPage = () => {
    return (
        <div className="mb-20">
            <div className="bg-[#333] pt-24 px-2 pb-2"></div>
            <div className="border md:w-[40%] w-[95%] mx-auto text-center mt-20 py-10 shadow-md">
                <h1 className="text-[2rem] md:text-[2.5rem] px-3">Become a Volunteer</h1>
                <p className="w-[80%] md:text-lg font-extralight mx-auto text-sm">Your time and skills can change lives. Join our dedicated community of volunteers and help create a lasting impact in the lives of those in need.</p>
                <form className=" text-center py-6">
                    <FormInput placeholder={"Fullname"} type={"text"} classNames={"w-[90%] "}/>
                    <FormInput placeholder={"Email"} type={"email"} classNames={"w-[90%]"} />
                    <FormInput placeholder={"Residential address"} type={"text"} classNames={"w-[90%]"}/>
                    <FormInput placeholder={"City of residence"} type={"text"} classNames={"w-[90%]"}/>
                    <FormInput placeholder={"State of residence"} type={"text"} classNames={"w-[90%]"}/>
                    <FormInput placeholder={"Phone number"} type={"text"} classNames={"w-[90%]"}/>
                    <FormInput placeholder={"Instagram handle"} type={"text"} classNames={"w-[90%]"}/>
                    <FormInput placeholder={"Facebook handle"} type={"text"} classNames={"w-[90%]"}/>
                    <FormInput placeholder={"Twitter handle"} type={"text"} classNames={"w-[90%]"}/>
                    <FormInput placeholder={"Occupation handle"} type={"text"} classNames={"w-[90%]"}/>
                    <div>
                        <label className="flex text-sm md:text-lg font-extralight text-gray-400 md:ml-[3rem] ml-[1.5rem] mt-2">Date of birth</label>
                        <FormInput placeholder={"Date of Birth"} type={"date"} classNames={"w-[90%]"}/>
                    </div>
                    <TextArea classNames={"w-[90%]"} placeholder={"What are your reasons for volunteering?"}/>
                    <FormInput type={"submit"} classNames={"w-[90%] bg-customBlue text-white"} value={"Submit"}/>
                    
                </form>
            </div>
        </div>
    )
}

export default VolunteerPage