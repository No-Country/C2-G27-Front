import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../Pages/Home';
import AdminCP from '../Pages/AdminCP';
import UserPage from '../Pages/UserPage';
import Landing from '../Pages/Landing'
import LandingHome from '../Components/LandingHome';
import Navigation from '../Components/Navigation';

export default function Router() {
  const location = useLocation();

  
  return (
    <Suspense fallback='Loading...'>
      {location.pathname === '/landing'  ? null: <Navigation />}

        
      <Routes className='Routing'>
        <Route path='/' element={<Home />} />
        <Route path='landing' element={<LandingHome />} />
        <Route path='login' element={<Landing/>} />
        <Route path='admin' element={<AdminCP />} />
        <Route path='profile' element={<UserPage />} />
      </Routes>
    </Suspense>
  );
}
