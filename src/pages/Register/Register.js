import React from 'react';
import "./Register.css"

const Register = () => {
    return (
        <div className='register'>
            <h3 className="register-title">Register</h3>
            <form className="register-form">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder='Enter Your Name' />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='Enter Your Password' />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='Enter Your Password' />

                <button className='register-btn'>Login</button>
            </form>
            <button className='login-btn'>Register</button>
        </div>
    );
};

export default Register;