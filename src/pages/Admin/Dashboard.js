import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { capitalize } from "../../utils";

const AdminDashboard = () => {
	const { user } = useAuth();

    return (
        <div className="text-3xl font-extralight">
            <h5 className="text-lg md:text-2xl">{user && `Hi ${capitalize(user.username)}👋, `} <span className="font-semibold">Welcome!</span></h5>
        </div>
    );
}

export default AdminDashboard;