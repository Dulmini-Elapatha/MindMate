import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import './RoomID.css'; 

const RoomID = () => {
  const [value, setValue] = useState('');

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`Room/${value}`);
  };

  return (
    <div>
      <Navbar/>
    <div className="home-container">
      <div className="join-room-section">
        <label htmlFor="roomId">Enter Room ID:</label>
        <input 
          type="text" 
          placeholder='Enter Room id'
          onChange={(e) => setValue(e.target.value)}
          name="roomId" 
          id="roomId" 
          className="room-id-input"
        />
        <button onClick={handleClick} className="join-room-button">Join</button>
      </div>
    </div>
    </div>
  );
};

export default RoomID;