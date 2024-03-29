import React, { useState } from 'react';
import './DocReg.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
//import { auth } from './components/config/firebase';
import { auth } from '../../config/firebase';


const DoctorRegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [SLMCNumber, setSLMCNumber] = useState(''); 
  const [error, setError] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { fullName, email, password, specialization, experience, additionalInfo, SLMCNumber });
  };

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log('Logging in...');
    } catch (error) {
      console.error('Login failed:', error.message);
      setError(error.message);
    }
  };

  return (
    <div>
      <Navbar/>
      <div className='container'>
        <h4>Doctor Registration</h4><hr/><br/>
        <form onSubmit={handleSubmit}>
          <div>
            <p>Full Name:</p>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <br/>
        <div className='label'>
          <p>Email:</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br/>
        <div className='label'>
          <p>Password:</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br/>
        <div className='label'>
          <p>Specialization:</p>
          <input
            type="text"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            required
          />
        </div>
        <br/>
        <div className='label'>
          <p>Years of Experience:</p>
          <input
            type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />
        </div>
        <br/>
        <div className='label'>
          <p>SLMC Number:</p>
          <input
            type="text"
            value={SLMCNumber}
            onChange={(e) => setSLMCNumber(e.target.value)}
            required
          />
        </div>
        <br/>
        <div className='label'>
          <p>Additional Information:</p>
          <textarea
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
          />
        </div>
          <div>
            <br/>
            <a href="/Doctor"><button type="submit">Register</button></a>
            <button type="button" onClick={handleLogin}>Login</button> 
          </div>
        </form>
      </div>
      <br/> <br/>
      <Footer />
    </div>
  );
};

export default DoctorRegistrationForm;
