import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Container } from 'reactstrap';
import Home from '../Pages/Home';

const Landing = lazy(() => import('../Pages/Landing'));

export default function Router() {
  const location = useLocation();

  return (
    <Container className="w-100">
      <Suspense fallback='Loading...'>
        <Routes location={location}>
          <Route path='/' exact element={<Home />} />
          <Route path='/landing' exact element={<Landing />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
