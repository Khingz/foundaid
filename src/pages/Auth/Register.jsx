import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import { showToast } from "../../utils";
import Spinner from "../../components/Spinner";

const Register = () => {
	const { register } = useAuth();
	const navigate = useNavigate();
	const [fullName, setFullName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [accessCode, setAccessCode] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			if (fullName || username || password || accessCode) {
				const newUserData = {
					fullname: fullName,
					username,
					password,
					access_code: accessCode,
				};
				await register(newUserData);
				showToast("Registration successful. Please login to continue.");
				navigate("/admin/login");
				setFullName("");
				setUsername("");
				setPassword("");
				setAccessCode("");
			}
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		setError("");
	}, []);

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md mx-2">
				<h2 className="text-2xl font-bold text-center">Register</h2>
				<p className="text-lg text-center text-gray-600 font-extralight">
					Please provide your details to create an account. Only admins can
					register.
				</p>
				{error && <p className="text-red-500 text-center">{error}</p>}
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label
							htmlFor="fullName"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							Full Name
						</label>
						<input
							type="text"
							id="fullName"
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
							className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="username"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							Username
						</label>
						<input
							type="text"
							id="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<div className="relative">
							<input
								type={showPassword ? "text" : "password"}
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							/>
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute right-2 top-2"
							>
								{showPassword ? <FaEyeSlash /> : <FaEye />}
							</button>
						</div>
					</div>
					<div>
						<label
							htmlFor="accessCode"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							Access Code
						</label>
						<input
							type="text"
							id="accessCode"
							value={accessCode}
							onChange={(e) => setAccessCode(e.target.value)}
							className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full h-[45px] px-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none flex justify-center items-center"
					>
						{loading ? <Spinner /> : "Register"}
					</button>
				</form>
				<p className="text-sm text-center text-gray-600">
					Already have an account?{" "}
					<Link to="/admin/login" className="text-blue-500 hover:underline">
						Login here
					</Link>
				</p>
				<p className="text-sm text-center text-gray-600">
					<Link to="/" className="text-blue-500 hover:underline">
						Back to Home
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
