import React from "react";
import { SectionHeader } from "../components/ui/Header";
import { coreValues } from "../utils/coreValues";
import CoreValues from "../components/coreValues";
import founderImg from "../assets/images/founder.png";
import MapChart from "../components/Map";
import { Helmet } from "react-helmet-async";
import { Banner } from "../components/ui/Banner";
import BannerImage from "../assets/images/emergency relieve.jpg";

const AboutUs = () => {
	return (
		<div className="mb-8">
			<Helmet>
				<title>Foundaid America -About Us</title>
				<meta
					name="description"
					content="Know more about Foundaid America in our about us page"
				/>
			</Helmet>
			<Banner image={BannerImage} />
			<div className="md:w-5/6 gap-4 text-left mt-10 flex flex-col justify-start items-start md:px-10 px-3 mb-10">
				<SectionHeader name={"About Us"} />
				<p className="text-lg font-extralight">
					At FoundAid America, we believe in the power of community and
					compassion. Our mission is simple yet profound: to bridge the gap
					between those in need and those with the heart to help. Founded on the
					principle that every individual deserves the opportunity to live with
					dignity, we are committed to creating sustainable solutions for
					vulnerable communities. From supporting families facing economic
					hardship to providing educational opportunities for underprivileged
					children, our work is rooted in one core belief — together, we can
					make a difference.
				</p>
				<p className="text-lg font-extralight">
					Every story matters. Every life we touch is a testament to the
					strength of the human spirit. We see the faces of those who have been
					left behind, and we feel their struggle. But we also see hope — the
					hope that a caring community like ours can offer. When you join
					FoundAid America, you’re not just donating money or time. You’re
					giving hope. You’re offering a lifeline to someone who may feel
					forgotten.
				</p>
				<p className="text-lg font-extralight">
					Our organization was born out of a desire to help, to be that bridge
					of hope for individuals who feel like they have nowhere else to turn.
					The name "FoundAid" reflects our purpose: to help people find the aid
					they need to rise from hardship and build a brighter future. Over the
					years, we’ve grown from a small initiative to a movement driven by
					people like you — compassionate individuals who believe that helping
					one person may not change the world, but it can change the world for
					that one person.
				</p>
				<p className="text-lg font-extralight">
					We understand that behind every need, there’s a human story. Maybe
					it’s a single mother struggling to put food on the table, a child who
					dreams of going to school but can’t afford the supplies, or a family
					trying to rebuild after losing everything. These stories fuel our
					passion and purpose. They remind us that life’s challenges can be
					overwhelming, but with the right support, they are not insurmountable.
					<br></br>
					What sets FoundAid America apart is our commitment to personal
					connection. We don’t just send money or supplies and walk away. We
					build relationships with the communities we serve. We listen to their
					needs, and we collaborate with them to find lasting solutions. Whether
					it’s organizing food drives, sponsoring educational programs, or
					providing medical assistance, we tailor our efforts to make the most
					meaningful impact.
				</p>
				<p className="text-lg font-extralight">
					Our work is built on trust, transparency, and accountability. We
					believe that every dollar donated and every hour volunteered should
					make a direct, measurable difference. That’s why we work tirelessly to
					ensure that resources are used efficiently and effectively, reaching
					those who need them most. When you support FoundAid America, you
					become part of a family dedicated to uplifting others, giving not just
					what is needed but also restoring hope and dignity.
				</p>
				<p className="text-lg font-extralight">
					But we can’t do this alone. We need you. Whether through donations,
					volunteer work, or spreading awareness, your involvement helps us
					reach more people, impact more lives, and create a ripple effect of
					positive change. Together, we can offer more than aid. We can offer
					hope, opportunity, and the chance for a better tomorrow. <br></br>
					At FoundAid America, we believe in the power of community. We believe
					in you. And we believe that together, we can change lives — one story
					at a time.
				</p>
			</div>
			<div className="w-screen flex justify-between md:flex-row flex-col md:px-10 px-3 gap-4 md:gap-20">
				<div className="w-full md:w-[60%]">
					<h2 className="text-customBlue text-3xl font-semibold mb-4">
						Our Story
					</h2>
					<p className="text-lg font-extralight mb-8">
						Foundaid America was established in 2024 by our founder, Pastor
						Ubong David Akpan. Growing up in southern Nigeria, Pastor Ubong
						witnessed firsthand the challenges faced by many in his community,
						including issues related to healthcare, education, poverty, and
						inequality. His deep understanding of these struggles fueled his
						desire to make a difference. Through Foundaid America, he aims to
						uplift thousands of underserved individuals across African society,
						providing support and resources to help them overcome these
						obstacles and improve their lives.
					</p>
					<h2 className="text-customBlue text-3xl font-semibold mb-2">
						Vision, Mission & Values
					</h2>
					<p className="text-lg font-extralight">
						A world where every community is equipped with the resources and
						opportunities to flourish, fostering lasting growth and well-being.
					</p>
					<p className="text-lg font-extralight">
						To uplift communities by driving sustainable development initiatives
						centered around education, healthcare, and economic empowerment,
						ensuring long-term impact and self-sufficiency
					</p>
				</div>
				<div className="w-full md:w-[70%] flex justify-center items-start md:justify-start md:item-start flex-wrap gap-4">
					{coreValues.map((value, index) => (
						<CoreValues
							key={index}
							name={value.title}
							description={value.description}
							icon={value.icon}
						/>
					))}
				</div>
			</div>
			{/* <div className="w-screen border-t border-gray-100"></div> */}
			<div className="bg-gray-50 py-10 px-4 flex flex-col justify-center items-center mt-6">
				<h2 className="text-customBlue text-3xl md:text-4xl font-semibold mb-6 text-center">
					MEET OUR FOUNDER
				</h2>
				<div className="">
					<img
						src={founderImg}
						alt="Pastor Ubong David Akpan"
						className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-[100%] mx-auto"
					/>
				</div>
				<p className="text-xl font-semibold my-2 px-2 text-center">
					Pastor Ubong David Akpan
					<span className="font-extralight block">Founder and Visionary</span>
					<span className="block border border-y-gray-200 w-[100px] my-2 mx-auto"></span>
				</p>
				<div className="w-[95%] md:w-[60%] text-lg font-extralight">
					<p>
						Pastor Ubong David Akpan founded Foundaid America with a passion for
						creating opportunities for children and supporting underserved
						communities. After witnessing the impact of poverty and limited
						resources in rural areas, Pastor Ubong was moved to take action and
						create an organization that could address multiple critical issues
						and make a real difference. With over 15 years of experience in
						community development, education, and healthcare advocacy, Pastor
						Ubong has been the driving force behind Foundaid America's mission
					</p>
					<p>
						Pastor Ubong believes in the transformative power of education,
						healthcare, and community development, and has dedicated her life to
						these causes. Through Foundaid America, he continues to inspire
						others to join the mission of building resilient communities and
						creating a better future for all.
					</p>
				</div>
			</div>
			<div className="flex justify-center items-center flex-col">
				<h2 className="text-customBlue text-3xl md:text-4xl font-semibold mb-2 text-center mt-8">
					Our Impact
				</h2>
				<p className="w-4/6 md:1/2 md:text-lg font-extralight text-center mx-auto mb-6">
					Explore the regions where we've made a lasting impact, bringing
					positive change to communities across the globe.
				</p>
				<MapChart />
			</div>
		</div>
	);
};

export default AboutUs;
