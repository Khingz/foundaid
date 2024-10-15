import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PublicRoute = () => {
    const { isLoggedIn } = useAuth();
    
    return isLoggedIn ? <Navigate to="/admin" /> : <Outlet />;
};

export default PublicRoute;