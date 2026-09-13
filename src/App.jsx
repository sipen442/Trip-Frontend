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
import { AddTrip } from './pages/trips/AddTrip'
import { TripDetails } from './pages/trips/TripDetails'
import { Trip } from './pages/trips/Trip'
import EditTrip from './pages/trips/EditTrip'


const App = () => {
  const { token, onLogout } = useAuth();

  const ProtectedRoutes = () => {
    try {
      const decodedToken = token ? jwtDecode(token) : null;
      console.log(decodedToken)
      const userId = decodedToken?.userId;

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
            <Route path='/trips' element={<Trip/>} />
            <Route path='/trips/Add' element={<AddTrip/>} />
            <Route path='/trips/:id' element={<TripDetails/>} />
            <Route path='/trips/edit/:id' element={<EditTrip/>} />

          </Route>


        </Routes>
      </BrowserRouter>
    )
  }

export default App;