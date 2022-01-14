import '../Assets/App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SideBar from './components/sidebar/SideBar';
import Content from './components/content/Content';

import Router from './Router';
import { Container } from '@mui/material';

function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  return (
    <div className='App'>
      <Container
        style={{
          padding: '0',
        }}
      ></Container>
      <Router />
    </div>
  );
}

export default App;
