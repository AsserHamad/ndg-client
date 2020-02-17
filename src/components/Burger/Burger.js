import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import useGlobalState from "../../useGlobalState";
import './Burger.css';

function Burger(props) {
    const globalState = useGlobalState();
    const lang = globalState.lang.lang;
    const navbar = props.navbar;

    return(
        <div id="burger">
            <Menu right>
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
            </Menu>
        </div>
    )
};

export default Burger;