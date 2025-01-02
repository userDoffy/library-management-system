import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header.jsx';
import Login from './components/auth/Login.jsx';
import Signup from './components/auth/Signup.jsx';
import AdminDashboard from './components/admin/adminDashboard.jsx';
import UserDashboard from './components/user/userDashboard.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
