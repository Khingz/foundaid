import React from "react";
import HeroCarousel from "../HeroCarousel";

import image1 from "../../assets/images/heroSection.jpeg"
import image2 from "../../assets/images/smile.jpg"

const images = [image1, image2, image2]

const HeroSection = () => {
    return (
        <div>
            <HeroCarousel images={images} />
        </div>
    );  
};

export default HeroSection;