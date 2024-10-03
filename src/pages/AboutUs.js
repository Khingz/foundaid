import React from "react";
import { SectionHeader } from "../components/ui/Header";
import { coreValues } from "../utils/coreValues";
import CoreValues from "../components/coreValues";
import founderImg from "../assets/images/founder.png"
import MapChart from "../components/Map";


const AboutUs = () => {
  return (
    <div className="mb-8">
      <div className="bg-[rgb(51,51,51)] pt-24 px-2 pb-2"></div>
      <div className="md:w-5/6 gap-4 text-left mt-10 flex flex-col justify-start items-start md:px-10 px-3 mb-10">
        <SectionHeader name={"About Us"} />
        <p className="text-lg font-extralight">
          FoundAid is committed to empowering communities through a
          comprehensive approach that focuses on sustainable development,
          education, and healthcare initiatives. By addressing these key areas,
          we aim to create lasting, transformative change that not only meets
          immediate needs but also builds a foundation for future generations to
          thrive. Through collaboration with local partners and a deep
          understanding of community dynamics, we strive to create opportunities
          that inspire hope, foster growth, and contribute to a brighter, more
          sustainable future for all.
        </p>
      </div>
      <div className="w-screen flex justify-between md:flex-row flex-col md:px-10 px-3 gap-4 md:gap-20">
        <div className="w-full md:w-[60%]">
            <h2 className="text-customBlue text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg font-extralight mb-8">FoundAid was established in 2024 by our founder, Ubong David Akpan. Growing up in southern Nigeria, Ubong witnessed firsthand the challenges faced by many in his community, including issues related to healthcare, education, poverty, and inequality. His deep understanding of these struggles fueled his desire to make a difference. Through FoundAid, he aims to uplift thousands of underserved individuals across African society, providing support and resources to help them overcome these obstacles and improve their lives.
            </p>
            <h2 className="text-customBlue text-3xl font-semibold mb-2">Vision, Mission & Values</h2>
            <p className="text-lg font-extralight">A world where every community has the resources and opportunities to thrive. Mission: To empower communities through sustainable development initiatives, focusing on education, healthcare, and economic empowerment.
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
          <h2 className="text-customBlue text-3xl md:text-4xl font-semibold mb-6 text-center">MEET OUR FOUNDER</h2>
          <div className="">
            <img src={founderImg} alt="Ubong David Akpan" className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-[100%] mx-auto"/>
          </div>
          <p className="text-xl font-semibold my-2 px-2 text-center">
            Ubong David Akpan
            <span className="font-extralight block">Founder and Visionary</span>
            <span className="block border border-y-gray-200 w-[100px] my-2 mx-auto"></span>
          </p>
          <div className="w-[95%] md:w-[60%] text-lg font-extralight">
            <p>Ubong David Akpan founded Foundaid with a passion for creating opportunities for children and supporting underserved communities. After witnessing the impact of poverty and limited resources in rural areas, Ubong was moved to take action and create an organization that could address multiple critical issues and make a real difference. With over 15 years of experience in community development, education, and healthcare advocacy, Ubong has been the driving force behind Foundaid's mission</p>
            <p>Ubong believes in the transformative power of education, healthcare, and community development, and has dedicated her life to these causes. Through Foundaid, he continues to inspire others to join the mission of building resilient communities and creating a better future for all.</p>
          </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-customBlue text-3xl md:text-4xl font-semibold mb-2 text-center mt-8">Our Impact</h2>
        <p className="w-4/6 md:1/2 md:text-lg font-extralight text-center mx-auto mb-6">Explore the regions where we've made a lasting impact, bringing positive change to communities across the globe.</p>
        <MapChart />
      </div>
    </div>
  );
};

export default AboutUs;
