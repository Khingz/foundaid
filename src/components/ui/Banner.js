import React from "react";

export const Banner = ({ image }) => {
	return (
		<div className="relative">
			<img
				src={image}
				alt="Banner"
				className="w-full h-[10rem] md:h-[25rem] object-cover"
			/>
            <div className="absolute inset-0 bg-black opacity-85"></div>
		</div>
	);
};
