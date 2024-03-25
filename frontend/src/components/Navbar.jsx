import React, { useState } from "react";
import "./Navbar.css";
import image from "../assets/download.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <a href="/home">MindMate</a>
      </div>
      <nav>
        <ul className="navbar-links">
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/quiz">Quiz</a>
          </li>
          <li>
            <a href="/chatbot">Chatbot</a>
          </li>
          <li>
            <a href="/find-a-friend">Find a Friend</a>
          </li>
          <li>
            <a href="/docapp">Doctor</a>
          </li>
          <li>
            <a href="/aboutus">About us</a>
          </li>
          <button onClick={toggleDropdown} className="profile-button">
            <img className="profile-button-image" src={image} alt="Profile" />
          </button>
          <div className="dropdown">
            {dropdownOpen && (
              <div className="dropdown-content">
                <a href="/profile">My Profile</a>
                <a href="/logout">Logout</a>
              </div>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
