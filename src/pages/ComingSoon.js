import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
    return (
        <div className="mb-20">
            <div className="bg-[rgb(51,51,51)] pt-24 px-2 pb-2"></div>
            <p className="mb-5 px-2 text-6xl text-center mt-10">COMING SOON</p>
            <Link to={"/"} className="border border-black py-2 px-4 mx-40">Back Home</Link>
        </div>
    );
}

export default ComingSoon;