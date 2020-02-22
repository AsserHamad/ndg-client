import React, { useState, useEffect } from "react";
import useGlobalState from "../../useGlobalState";
import "./NavBar.css";
import Burger from "../Burger/Burger";
import NavBarLink from "./NavBarLink/NavBarLink";

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
          <div className="logo">
            <a href="#home">
              <img src="/ndg.png" className="logo" alt="logo" />
            </a>
          </div>
          <ul id="menu">
            <NavBarLink page={page} pageName="home" navbar={navbar} link="/" lang={lang} />
            <NavBarLink page={page} pageName="projects" navbar={navbar} link="/projects" lang={lang} />
            <NavBarLink page={page} pageName="about" navbar={navbar} link="/about" lang={lang} />
            <li>
              <span className={lang + " " + ((page==='services') ? "services" : "")}>{navbar.services}</span>
            </li>
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
