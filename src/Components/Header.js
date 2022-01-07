import { useState, React } from 'react';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';
import Landing from '../Pages/Landing';


export default function Header() {

    // Collapse isOpen State
    const [isOpen, setIsOpen] = useState(false);
    return <div >
        <Navbar  dark expand="md" className='nav-bg'> 
            <NavbarBrand href="/" color="light">DashBoard</NavbarBrand>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
            <Collapse isOpen={isOpen} navbar className="justify-content-end" >
                <Nav className="mr-auto navegador" navbar>
                    <NavItem>
                        <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" light  className="btn-link">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"  light className="btn-link">Signup</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        <Landing />

    </div>

        ;
}
