import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userIsAuthenticatedAtom, userAuthState } from '../state/isAuthenticatedAtom';

const ProtectedRoute = () => {
    const isAuthenticated = useRecoilValue(userAuthState).isAuthenticated;
    console.log("is Authenticated", isAuthenticated);
    const token = sessionStorage.getItem("token");
    console.log("Token from sessionStorage:", token);

    if (!isAuthenticated && !token) {
        return <Navigate to="/" />;
    }

    return (
        <Outlet />
    );
};

export default ProtectedRoute;
