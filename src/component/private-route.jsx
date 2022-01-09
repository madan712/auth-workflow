import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../service/auth-service';

export default function PrivateRoute({ children }) {
	const location = useLocation();
	return (isAuthenticated() ? children : <Navigate to="/login" state={{ from: location }} replace />);
}