import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from './components/Home';
import  Navbar from './components/Navbar';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/navbar" element={<Navbar />}/>
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
