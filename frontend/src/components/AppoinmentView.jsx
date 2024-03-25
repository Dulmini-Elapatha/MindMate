//AppointmentView.jsx
import React from "react";
import "./AppointmentView.css";
import Navbar from "./LoginNavbar";
import Footer from "./Footer";



const AppointmentView = () => {
  return (
    <div>
      <Navbar/>
      <table className=" View Appointment">
      <thead>
        <tr>
          <th>Date </th>
          <th>Time </th>
          <th>Cancel Booking </th>
          <th>Log Out</th>
        </tr>
      </thead>
    </table>
    <br/>
    <br/>
    <Footer/>
    
    </div>
  );
};

export default AppointmentView 
