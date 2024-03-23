import React, { useState } from 'react';
import "./PatientReg.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PatientReg = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { fullName, email, password });
  };

  return (
    <div>
      <Navbar/>
      <div className='patient-reg'>
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
        <a href="/Patient"><button type="submit">Register</button></a>
        </div>
      </form>
    </div>
    <br/>
    <Footer/>
    </div>
  );
};

export default PatientReg;