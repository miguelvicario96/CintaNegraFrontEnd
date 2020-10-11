import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'; 
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth, user } = useContext(AuthContext);

  const toggle = () => setIsOpen(!isOpen);

  const publicNavbar = () => {
    return (
      <Navbar className="navbar navbar-dark bg-dark" expand="md">
        <NavbarBrand tag={Link} to="/">Miguel App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/signup">Signup</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  } 

  const authNavbar = () => {
    return (
      <Navbar className="navbar navbar-dark bg-dark" expand="md">
        <NavbarBrand tag={Link} to="/">{`¡Bienvenid@ ${user.first_name}!`}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/logout">Logout</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/users">Usuarios</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }

  return (
    <React.Fragment>
      { isAuth ? authNavbar() : publicNavbar() }
    </React.Fragment>
  );
}

export default Navigation;