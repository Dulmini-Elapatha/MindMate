import React from 'react'
import './Login.css';
import { FaUser,FaLock } from "react-icons/fa";

const Signup = () => {
  return (
    <div className='loginform'>
        <form action="">
            <h1>Signup</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required />
                <FaUser className='icon' />
            </div>

            <div className="input-box">
                <input type="password" placeholder='Password' required />
                <FaLock className='icon'/>
            </div>

            <div className="input-box">
                <input type="password" placeholder='Re-enter Password' required />
                <FaLock className='icon'/>
            </div>

            <div className="remember-forgot">
                <label>
                    <input type="checkbox" />Remember me
                </label>
                <a href="#">Forgot password?</a>
            </div>

            <button type="submit">Signup</button>
            <div className="register-link">
                <p>Already have an account? <a href="Login" class="link login-link">Login</a></p>
            </div>           
        </form>
    </div>
    
  );
};

export default Signup;
