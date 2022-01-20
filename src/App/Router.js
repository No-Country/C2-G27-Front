import React, { Suspense } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../Pages/Home';
import AdminCP from '../Pages/AdminCP';
import Landing from '../Pages/Landing';
import Navigation from '../Components/Navigation';

export default function Router() {
  const navigate = useNavigate();
  return (
    <Suspense fallback='Loading...'>
      {navigate === 'landing' ? null : <Navigation />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='landing' element={<Landing />} />
        <Route path='admin' element={<AdminCP />} />
      </Routes>
    </Suspense>
  );
}
