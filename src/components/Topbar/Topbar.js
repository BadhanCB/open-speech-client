import {
    faFacebookSquare,
    faInstagramSquare,
    faSquarePinterest,
    faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Topbar.css";

const Topbar = () => {
    const [isLogedIn, setIsLogedIn] = useState(true);

    return (
        <div className="top-bar">
            <div className="socal-container">
                <FontAwesomeIcon
                    className="top-socal-icon"
                    icon={faFacebookSquare}
                />
                <FontAwesomeIcon
                    className="top-socal-icon"
                    icon={faTwitterSquare}
                />
                <FontAwesomeIcon
                    className="top-socal-icon"
                    icon={faSquarePinterest}
                />
                <FontAwesomeIcon
                    className="top-socal-icon"
                    icon={faInstagramSquare}
                />
            </div>
            <div className="menu-container">
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
            </div>
            <div className="option-container">
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
        </div>
    );
};

export default Topbar;
