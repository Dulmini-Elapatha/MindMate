import React from 'react';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
// import LoginNavbar from "./LoginNavbar";
import Footer from "./Footer";

const Login = () => {
    return (
        <div>
            {/* <LoginNavbar /> */}
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
                            <p>Don't have an account? <a href="/Signup" class="link signup-link">Signup</a></p>
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
