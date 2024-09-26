import React from "react";

export const SectionHeader = ({name}) => {
    return (
        <div className="text-center">
            <h2 className="text-[2rem] md:text-[3rem]">{name}</h2>
            <div className="w-[6rem] border-t-2 border-t-gray-800"></div>
        </div>
    )
}