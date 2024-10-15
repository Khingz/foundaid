import axios from "axios";
const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api/auth`;

axios.defaults.withCredentials = true;

export const registerUser = async (credentials) => {
	try {
		const response = await axios.post(`${API_BASE_URL}/register`, credentials);
		if (response.status !== 201) {
			throw new Error(`Error: ${response.statusText}`);
		}
		return response.data;
	} catch (err) {
		const errorMsg =
			err.response.data.message || err.response.data?.errors[0]?.msg;
		return { error: true, message: errorMsg || "An unknown error occurred" };
	}
};

export const loginUser = async (credentials) => {
	try {
		const response = await axios.post(`${API_BASE_URL}/login`, credentials);
		if (response.status !== 200) {
			throw new Error(`Error fetching data: ${response.statusText}`);
		}
		return response.data;
	} catch (err) {
		const errorMsg =
			err.response.data.message || err.response.data?.errors[0]?.msg;
		return { error: true, message: errorMsg || "An unknown error occurred" };
	}
};
