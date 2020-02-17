import React, { useState } from "react";
import useGlobalState from "../../useGlobalState";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Burger from "../Burger/Burger";

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
      <Burger navbar={navbar} />
    </div>
  );
}

export default NavBar;
