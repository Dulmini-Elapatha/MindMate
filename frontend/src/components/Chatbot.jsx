import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from './Navbar';
import Footer from './Footer';
import './Chatbot.css'

function App() {
  const [currentMessage, setCurrentMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [suggestions] = useState([
    "How do I manage stress?",
    "What is Depression?",
    "Why is mental health important?",
    "What are some relaxation techniques?"
  ]);

  const handleSend = async (messageToSend) => {
    if (!messageToSend.trim()) return;

    const newChatHistory = [...chatHistory, { sender: 'user', content: messageToSend }];
    setChatHistory(newChatHistory);
    setCurrentMessage('');

    const payload = {
      message: messageToSend,
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    try {
      const response = await fetch('http://localhost:5000/chat', options);
      const data = await response.json();
      setChatHistory((prevHistory) => [...prevHistory, { sender: 'bot', content: data.response }]);
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  return (
    <div className="App">
    <Navbar/>
      <header className="App-header">
      <div className="boder-box">
      <h1>Welcome to Mindbuddy.</h1> 
        <p>Your Guide to Emotional Wellness and Support.</p>
        <div className="main-container">
          <div className="chatbox-container">
            <div className="chat-container">
              {chatHistory.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  {message.content}
                </div>
              ))}
            </div>
            <form 
              onSubmit={(e) => { 
                e.preventDefault(); 
                handleSend(currentMessage);
              }} 
              className="message-form"
            >
              <input 
                value={currentMessage} 
                onChange={(e) => setCurrentMessage(e.target.value)} 
                placeholder="Type a message…" 
                className="message-input"
              />
              <Button 
                type="submit"
                className="send-btn"  
                variant="primary">
                Send
                </Button>
            </form>
          </div>
          <div className="suggestions-container">
          <h2>Trending prompts</h2>
            {suggestions.map((suggestion, index) => (
              <Button 
                key={index}
                variant="outline-primary"
                onClick={() => handleSend(suggestion)}
                className="suggestion-button"
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
        </div>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
