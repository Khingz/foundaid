import React from "react";

export const SectionHeader = ({name, classNames}) => {
    return (
        <div className="text-center">
            <h2 className={`text-[2rem] md:text-[3rem] ${classNames}`}>{name}</h2>
            <div className={`w-[8rem] border-t-4 border-customBlue mx-auto`}></div>
        </div>
    )
}