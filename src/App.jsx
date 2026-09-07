import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing '
import About from './pages/About'
import Contact from './pages/contact'
import Hero from './components/landingComponents/Hero'
import Login from './pages/Login'
import Register from './pages/Register'
import useAuth from './hooks/useAuth'
import { jwtDecode } from 'jwt-decode'
import Dashboard from './pages/Dashboard'
import AppLayout from './Layouts/AppLayout'


const App = () => {
  const { token, onLogout } = useAuth();

  const ProtectedRoutes = () => {
    try {
      const decodedToken = token ? jwtDecode(token) : null;
      const userId = decodedToken?.userid;

      if (decodedToken && decodedToken.exp) {
        const currentTime = Date.now() / 1000;

        if (currentTime > decodedToken?.exp) {
          onLogout();
          return <Navigate to="/login" />;
        }
      }

      if (!token || !userId) {
        onLogout();
        return <Navigate to="/login" />;
      }

      return <AppLayout />;
    } catch (err) {
      console.error(err);

      onLogout();
      return <Navigate to="/login" />;
    }
  };
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />

          <Route element={<ProtectedRoutes />}>

            <Route path='/dashboard' element={<Dashboard />} />

          </Route>


        </Routes>
      </BrowserRouter>
    )
  }

export default App;