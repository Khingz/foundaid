import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import { showToast } from "../../utils";
import Spinner from "../../components/Spinner";

const Login = () => {
	const { login } = useAuth();
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("")
		setLoading(true)
		try {
			if (!username || !password) {
				setError("Both fields are required.");
			} else {
				const data = {
					username,
					password
				}
				await login(data);
				showToast("Login successful.");
				navigate('/admin');
				setUsername("");
				setPassword("");
			}
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false)
		}
	};

	useEffect(() => {
		setError("")
	}, [])

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md mx-2">
				<h2 className="text-2xl font-bold text-center">Login</h2>
				<p className="text-lg text-center text-gray-600 font-extralight">
					Please log in to access the admin panel. Only admins can log in.
				</p>
				{error && <p className="text-red-500 text-center">{error}</p>}
				<form onSubmit={handleSubmit} className="space-y-4">
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
					<button
						type="submit"
						className="w-full h-[40px] px-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex justify-center items-center"
					>
						{
							loading ? <Spinner /> : "Login"
						}
					</button>
				</form>
				<p className="text-sm text-center text-gray-600">
					Don't have an account?{" "}
					<Link to="/admin/register" className="text-blue-500 hover:underline">
						Register here
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

export default Login;
