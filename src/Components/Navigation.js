import React from 'react';
import { Nav, NavLink, NavItem} from 'reactstrap';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';



export default function Navigation() {


  return (<div>

    

    <div className='sidebar'>
      <p>
        CriptoTech
      </p>
      <hr />
      <Nav vertical>
        <NavItem>
          <NavLink href="#">
            <HomeIcon />  Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <FactCheckIcon /> Summary
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <MonetizationOnIcon /> Assets
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" >
            <AssessmentIcon /> Metric
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" >
            <AccountCircleIcon /> Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" >
            <SettingsIcon /> Settings
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" >
            <LogoutIcon /> Log Out
          </NavLink>
        </NavItem>
      </Nav>

    </div>

  </div>

  );
}
