import React from 'react';
import './DocApp.css';
import Navbar from './Navbar';
import Footer from './Footer';
//import firebase from 'firebase';
import doctorImage from '../assets/doctor.png';
import sessionImage from '../assets/session.png';

const DocApp = () => {
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <div className="doc">
                <h1>Choose Your Option</h1>
                <br />
                <br />
                <div className="doc-container">
                    <div>
                        <a href="/DocReg">
                            <button>
                                <img src={doctorImage} alt="Doctor Appointment" />
                                <br />
                                Register as a Doctor
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href="/PatientReg">
                            <button>
                                <img src={sessionImage} alt="Find a Friend" />
                                <br />
                                Register as a Patient
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </div>
    );
};

export default DocApp;
