import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <a href="/home">MindMate</a>
            </div>
            <nav> 
                <ul className="navbar-links">
                    <li><a href="/login">Login</a></li>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/quiz">Quiz</a></li>
                    <li><a href="/chatbot">Chatbot</a></li>
                    <li><a href="/find-a-friend">Find a Friend</a></li>
                    <li><a href="/docapp">Doctor</a></li>
                    <li><a href="/aboutus">About us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;