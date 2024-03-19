import React from 'react';
import './Aboutus.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import image from '../assets/download.png';


const AboutUs = () => {
    const teamMembers = [
        {
            name: 'Dulmini Elapatha',
            uowId: 'W1985727',
            iitId: '20222104',
            image: image,
        },
        {
            name: 'Pavan Nishoka',
            uowId: 'W2002470',
            iitId: '20220201',
            image: image,
        },
        {
            name: 'Dilsha Perera',
            uowId: 'W1998813',
            iitId: '20220223',
            image: image,
        },
        {
            name: 'P.M.J. Senarath',
            uowId: 'W1954042',
            iitId: '20221272',
            image: image,
        },
        {
            name: 'Dineshi Tharaka',
            uowId: 'W2002466',
            iitId: '20221391',
            image: image,
        },
    ];
    return (
        <div>
          <Navbar />
          <br></br>
          <br></br>
          <br></br>
                <div className="about-container">
                    <h1>Meet The Developers</h1>
                    <br></br>
                    <div className="image">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="imagemain">
                                <img src={member.image} alt={member.name} />
                                <div className="imagetitle">
                                    <p>{member.name}</p>
                                    <p>UOW ID : {member.uowId}</p>
                                    <p>IIT ID : {member.iitId}</p>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
          <Footer />
        </div>
      );
    

};

export default AboutUs;