import React, { useState, useEffect } from 'react';

const LocalStorageTester = () => {
  const [testResult, setTestResult] = useState('');
  const [storedUserType, setStoredUserType] = useState('');
  
  useEffect(() => {
    // Test basic localStorage functionality
    try {
      localStorage.setItem('testKey', 'testValue');
      const retrieved = localStorage.getItem('testKey');
      
      if (retrieved === 'testValue') {
        setTestResult('localStorage is working correctly');
      } else {
        setTestResult('localStorage set/get mismatch');
      }
      
      // Check current userType
      const currentUserType = localStorage.getItem('userType');
      setStoredUserType(currentUserType || 'Not set');
      
    } catch (error) {
      setTestResult(`localStorage error: ${error.message}`);
    }
  }, []);
  
  const handleManualSet = () => {
    try {
      localStorage.setItem('userType', 'judge');
      setStoredUserType(localStorage.getItem('userType') || 'Failed to set');
    } catch (error) {
      console.error("Manual set error:", error);
    }
  };
  
  return (
    <div style={{margin: '20px', padding: '20px', border: '1px solid #ccc'}}>
      <h2>localStorage Test</h2>
      <p>Test result: {testResult}</p>
      <p>Current userType in localStorage: {storedUserType}</p>
      <button onClick={handleManualSet}>Manually set userType to "judge"</button>
    </div>
  );
};

export default LocalStorageTester; 