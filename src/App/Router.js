import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from "../Pages/Landing"
import Home from "../Pages/Home"
import Login from "../Pages/Login"

export default function Router() {
  return (<div>
    <Routes>
      <Route path='/index' exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" exact element={<Landing />} />
    </Routes>
  </div>
  );
}
