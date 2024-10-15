import React from "react";
import { SectionHeader } from "../ui/Header";
import { Link } from "react-router-dom";

const DonateSection = () => {
	return (
		<div className="w-screen text-left px-4 flex flex-col items-center justify-center">
			<SectionHeader name={"Make a Difference!"} />
			<p className="font-extralight text-xl my-4 md:w-1/2 text-center">
				Your contributions help us provide essential services and support to
				those in need. Join us in our mission to create a better world for
				everyone.
			</p>
			<Link
				to="/donate"
				className={`border-2 border-customBlue md:py-4 py-3 px-10 hover:bg-customBlue transition-all duration-500 ease-in-out mb-4`}
			>
				Donate Now
			</Link>
		</div>
	);
};

export default DonateSection;
