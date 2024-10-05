import React, { useState } from "react";
import { MdOutlinePhone } from "react-icons/md";
import { Link } from "react-router-dom";
import { FormInput } from "../components/ui/formElements";
import { FaCcPaypal } from "react-icons/fa";
import { convertToTwoDecimal, digitOnly } from "../utils/handleDigit";
import { Helmet } from "react-helmet-async";

const DonatePage = () => {
    const [amount, setAmount] = useState("");

    const handleChange = (e) => {
        const value = digitOnly(e.target.value);
        if (value !== undefined) {
            setAmount(value);
        }
    }

    return (
        <div className="mb-20">
            <Helmet>
                <title>Foundaid America - Donate</title>
                <meta name='description' content='Support our cause. Donate to help foundaid america push her mission' />
            </Helmet>
            <div className="bg-[rgb(51,51,51)] pt-24 px-2 pb-2"></div>
            <div className="md:w-[80%] tablet:w-[100%] flex flex-col md:flex-row justify-start md:justify-between items-center px-6 mt-10 md:mt-20 mx-auto gap-6">
                <div className="w-full md:w-[40%] tablet:w-[100%]">
                    <h4 className="text-2xl md:text-4xl mb-2">Donate to Support Our Cause</h4>
                    <p className="text-lg font-extralight">Your support helps us continue our mission and make a difference. We appreciate every contribution, no matter how big or small. Below are the details for making a local transfer, and if you have any questions or need assistance, feel free to contact us.</p>
                    <div className="my-4">
                        <h4 className="text-lg font-bold">How Donations Are Used</h4>
                        <ul className="list-disc ml-5">
                            <li className="text-lg font-extralight">80% Program Services</li>
                            <li className="text-lg font-extralight">15% Administration and Operations</li>
                            <li className="text-lg font-extralight">5% Fundraising</li>
                        </ul>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-bold">Bank Details</h4>
                        <p className="text-lg font-extralight"><span>Bank Name:</span> Example Name</p>
                        <p className="text-lg font-extralight"><span>Account Name:</span> Example Name</p>
                        <p className="text-lg font-extralight"><span>Account Number:</span> Example Number</p>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-bold">Phone Support</h4>
                        <p className="text-lg font-extralight">If you encounter any issues or need assistance with your donation, please reach out to us via phone.</p>
                        <p className="flex justify-start items-center text-lg gap-2 font-extralight"><span><MdOutlinePhone /></span> +1 (XXX) XXXXXXXX</p>
                    </div>
                    <p>For further inquiries or support, feel free to visit our <Link to={"/contact"} className="text-customBlue">Contact page </Link>.</p>
                </div>
                <div className="border w-full md:w-[40%] tablet:w-[100%] mx-auto text-center py-10 shadow-md">
                    <div className="text-customBlue md:text-8xl text-5xl mb-2 flex justify-center items-center">
                        <FaCcPaypal />
                    </div>
                    <h1 className="text-[1rem] md:text-[1.5rem] px-2">Donate using paypal</h1>
                    <FormInput type={"text"} classNames={"w-[90%]"} placeholder={"Enter donation amount"} value={amount} onChange={handleChange} />
                    {amount && <p className="md:text-lg font-extralight text-left w-[90%] mx-auto">
                        You are donating
                        <span className="font-semibold md:text-xl ml-2">${convertToTwoDecimal(amount)}</span>
                        </p>}
                    {/* <div className="w-[90%] my-4 mx-auto z-0">
                        <PaypalDonationBtn amount={amount} onSuccess={handlePaymentSuccess} />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default DonatePage;