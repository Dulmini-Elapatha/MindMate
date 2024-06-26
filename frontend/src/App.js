import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Quiz from "./components/Quiz";
import Aboutus from "./components/Aboutus";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import DocApp from "./components/DocApp";
import DocReg from "./components/DocReg";
import PatientReg from "./components/PatientReg";
import Profile from "./components/Profile";
import Chatbot from './components/Chatbot';
import AppointmentForm from './components/AppointmentForm';
import PatientAppointmentForm from './components/PatientAppointmentForm';
import FindFriends from './components/RoomID';
import RoomMain from './components/Room'



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Find-a-friend/room/:roomid" element={<RoomMain/>} />
          <Route path="/Find-a-friend" element={<FindFriends />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/home" element={<Home />} />
          <Route path="/docapp" element={<DocApp />} />
          <Route path="/docreg" element={<DocReg />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/patientreg" element={<PatientReg />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/docapp" element={<DocApp/>}/>
          <Route path="/docreg" element={<DocReg/>}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path="/chatbot" element={<Chatbot/>}/>
          <Route path="/patientreg" element={<PatientReg/>}/> 
          <Route path="/AppointsmentsForm" element={<AppointmentForm/>}/> 
          <Route path="/PatientAppointmentForm" element={<PatientAppointmentForm/>}/> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
