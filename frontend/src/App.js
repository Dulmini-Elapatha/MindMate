import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Quiz from './components/Quiz';
import Signup from "./components/Signup";
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import DocApp from './components/DocApp';
import DocReg from './components/DocReg';
import Chatbot from './components/Chatbot';
import PatientReg from './components/PatientReg';
import Profile from './components/Profile';
import AppointmentsForm from './components/AppointmentsForm';
import AppointmentView from './components/AppoinmentView';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/docapp" element={<DocApp/>}/>
          <Route path="/docreg" element={<DocReg/>}/>
          <Route  path='/profile' element={<Profile />}/>
          <Route path="/chatbot" element={<Chatbot/>}/>
          <Route path="/patientreg" element={<PatientReg/>}/> 
          <Route path="/AppointsmentsForm" element={<AppointmentsForm/>}/> 
          <Route path="/AppointsmentView" element={<AppointmentView/>}/> 
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
