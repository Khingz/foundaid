import axios from "axios";
import { getItemFromLocalStorage } from "../utils/loalStorage";
const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api/notifications`;

axios.defaults.withCredentials = true;

export const fetchUserNotifications = async (queryParams = {}) => {
	try {
		const token = getItemFromLocalStorage("user");

		const response = await axios.get(`${API_BASE_URL}`, {
			headers: {
				Authorization: `Bearer ${token.access_token}`,
			},
			params: queryParams,
		});
		if (response.status !== 200) {
			throw new Error(`Error: ${response.statusText}`);
		}
		return response.data.data;
	} catch (err) {
		const errorMsg =
			err.response?.data?.message ||
			err.response?.data?.errors?.[0]?.msg ||
			"An unknown error occurred";
		return { error: true, message: errorMsg };
	}
};
