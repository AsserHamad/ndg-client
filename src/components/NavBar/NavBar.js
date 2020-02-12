import React from 'react';
import './NavBar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavBar() {

  return (
            <Navbar bg="transparent" expand="lg">
                <img src="ndg.png" className="logo" alt="logo" />
                <Navbar.Toggle className="b" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="navLinks">Home</Nav.Link>
                        <NavDropdown title="PROJECTS" className="navLinks" id="basic-nav-dropdown">
                            URBAN DESIGN
                            <NavDropdown.Item href="#action/3.2">Urban Design</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Landscape</NavDropdown.Item>
                            Master Planning
                            <NavDropdown.Item href="#action/3.2">Urban Planning</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Housing</NavDropdown.Item>
                            Architecture
                            <NavDropdown.Item href="#action/3.2">Interior Design</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Architecture</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="navLinks">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
  );
}
  
export default NavBar;