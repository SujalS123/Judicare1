import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // Log the raw response for debugging
      console.log("Login response status:", response.status);
      
      const data = await response.json();
      console.log("Login response data:", data);

      if (response.ok) {
        // Check if userType exists in the response
        if (!data.userType) {
          console.error("userType missing from login response:", data);
          setError('Server error: User type not returned');
          return;
        }
        
        // Try/catch specifically around localStorage operations
        try {
          console.log("Setting userType in localStorage:", data.userType);
          
          // Clear localStorage first
          localStorage.clear();
          
          // Set each item individually and verify
          localStorage.setItem('userType', data.userType);
          console.log("Verification - userType set:", localStorage.getItem('userType'));
          
          localStorage.setItem('userId', data.userId);
          console.log("Verification - userId set:", localStorage.getItem('userId'));
          
          localStorage.setItem('isLoggedIn', 'true');
          console.log("Verification - isLoggedIn set:", localStorage.getItem('isLoggedIn'));
          
          // Double check after a brief timeout (for async localStorage issues)
          setTimeout(() => {
            console.log("Final verification - userType:", localStorage.getItem('userType'));
          }, 100);
        } catch (storageError) {
          console.error("localStorage error:", storageError);
          setError('Browser storage error. Please enable cookies.');
          return;
        }
        
        // Only navigate after storage is confirmed
        setTimeout(() => {
          navigate('/dashboard');
        }, 200);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error("Login error:", error);
      setError('An error occurred during login. Please try again.');
    }
  };

  return (
    <div>
      {/* Render your login form here */}
    </div>
  );
};

export default Login; 