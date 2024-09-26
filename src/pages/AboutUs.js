import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="mb-10">
            <h1 className="bg-black pt-24 text-[3rem] text-gray-200 px-2">About Us</h1>
            <p className="px-2">Learn more about us</p>
            <p className="mb-5 px-2 text-4xl text-center">COMING SOON</p>
            <Link to={"/"} className="border border-black py-2 px-4 mx-auto">Back Home</Link>
        </div>
    );
}

export default AboutUs;