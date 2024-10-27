import { createContext, useEffect, useState } from "react";
import { fetchUserNotifications } from "../service/notificationService";
import { useSocket } from "../hooks/useSocket";
import { getItemFromLocalStorage } from "../utils/loalStorage";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
	const [notifications, setNotifications] = useState(null);
	const [isNotificationOpen, setIsNotificationOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const socket = useSocket();

	const fetchNotifications = async (page = 1) => {
		try {
			setLoading(true);
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
		} finally {
			setLoading(false);
		}
	};

	const handleNotificationToggle = () => {
		setIsNotificationOpen(!isNotificationOpen);
	};

	const markNotificationAsRead = (notificationId, userId) => {
		const tmpNotificaion = notifications;
		const notificationToUpdate = notifications.data.find(
			(notification) => notification.notification._id === notificationId
		);
		setNotifications((prev) => ({
			...prev,
			data: prev.data.map((notification) =>
				notification.notification._id === notificationId
					? { ...notification, isRead: true }
					: notification
			),
			unreadCount: prev.unreadCount - 1 ? notificationToUpdate.isRead : prev.unreadCount,
		}));
		socket.emit("markAsRead", notificationId, userId, (response) => {
			if (!response.success) {
				console.log(response.message);
				setNotifications(tmpNotificaion);
			}
		});
	};

	const deleteNotification = (notificationId, userId) => {
		const tmpNotificaion = notifications;
		setNotifications((prev) => ({
			...prev,
			data: prev.data.filter(
				(notification) => notification.notification._id !== notificationId
			),
			totalPage: prev.totalPage - 1,
			unreadCount: prev.unreadCount - 1,
		}));
		socket.emit("deleteNotification", notificationId, userId, (response) => {
			if (!response.success) {
				setNotifications(tmpNotificaion);
			}
		});
	};

	const markAllAsRead = (userId) => {
		const tmpNotification = notifications;
		setNotifications((prev) => ({
			...prev,
			data: prev.data.map((notification) => ({
				...notification,
				isRead: true,
			})),
			unreadCount: 0,
		}));
		socket.emit("markAllAsRead", userId, response => {
			if (!response.success) {
				setNotifications(tmpNotification);
			}
		});
	};

	useEffect(() => {
		fetchNotifications();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (socket) {
			socket.on("newNotification", (notification) => {
				const user_id = getItemFromLocalStorage("user")?.user?._id;
				const formattedNotification = {
					isDeleted: false,
					isRead: false,
					user: user_id || null,
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

			socket.on("", (notification) => {});

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
				deleteNotification,
				markNotificationAsRead,
				markAllAsRead,
				loading,
			}}
		>
			{children}
		</NotificationContext.Provider>
	);
};
