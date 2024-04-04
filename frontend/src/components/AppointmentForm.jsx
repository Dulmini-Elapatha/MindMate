import React, { useState } from "react";
import "./AppointmentForm.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppointmentForm = ({ onSubmit }) => {
  const [doctorName, setDoctorName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState(""); // Corrected typo here

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ doctorName, appointmentDate, appointmentTime });

    setDoctorName("");
    setAppointmentDate("");
    setAppointmentTime(""); // Corrected typo here
  };

  return (
    <div>
      <Navbar/>
      <div className="container">
      <h4>Doctor's Appointment Form</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Doctor Name"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
          />
          <input
            type="date"
            placeholder="Appointment Date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
          <input
            type="time"
            placeholder="Appointment Time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <br/><br/>
      <Footer />
    </div>
  );
};

export default AppointmentForm;
