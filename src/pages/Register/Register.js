import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post(
                "https://open-speech-server-production.up.railway.app/auth/register",
                {
                    username,
                    email,
                    password,
                }
            );

            res.data && navigate("/login");
        } catch (e) {
            setError(true);
        }
    };

    return (
        <div className="register">
            <h3 className="register-title">Register</h3>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="userName">User Name</label>
                <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="Enter Your User Name"
                    onBlur={(e) => setUserName(e.target.value)}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Password"
                    onBlur={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Your Password"
                    onBlur={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className="register-form-register-btn">
                    Register
                </button>
            </form>
            <button
                className="register-form-login-btn"
                onClick={() => navigate("/login")}
            >
                Login
            </button>
            {error && <span className="warning">Someting Went Wrong</span>}
        </div>
    );
};

export default Register;
