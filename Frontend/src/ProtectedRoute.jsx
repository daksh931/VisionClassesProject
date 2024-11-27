import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
    const navigate = useNavigate();
    const { token, userData } = useSelector((state) => state.auth)

    useEffect(() => {
    if (token == null || userData.role == null) {
        navigate('/');  // Redirect non-admin users to the homepage
      }

    if (userData == null && token != null) {
    //   console.log(userData)
      return navigate('/logout');
    }
    },[token, userData, navigate])

    if(token !== null && userData){
        return <Outlet />
    }
}

export default ProtectedRoute;
