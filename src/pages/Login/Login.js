import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("https://open-speech-server-production.up.railway.app/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/");
        } catch (e) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };

    return (
        <div className="login">
            <h3 className="login-title">Login</h3>
            <form onSubmit={handleSubmit} className="login-form">
                <label htmlFor="username">User Name</label>
                <input
                    type="username"
                    name="username"
                    id="username"
                    placeholder="Enter Your User Name"
                    ref={userRef}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Your Password"
                    ref={passwordRef}
                />

                <button
                    type="submit"
                    className="login-form-login-btn"
                    disabled={isFetching}
                >
                    Login
                </button>
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
