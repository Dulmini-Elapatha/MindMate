import React, { useState } from 'react';
import axios from 'axios'; 
import './components/AppointmentsForm.css';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/schedule', formData);
      alert('Appointment scheduled successfully');
      setFormData({
        name: '',
        date: '',
        time: ''
      });
    } catch (error) {
      console.error('Error scheduling appointment:', error);
      alert('Error scheduling appointment. Please try again.');
    }
  };

  return (
    <div>
      <h2>Schedule an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Schedule Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;