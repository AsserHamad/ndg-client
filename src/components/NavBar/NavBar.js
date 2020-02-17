import React, { useState } from "react";
import useGlobalState from "../../useGlobalState";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

function NavBar() {
  const globalState = useGlobalState();
  const [navbar, setNavbar] = useState({});
  const lang = globalState.lang.lang;
  fetch("data/lang.json")
    .then(res => res.json())
    .then(res => setNavbar(res[lang].navbar));

  return (
    <div>
      <nav id="navbar">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="#home">
              <img src="ndg.png" className="logo" alt="logo" />
            </a>
          </div>
          <ul id="menu">
            <li>
              <Link
                to="/"
                onClick={() => globalState.setPage({ page: "home" })}
                style={{ textDecoration: "inherit", fontSize: "inherit" }}
              >
                <span className={lang}>{navbar.home}</span>
              </Link>
            </li>
            <li>
              <span className={lang}>{navbar.projects}</span>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => globalState.setPage({ page: "about" })}
                style={{ textDecoration: "inherit", fontSize: "inherit" }}
              >
                <span className={lang}>{navbar.about}</span>
              </Link>
            </li>
            <li>
              <span className={lang}>{navbar.services}</span>
            </li>
            <li>
              <span className={lang}>{navbar.contact}</span>
            </li>
          </ul>
        </div>
      </nav>

      {/*  <div className="menuIcon">
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>

      <div className="overlay-menu">
        <ul id="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* <div className="mainDiv">
        <button onClick={() => globalState.setLang(lang === 'en' ? 'ar' : 'en')}>Change Lang</button>
      </div> */}
    </div>

    /*        <Navbar bg="transparent" expand="lg">
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
            </Navbar> */
  );
}

export default NavBar;
