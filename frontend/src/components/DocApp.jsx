import React from 'react'
import './DocApp.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import doctorImage from '../assets/doctor.png';
import sessionImage from '../assets/session.png';

const DocApp = () => {
    return (
        <div>
        <Navbar/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="doc">
                <h1>Choose Your Option</h1>
                <br></br>
                <br></br>
                <a href="/Doctor"><button><img src={doctorImage} alt="Doctor Appointment" /><br />Register as a Doctor</button></a>
                <a href="/Patient"><button><img src={sessionImage} alt="Find a Friend" /><br />Book a Session</button></a>
                
            </div>
            <br></br>
        <Footer/>
        </div>
    );
};
export default DocApp;