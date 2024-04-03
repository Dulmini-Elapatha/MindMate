import React, { useState } from 'react';
import './AppointmentForm.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppointmentForm = ({ onSubmit }) => {
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ doctorName, appointmentDate,appointmentTime });
    setPatientName('');
    setDoctorName('');
    setAppointmentDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Patient Name"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
      />
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
  );
};

export default AppointmentForm;

