import React from 'react';
import {
  FaHome,
  FaBriefcase,
  FaPaperPlane,
  FaQuestion,
  FaImage,
  FaCopy,
} from 'react-icons/fa';
import { NavItem, NavLink, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <Nav vertical className='list-unstyled pb-3'>
        <p>App</p>
        <NavItem>
          <NavLink tag={Link} to='#'>
            <FaHome /> Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to='#'>
            <FaBriefcase /> About
          </NavLink>
        </NavItem>
        <NavLink tag={Link} to='#'>
          <FaCopy /> Pages
        </NavLink>
        <NavItem>
          <NavLink tag={Link} to='#'>
            <FaImage /> Portfolio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to='#'>
            <FaQuestion />
            FAQ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to='#'>
            <FaPaperPlane />
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navigation;
