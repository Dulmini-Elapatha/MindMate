// Signup.jsx

import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import firebase, { app, analytics, auth } from '../firebase';
import Navbar02 from './Navbar02';

function Signup() {
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
 

    const submit = async (e) => {
        e.preventDefault();
        try {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                setError("Please enter a valid email address");
                return;
            }
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
            if (user) {
                alert("Account created successfully");
            }
        } catch(error) {
            setError(error.message);
        }
    };
    return (
        <div>
            <Navbar02/>
            <div className='login-container'>
        <div className='loginform'>
            <form action="">
                <h1>Signup</h1>
                <div className="input-box">
                    <input type="text" value={email} placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                    <FaUser className='icon' />
                </div>

                <div className="input-box">
                    <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className='icon'/>
                </div>

                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />Remember me
                    </label>
                    <a href="#">Forgot password?</a>
                </div>
                <div>
                    <button onClick={submit} className='log_button'>Signup</button>
                    {error && <p className="error-message">{error}</p>}
                </div>
                <div className="register-link">
                    <p>Already have an account? <a href="/Login" className="link login-link">Login</a></p>
                </div>           
            </form>
        </div>
        </div>
    </div>
    );
}

export default Signup;
