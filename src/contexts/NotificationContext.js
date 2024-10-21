import { createContext, useEffect, useState } from "react";
import { fetchUserNotifications } from "../service/notificationService";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
	const [notifications, setNotifications] = useState(null);
	const [isNotificationOpen, setIsNotificationOpen] = useState(false);

	const fetchNotifications = async (page = 1) => {
		try {
			const notif = await fetchUserNotifications({ page });
			if (notif.error) {
				throw new Error(notif.message);
			}
			if (notifications === null) {
				setNotifications(notif);
				return;
			}
			setNotifications((prev) => ({
				...prev,
				data: [...prev.data, ...notif.data],
				currentPage: notif.currentPage,
				totalPage: notif.totalPage,
				unreadCount: notif.unreadCount,
			}));
		} catch (error) {
			throw error;
		}
	};

	const handleNotificationToggle = () => {
		setIsNotificationOpen(!isNotificationOpen);
	};

	useEffect(() => {
		fetchNotifications();
		// eslint-disable-next-line
	}, []);

	return (
		<NotificationContext.Provider
			value={{
				fetchNotifications,
				notifications,
				handleNotificationToggle,
				isNotificationOpen,
				setNotifications,
			}}
		>
			{children}
		</NotificationContext.Provider>
	);
};
