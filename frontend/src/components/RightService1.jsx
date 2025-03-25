import React, { useState, useEffect } from 'react';
import '../styles/main.css';

const RightService1 = () => {
  const [userType, setUserType] = useState('');
  
  useEffect(() => {
    // Test localStorage
    localStorage.setItem('test', 'test value');
    console.log('Can access localStorage:', localStorage.getItem('test') === 'test value');
    
    // Get user role
    const storedUserType = localStorage.getItem('userType');
    console.log('Retrieved userType from localStorage:', storedUserType);
    setUserType(storedUserType || '');
  }, []);

  // Determine if elements should be hidden
  const isCitizen = userType === 'citizen';

  // Case management system that only judges should see
  const CaseManagementSystem = () => (
    <div className="case-management">
      <h2>Case Management System</h2>
      {/* Your case management system components */}
      <div className="case-controls">
        {/* Case management UI */}
      </div>
    </div>
  );

  return (
    <div className="right-service-container">
      <h1>Legal Services</h1>
      
      {/* Common components that all users can see */}
      <div className="common-services">
        {/* Services available to all users */}
      </div>
      
      {/* Case Dashboard - hidden for citizens */}
      <div className={`case-dashboard ${isCitizen ? 'hidden' : ''}`}>
        <h2>Case Dashboard</h2>
        {/* Case dashboard components */}
      </div>
      
      {/* Case Management System - hidden for citizens */}
      <div className={`case-management ${isCitizen ? 'hidden' : ''}`}>
        <h2>Case Management System</h2>
        {/* Case management components */}
      </div>
    </div>
  );
};

export default RightService1; 