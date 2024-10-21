import { useContext } from "react";
import { NotificationContext } from "../contexts/NotificationContext";

export function useUserNofication () {
    return useContext(NotificationContext);
}