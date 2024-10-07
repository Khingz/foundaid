import React from "react";
import { FormInput, TextArea } from "../components/ui/formElements";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdOutlinePhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
    return (
        <div className="mb-20">
            <Helmet>
                <title>Foundaid America - Contact Us</title>
                <meta name='description' content='Get in touch with us. We are ready to hear from you' />
            </Helmet>
            <div className="bg-[#333] pt-24 px-2 pb-2"></div>
            <div className="md:w-[80%] tablet:w-[100%] flex flex-col md:flex-row justify-start md:justify-between items-center px-6 mt-10 md:mt-20 mx-auto gap-6">
                <div className="w-full md:w-[40%] tablet:w-[100%]">
                    <h1 className="text-[1.8rem] md:text-[2.3rem] font-semibold">Get in touch with us</h1>
                    <p className="text-lg font-extralight">We're here to help and answer any questions you might have. Reach out to us through the following channels, and we'll get back to you as soon as possible</p>
                    <div className="my-4">
                        <h4 className="text-lg font-bold">Our Ofiice Address</h4>
                        <p className="text-lg font-extralight">Plot 123, ABC Street, XYZ City, State</p>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-bold">Our Contact</h4>
                        <p className="flex justify-start items-center text-lg gap-2 font-extralight"><span><MdOutlinePhone /></span> XXXXXXXXXXX</p>
                        <p className="flex justify-start items-center gap-2 text-lg font-extralight"><span><TfiEmail /></span> example@email.com</p>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                        <div className="flex justify-start items-center gap-3">
                            <a href="example.com" target="_blank">
                                <FaFacebookF className="text-customBlue text-xl"/>
                            </a>
                            <a href="example.com" target="_blank">
                                <FaTwitter className="text-customBlue text-xl" />
                            </a>
                            <a href="example.com" target="_blank">
                                <RiInstagramFill className="text-customBlue text-xl" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border w-full md:w-[40%] tablet:w-[100%] mx-auto text-center py-10 shadow-md">
                    <h1 className="text-[1.5rem] md:text-[2rem] px-2">Leave us a message</h1>
                    <form>
                        <FormInput placeholder={"Fullname"} type={"text"} classNames={"w-[90%]"}/>
                        <FormInput placeholder={"Email"} type={"text"} classNames={"w-[90%]"}/>
                        <TextArea classNames={"w-[90%]"} placeholder={"Enter your message"}/>
                        <FormInput type={"submit"} classNames={"w-[90%] bg-customBlue text-white"} value={"Submit"}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;