import React, { useState } from "react";
import NotificationItem from "./NotificationItem";
import DotSpinner from "../Spinner";
import { useUserNofication } from "../../hooks/useNotification";
import { getItemFromLocalStorage } from "../../utils/loalStorage";

const Notification = () => {
	const {
		notifications,
		fetchNotifications,
		markNotificationAsRead,
		deleteNotification,
		markAllAsRead
	} = useUserNofication();
	const [loading, setLoading] = useState(false);

	const user_id = getItemFromLocalStorage("user")?.user?._id;

	const handleMarkAsRead = (id) => {
		markNotificationAsRead(id, user_id);
	};

	const handleDeleteNotification = (id) => {
		deleteNotification(id, user_id);
	};

	const handleMarkAllAsRead = (user_id) => {
		markAllAsRead(user_id);
	};

	const loadMoreNotifications = () => {
		setLoading(true);
		fetchNotifications(notifications?.currentPage + 1);
		setLoading(false);
	};

	return (
		<div className=" bg-gray-400 shadow-lg rounded-sm overflow-hidden">
			<div className="flex flex-col gap-3 justify-between items-center px-6 py-4">
				<h2 className="text-white text-lg font-semibold">Notifications</h2>
				<button
					onClick={() => handleMarkAllAsRead(user_id)}
					className="bg-customBlue text-white px-3 py-1.5 rounded hover:bg-blue-600 focus:outline-none"
				>
					Mark All as Read
				</button>
			</div>

			<ul className="divide-y divide-gray-200">
				{notifications && notifications.data.length > 0 ? (
					notifications.data.map((notification, index) => (
						<NotificationItem
							key={index}
							notification={notification}
							onMarkAsRead={() =>
								handleMarkAsRead(notification?.notification?._id, user_id)
							}
							onDelete={() =>
								handleDeleteNotification(
									notification?.notification?._id,
									user_id
								)
							}
						/>
					))
				) : (
					<li className="text-gray-200 text-center py-4">No notifications</li>
				)}
			</ul>

			<div className="px-6 py-4">
				{loading ? (
					<DotSpinner />
				) : (
					<button
						onClick={loadMoreNotifications}
						className={`w-full ${
							notifications?.currentPage >= notifications?.totalPages
								? "bg-gray-300 cursor-not-allowed"
								: "bg-customBlue hover:bg-blue-400"
						} text-white px-3 py-2 rounded focus:outline-none`}
					>
						Load More
					</button>
				)}
			</div>
		</div>
	);
};

export default Notification;
