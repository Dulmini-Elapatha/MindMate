import React from "react";
import "./Profile.css";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <div className="profile-header">
          <h2>Profile</h2>
        </div>
        <div className="profile-details">
          <div className="profile-info">
            <p>
              <strong>Name:</strong> John Doe
            </p>
            <p>
              <strong>Email:</strong> johndoe@example.com
            </p>
          </div>
        </div>
        <div className="sign-out-btn">
          <button
            onClick={() => {
              alert("You have been signed out.");
            }}
          >
            Delete Profile
          </button>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Profile;
