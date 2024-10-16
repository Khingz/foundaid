import React, { useState } from "react";
import { FormInput, TextArea } from "../components/ui/formElements";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdOutlinePhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { Helmet } from "react-helmet-async";
import { Banner } from "../components/ui/Banner";
import BannerImage from "../assets/images/emergency relieve.jpg";
import { showToast } from "../utils";
import { createContactUs } from "../service/contactUsService";
import Spinner from "../components/Spinner";

const ContactUs = () => {
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("")
		setLoading(true);
		try {
			const response = await createContactUs({ email, fullname, message });
			if (response.error) {
				setError(response.message);
				return;
			}
			showToast("Thank you for leaving a comment");
			setEmail("")
			setMessage("")
			setFullname("")
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	useState(() => {
		setError("")
	}, [])

	return (
		<div className="mb-20">
			<Helmet>
				<title>Foundaid America - Contact Us</title>
				<meta
					name="description"
					content="Get in touch with us. We are ready to hear from you"
				/>
			</Helmet>
			<Banner image={BannerImage} />
			<div className="md:w-[80%] tablet:w-[100%] flex flex-col md:flex-row justify-start md:justify-between items-center px-6 mt-10 md:mt-20 mx-auto gap-6">
				<div className="w-full md:w-[40%] tablet:w-[100%]">
					<h1 className="text-2xl md:text-4xl mb-2">Get in touch with us</h1>
					<p className="text-lg font-extralight">
						We're here to help and answer any questions you might have. Reach
						out to us through the following channels, and we'll get back to you
						as soon as possible
					</p>
					<div className="my-4">
						<h4 className="text-lg font-bold">Our Ofiice Address</h4>
						<p className="text-lg font-extralight">
							Plot 123, Yangs Street, Texas
						</p>
					</div>
					<div className="my-4">
						<h4 className="text-lg font-bold">Our Contact</h4>
						<p className="flex justify-start items-center text-lg gap-2 font-extralight">
							<span>
								<MdOutlinePhone />
							</span>{" "}
							+9 1-347-913-7764
						</p>
						<p className="flex justify-start items-center gap-2 text-lg font-extralight">
							<span>
								<TfiEmail />
							</span>{" "}
							ekotso@msn.com
						</p>
					</div>
					<div className="my-4">
						<h4 className="text-lg font-bold mb-4">Follow Us</h4>
						<div className="flex justify-start items-center gap-3">
							<a href="example.com" target="_blank">
								<FaFacebookF className="text-customBlue text-xl" />
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
					<h1 className="text-[1.5rem] md:text-[2rem] px-2">
						Leave us a message
					</h1>
					{error && <p className="text-red-500 text-center mt-3">{error}</p>}
					<form>
						<FormInput
							placeholder={"Enter your fullname"}
							type={"text"}
							classNames={"w-[90%]"}
							value={fullname}
							onChange={(e) => setFullname(e.target.value)}
							label={"Fullname"}
							required={true}
						/>
						<FormInput
							placeholder={"Enter your email"}
							label={"Email"}
							type={"text"}
							classNames={"w-[90%]"}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required={true}
						/>
						<TextArea
							classNames={"w-[90%]"}
							placeholder={"Enter your message"}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						<button
							type="submit"
							className="w-[90%] h-[45px] px-4 font-semibold text-white bg-customBlue rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 flex justify-center items-center text-center mx-auto"
							onClick={handleSubmit}
						>
							{loading ? <Spinner /> : "Submit"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
