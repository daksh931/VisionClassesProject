import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
    const { userData } = useSelector((state) => state.auth);

    // Check if the user is an admin
    if (userData && userData.role === 'admin') {
        return <Outlet />; // Render child routes
    }

    return <Navigate to="/" />; // Redirect to home if not admin
};

export default AdminRoute;
