import { createContext, useEffect, useState } from "react";
import { fetchUserNotifications } from "../service/notificationService";
import { useSocket } from "../hooks/useSocket";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
	const [notifications, setNotifications] = useState(null);
	const [isNotificationOpen, setIsNotificationOpen] = useState(false);
	const socket = useSocket();

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
			console.log(error);
		}
	};

	const handleNotificationToggle = () => {
		setIsNotificationOpen(!isNotificationOpen);
	};

	useEffect(() => {
		fetchNotifications();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (socket) {
			socket.on("newNotification", (notification) => {
				const formattedNotification = {
					isDeleted: false,
					isRead: false,
					user: null,
					notification: { ...notification.message },
				};

				setNotifications((prev) => {
					return {
						...prev,
						data: [formattedNotification, ...prev?.data],
						unreadCount: prev ? prev.unreadCount + 1 : 1,
						_id: formattedNotification._id,
					};
				});
			});

			return () => {
				socket.off("notification");
			};
		}
	}, [socket]);

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
