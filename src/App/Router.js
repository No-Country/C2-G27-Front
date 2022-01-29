import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../Pages/Home';
import AdminCP from '../Pages/AdminCP';
import UserPage from '../Pages/UserPage';
import CreateUser from '../Pages/CreateUser';
import Landing from '../Pages/Landing';
import Navigation from '../Components/Navigation';

export default function Router() {
  const location = useLocation();
  return (
    <Suspense fallback='Loading...'>
      {location.pathname === '/landing' ? null : <Navigation />}
      <Routes className='Routing'>
        <Route path='/' element={<Home />} />
        <Route path='landing' element={<Landing />} />
        <Route path='admin' element={<AdminCP />} />
        <Route path='profile' element={<UserPage />} />
        <Route path='create' element={<CreateUser />} />
      </Routes>
    </Suspense>
  );
}
