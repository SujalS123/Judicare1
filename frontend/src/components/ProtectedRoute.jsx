import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, requiredRole }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userType = localStorage.getItem('userType');
  
  if (!isLoggedIn) {
    // Redirect to login if not logged in
    return <Navigate to="/login" replace />;
  }
  
  if (requiredRole && userType !== requiredRole) {
    // Redirect to unauthorized page if wrong role
    return <Navigate to="/unauthorized" replace />;
  }
  
  // Render the protected component
  return element;
};

export default ProtectedRoute; 