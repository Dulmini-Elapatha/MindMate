import React from 'react'
import './Home.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import chatbotImage from '../assets/chatbot.png';
import quizImage from '../assets/quiz.png';
import doctorImage from '../assets/doctor.png';
import friendImage from '../assets/friend.png';

const Home = () => {
    return ( 
        <div>
        <Navbar/>
        <div>
        <h1 className="home-text">Empowering Minds,<br></br>Connecting Hearts<br></br>Your Path to Mental Wellness.</h1>
            <div className="home">
                <a href="/Chatbot"><button><img src={chatbotImage} alt="Chatbot" /><br />Chatbot</button></a>
                <a href="/Quiz"><button><img src={quizImage} alt="Questionnaire" /><br />Questionnaire</button></a>
                <a href="/DocApp"><button><img src={doctorImage} alt="Doctor Appointment" /><br />Doctor Appointment</button></a>
                <a href="/FindFriend"><button><img src={friendImage} alt="Find a Friend" /><br />Find a Friend</button></a>           
            </div>
        </div>
        <Footer/>
        </div>
    );
};
export default Home;