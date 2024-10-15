import React from "react";

const DotSpinner = ({ size = 10 }) => {
	const dotStyle = {
		width: `${size}px`,
		height: `${size}px`,
	};

	return (
		<div className="flex space-x-2 justify-center items-center">
			<div
				className="bg-gray-700 rounded-full animate-bounce"
				style={{ ...dotStyle, animationDelay: "0s" }}
			></div>
			<div
				className="bg-gray-700 rounded-full animate-bounce"
				style={{ ...dotStyle, animationDelay: "0.2s" }}
			></div>
			<div
				className="bg-gray-700 rounded-full animate-bounce"
				style={{ ...dotStyle, animationDelay: "0.4s" }}
			></div>
		</div>
	);
};

export default DotSpinner;
