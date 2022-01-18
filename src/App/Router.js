import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../Pages/Home'));

export default function Router() {
  return (<div>
    <Routes>

      <Route path='/' element={<Home />} />
    </Routes>
  </div>
  );
}
