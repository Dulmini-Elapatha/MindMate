import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./componnents/Login";
import Signup from "./componnents/Signup";
import Home from './componnents/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
