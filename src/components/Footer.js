import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Logo from "../assets/images/logo.png";
import { emailSubscribe } from "../service/emailSubscribeService";
import { toast } from "react-toastify";
import { showToast } from "../utils";
import Spinner from "./Spinner";

const Footer = () => {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			if (!email) {
				toast.info("Email is required");
				return;
			}
			const response = await emailSubscribe({ email });
			if (response.error) {
				showToast(response.message);
				return;
			}
			setEmail("");
			showToast("Successfully subscribed");
		} catch (error) {
			showToast(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="bg-customBlue text-white font-extralight flex flex-col items-center justify-center gap-6 py-16">
			<div className="md:w-3/4 w-full flex flex-col md:flex-row justify-between px-4 gap-4">
				<div className="w-full mb-8">
					<div className="bg-white inline-block mb-3">
						<img src={Logo} alt="logo" className="w-[150px] md:w-[200px]" />
					</div>
					<div className="flex flex-col gap-2">
						<Link to={"/about"}>About Us</Link>
						<Link to={"/career"}>Privacy Policy</Link>
						<Link to={"/career"}>Terms of Service</Link>
					</div>
				</div>
				<div className="w-full mb-8">
					<h1 className="font-semibold mb-4">CONTACT US</h1>
					<div className="flex flex-col gap-2 mb-4">
						<p>Call: +9 1-347-913-7764</p>
						<p>Fax: +9 1-347-913-7764</p>
						<p>Email: ekotso@msn.com</p>
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
					<p className="mb-4">
						Sign up for our newsletter to receive updates on our programs and
						success stories
					</p>
					<form>
						<input
							type="email"
							placeholder="Enter your email"
							className="p-2 text-gray-900"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<button
							className="border border-white py-2 px-4"
							onClick={handleSubmit}
						>
							{loading ? <Spinner size={5} /> : "Subscribe"}
						</button>
					</form>
				</div>
			</div>
			<p>© 2024 Foundaid America All Rights Reserved</p>
		</div>
	);
};

export default Footer;
