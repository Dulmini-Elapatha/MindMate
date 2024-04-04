import React from 'react';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar02 from './Navbar02';
import Footer from "./Footer";

const Login = () => {
    return (
        <div>
            <Navbar02/>
            <br />
            <div className='login-container'>
                <div className='loginform'>
                    <form action="">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder='Username' required />
                            <FaUser className='icon' />
                        </div>

                        <div className="input-box">
                            <input type="password" placeholder='Password' required />
                            <FaLock className='icon' />
                        </div>

                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" />Remember me
                            </label>
                            <a href="#">Forgot password?</a>
                        </div>

                        <button type="submit">Login</button>
                        <div className="register-link">
                            {/* Replace the anchor tag with Link */}
                            <p>Don't have an account? <Link to="/Signup" className="link signup-link">Signup</Link></p>
                        </div>

                    </form>
                </div>
            </div>
            <br />
            <Footer />
        </div>
    );
};

export default Login;