import React, { useState } from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import 'react-pro-sidebar/dist/css/styles.css';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='header'>
      <ProSidebar collapsed={open}>
        <SidebarHeader>
          <div className='logotext'>
            <p>{open ? ' ' : 'Dashboard'}</p>
          </div>
          <div className='menu-button'>
            {!open ? (
              <MenuOpenIcon onClick={handleClick} />
            ) : (
              <MenuIcon onClick={handleClick} />
            )}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            <MenuItem icon={<HomeIcon />}>Home</MenuItem>
            <MenuItem icon={<FactCheckIcon />}>Summary</MenuItem>
            <MenuItem icon={<MonetizationOnIcon />}>Assets</MenuItem>
            <MenuItem icon={<AssessmentIcon />}>Metric</MenuItem>
            <MenuItem icon={<AccountCircleIcon />}>Profile</MenuItem>
            <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
            <MenuItem icon={<LogoutIcon />}>Logout</MenuItem>
            <Menu />
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          {open ? (
            ' '
          ) : (
            <div className='user'>
              <img
                alt='user'
                src='https://pbs.twimg.com/profile_images/606196213369720832/lSvWN_q-_400x400.jpg'
              />

              <div className='user-info'>
                <h3>Martin Paz</h3>
                <h6>Admin user</h6>
              </div>
            </div>
          )}
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
}
