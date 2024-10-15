import React, { useState } from "react";
import { FormInput, TextArea } from "../components/ui/formElements";
import { Helmet } from "react-helmet-async";
import { Banner } from "../components/ui/Banner";
import BannerImage from "../assets/images/heroSection.jpeg";
import { createVolunteer } from "../service/volunteerService";
import { showToast } from "../utils";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const VolunteerPage = () => {
	const navigate = useNavigate();
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [country, setCountry] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [instagram, setInstagram] = useState("");
	const [facebook, setFacebook] = useState("");
	const [twitter, setTwitter] = useState("");
	const [occupation, setOccupation] = useState("");
	const [dob, setDOB] = useState("");
	const [volunteerReason, setVolunteerReason] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			const response = await createVolunteer({
				email,
				fullname,
				address,
				city,
				state,
				country,
				phone_number: phoneNumber,
				instagram,
				facebook,
				twitter,
				occupation,
				date_of_birth: dob,
				volunteer_reason: volunteerReason,
			});
			if (response.error) {
				setError(response.message);
				return;
			}
			showToast("Thank you for volunteering, we will reach out to you");
			navigate("/");
			setEmail("");
			setFullname("");
			setAddress("");
			setCity("");
			setState("");
			setPhoneNumber("");
			setInstagram("");
			setFacebook("");
			setTwitter("");
			setOccupation("");
			setDOB("");
			setVolunteerReason("");
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	useState(() => {
		setError("");
	}, []);

	return (
		<div className="mb-20">
			<Helmet>
				<title>Foundaid America - Volunteer</title>
				<meta
					name="description"
					content="Become a volunteer for foundaid america"
				/>
			</Helmet>
			<Banner image={BannerImage} />

			<div className="border md:w-[40%] w-[95%] mx-auto text-center mt-20 py-10 shadow-md">
				<h1 className="text-[2rem] md:text-[2.5rem] px-3">
					Become a Volunteer
				</h1>
				<p className="w-[80%] md:text-lg font-extralight mx-auto text-sm">
					Your time and skills can change lives. Join our dedicated community of
					volunteers and help create a lasting impact in the lives of those in
					need.
				</p>
				{error && <p className="text-red-500 text-center mt-3">{error}</p>}
				<form className=" text-center py-6">
					<FormInput
						placeholder={"Fullname"}
						type={"text"}
						classNames={"w-[90%] "}
						value={fullname}
						onChange={(e) => setFullname(e.target.value)}
					/>
					<FormInput
						placeholder={"Email"}
						type={"email"}
						classNames={"w-[90%]"}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<FormInput
						placeholder={"Residential address"}
						type={"text"}
						classNames={"w-[90%]"}
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
					<FormInput
						placeholder={"City of residence"}
						type={"text"}
						classNames={"w-[90%]"}
						value={city}
						onChange={(e) => setCity(e.target.value)}
					/>
					<FormInput
						placeholder={"State of residence"}
						type={"text"}
						classNames={"w-[90%]"}
						value={state}
						onChange={(e) => setState(e.target.value)}
					/>
					<FormInput
						placeholder={"Country of residence"}
						type={"text"}
						classNames={"w-[90%]"}
						value={country}
						onChange={(e) => setCountry(e.target.value)}
					/>
					<FormInput
						placeholder={"Phone number"}
						type={"text"}
						classNames={"w-[90%]"}
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
					<FormInput
						placeholder={"Instagram handle"}
						type={"text"}
						classNames={"w-[90%]"}
						value={instagram}
						onChange={(e) => setInstagram(e.target.value)}
					/>
					<FormInput
						placeholder={"Facebook handle"}
						type={"text"}
						classNames={"w-[90%]"}
						value={facebook}
						onChange={(e) => setFacebook(e.target.value)}
					/>
					<FormInput
						placeholder={"Twitter handle"}
						type={"text"}
						classNames={"w-[90%]"}
						value={twitter}
						onChange={(e) => setTwitter(e.target.value)}
					/>
					<FormInput
						placeholder={"Occupation handle"}
						type={"text"}
						classNames={"w-[90%]"}
						value={occupation}
						onChange={(e) => setOccupation(e.target.value)}
					/>
					<div>
						<label className="flex text-sm md:text-lg font-extralight text-gray-400 md:ml-[3rem] ml-[1.5rem] mt-2">
							Date of birth
						</label>
						<FormInput
							placeholder={"Date of Birth"}
							type={"date"}
							classNames={"w-[90%]"}
							value={dob}
							onChange={(e) => setDOB(e.target.value)}
						/>
					</div>
					<TextArea
						classNames={"w-[90%]"}
						placeholder={"What are your reasons for volunteering?"}
						value={volunteerReason}
						onChange={(e) => setVolunteerReason(e.target.value)}
					/>
					<button
						type="submit"
						className="w-[90%] h-[45px] px-4 font-semibold text-white bg-customBlue rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 flex justify-center items-center text-center mx-auto"
						onClick={handleSubmit}
					>
						{loading ? <Spinner /> : "Volunteer"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default VolunteerPage;
