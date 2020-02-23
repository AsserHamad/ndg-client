import React, { useState, useEffect } from "react";
import useGlobalState from "../../useGlobalState";
import "./NavBar.css";
import Burger from "../Burger/Burger";
import NavBarLink from "./NavBarLink/NavBarLink";
import { Link } from 'react-router-dom';

function NavBar() {
  const globalState = useGlobalState(),
        [navbar, setNavbar] = useState({}),
        lang = globalState.lang.lang,
        page = globalState.page.page;
  useEffect(() => {
    fetch("/data/lang.json")
      .then(res => res.json())
      .then(res => setNavbar(res[lang].navbar));
  }, []);

  return (
    <div>
      <nav id="navbar">
        <div className="nav-wrapper">
        <Link
        className="logo"
        to="/"
        onClick={() => globalState.setPage({ page: "home" })}
        style={{ textDecoration: "inherit", fontSize: "inherit" }}
        >
              <img src="/ndg.png" className="logo" alt="logo" />
        </Link>
          <ul id="menu">
            <NavBarLink page={page} pageName="home" navbar={navbar} link="/" lang={lang} />
            <NavBarLink page={page} pageName="projects" navbar={navbar} link="/projects" lang={lang} />
            <NavBarLink page={page} pageName="about" navbar={navbar} link="/about" lang={lang} />
            <NavBarLink page={page} pageName="services" navbar={navbar} link="/services" lang={lang} />
            <li>
              <span className={lang + " " + ((page==='contact') ? "contact" : "")}>{navbar.contact}</span>
            </li>
          </ul>
        </div>
      </nav>
      <Burger navbar={navbar} />
    </div>
  );
}

export default NavBar;
