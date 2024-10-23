import React from "react";

const NotificationItem = ({ notification, onMarkAsRead, onDelete }) => {
	return (
		<li
			className={`p-4 flex flex-col justify-start items-start ${
				notification.isRead ? "bg-gray-200" : "bg-gray-50"
			}`}
		>
			<span
				className={`text-lg font-extralight ${
					notification.isRead ? "text-gray-600" : "text-gray-900"
				}`}
			>
				{notification.notification.message}
			</span>
			<div className="space-x-2">
				{!notification.isRead && (
					<button
						onClick={onMarkAsRead}
						className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 focus:outline-none text-sm"
					>
						Mark as Read
					</button>
				)}
				<button
					onClick={onDelete}
					className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none text-sm"
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export default NotificationItem;
