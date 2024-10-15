import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};
	return (
		<div className="mb-20">
			<Helmet>
				<title>Foundaid America - 404</title>
				<meta
					name="description"
					content="This page does not exist on foundaid"
				/>
			</Helmet>
			<div className="min-h-screen flex justify-center items-center flex-col text-center px-2">
				<h1 className="text-3xl md:text-5xl font-bold text-customBlue mb-3">
					404 - Page Not Found
				</h1>
				<p className="text-xl font-extralight mb-2">
					Oops! The page you are looking for does not exist.
				</p>
				<button
					className="border border-customBlue px-4 py-2 hover:bg-transparent hover:text-[#333] bg-customBlue text-white transition-all duration-500 ease-in-out"
          onClick={goBack}
				>
					Back to homepage
				</button>
			</div>
		</div>
	);
};

export default NotFound;
