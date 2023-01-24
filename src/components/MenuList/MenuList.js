import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const MenuList = () => {
    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT"});
    }

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
            {user && (
                <li className="menu-list-item">
                    <button onClick={handleLogout}  className="route-link-btn">
                        LOGOUT
                    </button>
                </li>
            )}
        </ul>
    );
};

export default MenuList;
