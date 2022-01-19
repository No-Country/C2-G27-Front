import React, { lazy, Suspense } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../Pages/Home';

const Landing = lazy(() => import('../Pages/Landing'));

export default function Router() {
  const location = useNavigate();

  return (
    <div>
      <Suspense fallback='Loading...'>
        <Routes location={location}>
          <Route path='/' exact element={<Home />} />
          <Route path='/landing' exact element={<Landing />} />
        </Routes>
      </Suspense>
    </div>
  );
}
