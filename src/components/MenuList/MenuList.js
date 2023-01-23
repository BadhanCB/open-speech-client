import React from "react";
import { Link } from "react-router-dom";

const MenuList = () => {
    return (
        <ul className="menu-list">
            <li className="menu-list-item">
                <Link to={"/"} className="route-link">
                    HOME
                </Link>
            </li>
            <li className="menu-list-item">
                <Link to={"/about"} className="route-link">
                    ABOUT
                </Link>
            </li>
            <li className="menu-list-item">
                <Link to={"/contact"} className="route-link">
                    CONTACT
                </Link>
            </li>
            <li className="menu-list-item">
                <Link to={"/write"} className="route-link">
                    WRITE
                </Link>
            </li>
        </ul>
    );
};

export default MenuList;
