import React from "react";
import { SectionHeader } from "../ui/Header";
import { Link } from "react-router-dom";

const AboutSection = () => {
	return (
		<div className="w-screen text-left flex flex-col items-center justify-center">
			<SectionHeader name={"Empowering Change"} />
			<div className="w-full md:w-4/6 font-extralight text-lg mt-3 mb-8 pr-2">
				<p className="mb-2">
					FoundAid America (FAA) is a charitable organization founded by Pastor
					Ubong David Akpan. Established with a mission to enhance opportunities
					for positive change, FAA focuses on strategic investments that improve
					health and wellbeing, promote quality education, and expand economic
					empowerment opportunities.
				</p>
				<p className="mb-2">
					Over the years, FoundAid America has become a leading organization,
					driven by a commitment to addressing critical issues such as child
					nutrition, healthcare, education, and disaster relief. Its efforts are
					centered on creating sustainable change through impactful
					community-focused interventions.
				</p>
				<p className="mb-2">
					FAA also engages in stand-alone government programmes and projects
					with the potential to create significant social impact. The foundation
					works in close collaboration with donors, state and national
					governments, as well as reputable international and domestic
					charities, non-governmental organizations, and global agencies to
					advance its humanitarian goals.
				</p>
				<p>
					One of its landmark partnerships involves working with major
					stakeholders in efforts to improve healthcare access and support
					initiatives that enhance community resilience and promote long-term
					development.
				</p>
			</div>
			<Link to={"/about"} className="border-2 border-gray-800 px-10 py-2">
				Learn More
			</Link>
		</div>
	);
};

export default AboutSection;
