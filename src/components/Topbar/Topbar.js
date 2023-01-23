import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Topbar.css";
import SocialOption from "../SocialOption/SocialOption";
import MenuList from "../MenuList/MenuList";

const Topbar = () => {
    const [isLogedIn, setIsLogedIn] = useState(false);
    const [isMenuShowed, setIsMenuShowed] = useState(false);

    const sideBar = () => setIsMenuShowed(prevSt => !prevSt);

    return (
        <div className="top-bar">
            <div className={isMenuShowed ? "socal-container active" : "socal-container"}>
                <SocialOption />
            </div>
            <div className={isMenuShowed ? "menu-container active" : "menu-container"}>
                <MenuList />
            </div>
            <div className={isMenuShowed ? "option-container active" : "option-container"}>
                {isLogedIn ? (
                    <Link to={"/settings"}>
                        <img
                            className="top-image"
                            src="https://images.pexels.com/photos/210661/pexels-photo-210661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Banner Img"
                        />
                    </Link>
                ) : (
                    <>
                        <ul className="menu-list">
                            <li className="menu-list-item">
                                <Link to={"/login"} className="route-link">
                                    LOGIN
                                </Link>
                            </li>
                            <li className="menu-list-item">
                                <Link to={"/register"} className="route-link">
                                    REGISTER
                                </Link>
                            </li>
                        </ul>
                    </>
                )}
                <FontAwesomeIcon className="top-search-icon" icon={faSearch} />
            </div>
            <button className="toggle-btn" onClick={sideBar}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
    );
};

export default Topbar;
