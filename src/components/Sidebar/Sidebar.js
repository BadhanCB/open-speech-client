import {
    faFacebook,
    faInstagram,
    faPinterest,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <span className="sidebar-title">ABOUT ME</span>
                <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Profile Pic"
                />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Architecto minus aliquam voluptas fugiat facilis dignissimos
                    quisquam praesentium veritatis rem officiis minima in, totam
                    rerum quam, iste consequuntur, eos nemo quas!
                </p>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">CATEGORIES</span>
                <ul className="sidebar-list">
                    <li className="sidebarlist-item">Life</li>
                    <li className="sidebarlist-item">Music</li>
                    <li className="sidebarlist-item">Style</li>
                    <li className="sidebarlist-item">Sports</li>
                    <li className="sidebarlist-item">Tech</li>
                    <li className="sidebarlist-item">Cinema</li>
                </ul>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">FOLLOW US</span>
                <ul className="sidebar-socal">
                    <li className="sidebar-icon">
                        <FontAwesomeIcon icon={faFacebook} />
                    </li>
                    <li className="sidebar-icon">
                        <FontAwesomeIcon icon={faTwitter} />
                    </li>
                    <li className="sidebar-icon">
                        <FontAwesomeIcon icon={faPinterest} />
                    </li>
                    <li className="sidebar-icon">
                        <FontAwesomeIcon icon={faInstagram} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
