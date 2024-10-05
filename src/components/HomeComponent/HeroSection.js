import React from "react";
import HeroCarousel from "../HeroCarousel";

import image1 from "../../assets/images/heroSection.jpeg"
import image2 from "../../assets/images/smile.jpg"
import image3 from "../../assets/images/holding-humans.jpg"

const images = [image1, image2, image3]

const HeroSection = () => {
    return (
        <div>
            <HeroCarousel images={images} />
        </div>
    );  
};

export default HeroSection;