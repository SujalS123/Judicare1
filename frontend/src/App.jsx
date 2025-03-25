import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';
import CaseManagement from './components/CaseManagement';
import Unauthorized from './components/Unauthorized';
import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
      <Route path="/case-management" element={<ProtectedRoute element={<CaseManagement />} requiredRole="judge" />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      {/* Other routes */}
    </Routes>
  );
}

export default App; 