import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="login">
            <h3 className="login-title">Login</h3>
            <form className="login-form">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Password"
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Your Password"
                />

                <button className="login-form-login-btn">Login</button>
            </form>
            <button
                className="login-form-Register-btn"
                onClick={() => navigate("/register")}
            >
                Register
            </button>
        </div>
    );
};

export default Login;
