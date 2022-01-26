import React ,{useState}  from 'react';
import { Nav, NavLink, NavItem, Navbar, Offcanvas, NavbarToggler, NavbarBrand, OffcanvasBody, Collapse } from 'reactstrap';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';

export default function NavBarResponsive() {

    const [isOpen, setIsOpen] = useState(false);

    return <div className='sidebar-offcanvas'>

        <Navbar
            expand="md"
            dark
            navbar
        >
            <NavbarBrand href="/">
                CriptoTech
            </NavbarBrand>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
            <Collapse navbar isOpen={isOpen}>
                <Offcanvas  isOpen={isOpen}>
                    <div className='off-header'>
                    <p className='off-title'>
                        CriptoTech
                    </p>

                    <CloseIcon onClick={() => { setIsOpen(!isOpen) }}/>
                    </div>
                    <OffcanvasBody>
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
                    </OffcanvasBody>
                </Offcanvas>

            </Collapse>
        </Navbar>

    </div>;
}
