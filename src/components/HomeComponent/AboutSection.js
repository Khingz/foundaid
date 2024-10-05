import React from "react";
import { SectionHeader } from "../ui/Header";
import { Link } from "react-router-dom";

const AboutSection = () => {
    return (
        <div className="w-screen text-left flex flex-col items-center justify-center">
            <SectionHeader name={"Get to Know Us"} />
            <div className="w-full md:w-4/6 font-extralight text-lg mt-3 mb-8 pr-2">
                <p className="mb-2">At FoundAid America, we believe in the power of community and compassion. Our mission is simple yet profound: to bridge the gap between those in need and those with the heart to help. Founded on the principle that every individual deserves the opportunity to live with dignity, we are committed to creating sustainable solutions for vulnerable communities. From supporting families facing economic hardship to providing educational opportunities for underprivileged children, our work is rooted in one core belief — together, we can make a difference.</p>
                <p className="mb-2">Our organization was born out of a desire to help, to be that bridge of hope for individuals who feel like they have nowhere else to turn. The name "FoundAid" reflects our purpose: to help people find the aid they need to rise from hardship and build a brighter future. Over the years, we’ve grown from a small initiative to a movement driven by people like you — compassionate individuals who believe that helping one person may not change the world, but it can change the world for that one person.</p>
                <p >Every story matters. Every life we touch is a testament to the strength of the human spirit. We see the faces of those who have been left behind, and we feel their struggle. But we also see hope — the hope that a caring community like ours can offer. When you join FoundAid America, you’re not just donating money or time. You’re giving hope. You’re offering a lifeline to someone who may feel forgotten.</p>
            </div>
            <Link to={"/about"} className="border-2 border-gray-800 px-10 py-2">Learn More</Link>
        </div>
    )
}

export default AboutSection