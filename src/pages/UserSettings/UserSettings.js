import React from "react";
import "./UserSettings.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

const UserSettings = () => {
    return (
        <div className="user-settings">
            <div className="user-settings-wrapper">
                <div className="user-setting-title">
                    <span className="user-setting-update">Update Profile</span>
                    <span className="user-setting-delete">Delete Profile</span>
                </div>
                <form className="user-settings-form">
                    <label>Profile Picture</label>
                    <div className="userPP">
                        <img
                            src="https://images.pexels.com/photos/210661/pexels-photo-210661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Profile Pic"
                        />
                        <label htmlFor="profilePic">
                            <FontAwesomeIcon icon={faUserCircle} className="profile-pic-icon" />
                        </label>
                        <input type="file" name="profilePic" id="profilePic" style={{display: "none"}} />
                    </div>
                    <label htmlFor="name">User Name</label>
                    <input type="text" name="name" id="name" placeholder="Badhan" />

                    <label htmlFor="userName">Email</label>
                    <input type="email" name="email" id="email" placeholder="abc@mail.com" />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Type Your Password" />

                    <button type="submit" className="user-settings-submit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
};

export default UserSettings;
