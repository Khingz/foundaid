import React from "react";

export const FormInput = ({type, placeholder, name, value, onChange, classNames, pattern, ...props}) => {
    return (
        <div className="">
            <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} className={`p-2 border-b border-gray-300 focus:border-customBlue focus:outline-none m-2 ${classNames} md:text-lg text-sm font-extralight`} pattern={pattern} {...props} />
        </div>
    )
}


export const TextArea = ({placeholder = "Enter your message", value, onChange, rows=4, classNames }) => {
    return (
        <div>
            <textarea
                value={value}
                onChange={onChange}
                rows={rows}
                placeholder={placeholder}
                className={`p-2 border-b border-gray-300 focus:border-customBlue focus:outline-none m-2 ${classNames} text-sm md:text-lg font-extralight`}
            ></textarea>
        </div>
    )
}