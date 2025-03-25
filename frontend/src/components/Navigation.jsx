import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Navigation = () => {
  const [userType, setUserType] = useState('');
  
  useEffect(() => {
    setUserType(localStorage.getItem('userType') || '');
  }, []);
  
  const isCitizen = userType === 'citizen';
  
  return (
    <nav className="navigation">
      <Link to="/dashboard">Dashboard</Link>
      
      {/* Case-related links - hidden for citizens */}
      <Link to="/case-dashboard" className={isCitizen ? 'hidden' : ''}>
        Case Dashboard
      </Link>
      <Link to="/case-management" className={isCitizen ? 'hidden' : ''}>
        Case Management
      </Link>
      
      {/* Other navigation links */}
    </nav>
  );
};

export default Navigation; 