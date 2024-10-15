import axios from "axios";
const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api/contact-us`;

axios.defaults.withCredentials = true;

export const createContactUs = async (credentials) => {
	try {
		const response = await axios.post(`${API_BASE_URL}`, credentials);
		if (response.status !== 201) {
			throw new Error(`Error: ${response.statusText}`);
		}
		return response.data;
	} catch (error) {
		const errorMsg =
			error.response.data.message || error.response.data?.errors[0]?.msg;
		return { error: true, message: errorMsg || "An unknown error occurred" };
	}
};
