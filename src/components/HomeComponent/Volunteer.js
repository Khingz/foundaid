import React from "react";
import { Link } from "react-router-dom";

const VolunteerSection = () => {
    return(
        <div className="w-screen bg-customBlue text-white flex flex-col gap-4 relative px-2 py-10">
            <p className="text-center font-extralight text-xl md:w-1/2 mx-auto">
                Your contribution helps us continue our work in the most underserved communities. Join hands with us to bring hope and change.
            </p>
            <Link to={"/volunteer"} className="border px-10 md:py-2 py-2 text-center mx-auto">Volunteer</Link>
        </div>
    )
}

export default VolunteerSection;