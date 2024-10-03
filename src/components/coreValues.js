import React from "react";

const CoreValues = ({name, description, icon}) => {
    return (
        <div className="max-w-[40%]">
            <div className="text-customBlue text-4xl mb-2">{icon}</div>
            <h2 className="font-semibold md:text-xl mb-2">{name}</h2>
            <p className="font-extralight md:text-lg mb-2">{description}</p>
        </div>
    )
};

export default CoreValues;