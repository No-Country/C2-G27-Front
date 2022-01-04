import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../Pages/Home'));

export default function Router() {
  return (
    <Routes>
      <Route exact path='/' component={Home} />
    </Routes>
  );
}
