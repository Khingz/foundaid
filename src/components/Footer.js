import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    return (
        <div className="bg-black text-white font-extralight flex flex-col items-center justify-center gap-6 py-16">
            <div className="md:w-3/4 w-full flex flex-col md:flex-row justify-between px-4 gap-4">
                <div className="w-full mb-8">
                    <h1 className="font-bold text-2xl mb-4">FOUNDAID</h1>
                    <div className="flex flex-col gap-2">
                        <Link to={"/about"}>About Us</Link>
                        <Link to={"/career"}>Privacy Policy</Link>
                        <Link to={"/career"}>Terms of Service</Link>
                    </div>
                </div>
                <div className="w-full mb-8">
                    <h1 className="font-semibold mb-4">CONTACT US</h1>
                    <div className="flex flex-col gap-2 mb-4">
                        <p>Call: +234 XXXXXXXXXX</p>
                        <p>Fax: +234 XXXXXXXXXX, +234 XXXXXXXXXX</p>
                        <p>Email: example@gmail.com</p>
                    </div>
                    <div className="flex justify-start gap-3">
                        <a href="example.com" target="_blank">
                            <FaFacebookF />
                        </a>
                        <a href="example.com" target="_blank">
                            <FaTwitter />
                        </a>
                        <a href="example.com" target="_blank">
                            <RiInstagramFill />
                        </a>
                    </div>
                </div>
                <div className="w-full">
                    <h1 className="font-semibold mb-2">SUBSCRIBE TO NEWS LETTER</h1>
                    <p className="mb-4">Sign up for our newsletter to receive updates on our programs and success stories</p>
                    <form>
                        <input type="email" placeholder="Enter your email" className="p-2 text-gray-900" />
                        <button className="border border-white py-2 px-4">Subscribe</button>
                    </form>
                </div>
            </div>
            <p>© 2024 FoundAid All Rights Reserved</p>
        </div>
    )
}

export default Footer;