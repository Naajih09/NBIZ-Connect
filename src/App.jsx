import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layout/DashboardLayout';

// Pages
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import DashboardHome from './pages/DashboardHome';
import Opportunities from './pages/Opportunities';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import Settings from './pages/Settings';           // <--- IMPORT THIS
import FindInvestors from './pages/FindInvestors'; // <--- IMPORT THIS

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken');
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route index element={<DashboardHome />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="investors" element={<FindInvestors />} /> {/* <--- NEW ROUTE */}
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />       {/* <--- NEW ROUTE */}
        </Route>

        <Route path="*" element={<div className="text-center mt-20">404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;