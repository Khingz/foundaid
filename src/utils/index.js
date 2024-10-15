import { toast } from "react-toastify";

export const showToast = (message) => {
	// Dismiss all previous toasts
	toast.dismiss();

	// Show new toast
	toast.info(message);
};
