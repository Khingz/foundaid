import { toast } from "react-toastify";

export const showToast = (message) => {
	// Dismiss all previous toasts
	toast.dismiss();

	// Show new toast
	toast.info(message);
};

export const capitalize = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
