import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from '../Pages/Landing';
import Home from '../Pages/Home';

const Login = lazy(() => import('../Pages/Login'));

export default function Router() {
  const location = useLocation();

  return (
    <div>
      <Suspense fallback='Loading...'>
        <Routes location={location}>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/landing' exact element={<Landing />} />
        </Routes>
      </Suspense>
    </div>
  );
}
