import React from 'react';
import { Nav, NavLink, NavItem } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap'
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Navigation() {
  return (
    <div>
      <div className='sidebar'>
        <p>CryptoTech</p>
        <hr />
        <Nav vertical>
          <NavItem>
            <LinkContainer to="/">
              <NavLink>
                <HomeIcon /> Home
              </NavLink>
            </LinkContainer>
          </NavItem>
          <NavItem>
            <LinkContainer to='/admin'>
              <NavLink>
                <FactCheckIcon /> Admin Panel
              </NavLink>
            </LinkContainer>
          </NavItem>
          <NavItem>
            <LinkContainer to='/profile'>
              <NavLink>
                <MonetizationOnIcon /> Assets
              </NavLink>
            </LinkContainer>
          </NavItem>
          <NavItem>
            <NavLink href='#'>
              <AssessmentIcon /> Metric
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>
              <AccountCircleIcon /> Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>
              <SettingsIcon /> Settings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>
              <LogoutIcon /> Log Out
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
}
