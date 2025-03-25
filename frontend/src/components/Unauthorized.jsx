import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="unauthorized-container">
      <h1>Unauthorized Access</h1>
      <p>You do not have permission to view this page.</p>
      <Link to="/dashboard">Return to Dashboard</Link>
    </div>
  );
};

export default Unauthorized; 