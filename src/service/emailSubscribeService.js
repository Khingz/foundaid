import axios from "axios";
import { getItemFromLocalStorage } from "../utils/loalStorage";
const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api/subscribers`;

axios.defaults.withCredentials = true;

export const emailSubscribe = async (credentials) => {
	try {
		const response = await axios.post(`${API_BASE_URL}/subscribe`, credentials);
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

export const fetchSubscribers = async (queryParams = {}) => {
	try {
		const token = getItemFromLocalStorage("user");

		const response = await axios.get(`${API_BASE_URL}`, {
			headers: {
				Authorization: `Bearer ${token.access_token}`,
			},
			params: queryParams
		});
		if (response.status !== 200) {
			throw new Error(`Error: ${response.statusText}`);
		}
		return response.data;
	} catch (error) {
		const errorMsg = error.response?.data?.message;
		return { error: true, message: errorMsg || "An unknown error occurred" };
	}
};
