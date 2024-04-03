import React, { useState } from "react";
import "./PatientAppointmentForm.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PatientAppointmentForm = ({ doctors, onSubmit }) => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ selectedDoctor, appointmentDate, appointmentTime });

    setSelectedDoctor("");
    setAppointmentDate("");
    setAppointmentTime("");
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h4>Patient's Appointment Form</h4>
        <form onSubmit={handleSubmit}>
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="">Select Doctor</option>
            {doctors &&
              doctors.map(
                (
                  doctor 
                ) => (
                  <option key={doctor.id} value={doctor.name}>
                    {doctor.name}
                  </option>
                )
              )}
          </select>
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
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default PatientAppointmentForm;
