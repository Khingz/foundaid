import React from "react";
import { SectionHeader } from "../ui/Header";
import { Link } from "react-router-dom";

const AboutSection = () => {
    return (
        <div className="w-screen text-left flex flex-col items-center justify-center">
            <SectionHeader name={"Get to Know Us"} />
            <div className="w-full md:w-4/6 font-extralight text-lg mt-3 mb-8 pr-2">
                <p className="mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae nobis in blanditiis a saepe quibusdam cumque voluptas dignissimos sequi nostrum possimus exercitationem sit vitae ducimus ea, debitis tenetur dolorum repudiandae et autem porro iusto repellat. Libero excepturi explicabo iure beatae recusandae consectetur ratione doloribus repellendus ipsum ab. Sit voluptate labore, quas rem, culpa sed nostrum quam qui quibusdam eum iste accusamus praesentium sequi magni reprehenderit error fuga repellat officia nobis. Praesentium similique animi dicta blanditiis molestiae. Architecto deserunt magnam quam, ducimus, vero similique alias eum cupiditate, assumenda nam cumque deleniti sint suscipit? Quia explicabo reprehenderit temporibus excepturi laboriosam laborum autem?</p>
                <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae nobis in blanditiis a saepe quibusdam cumque voluptas dignissimos sequi nostrum possimus exercitationem sit vitae ducimus ea, debitis tenetur dolorum repudiandae et autem porro iusto repellat. Libero excepturi explicabo iure beatae recusandae consectetur ratione doloribus repellendus ipsum ah. Sit voluptate labore, quas rem, culpa sed nostrum quam qui quibusdam eum iste accusamus praesentium sequi magni reprehenderit error fuga repellat officia nobis. Praesentium similique animi dicta blanditiis molestiae. Architecto deserunt magnam quam, ducimus, vero similique alias eum cupiditate, assumenda nam cumque deleniti sint suscipit? Quia explicabo reprehenderit temporibus excepturi laboriosam laborum autem?</p>
            </div>
            <Link to={"/about"} className="border-2 border-gray-800 px-10 py-2">Learn More</Link>
        </div>
    )
}

export default AboutSection