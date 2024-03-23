import React, { useState } from 'react';
import './home.css';

const Home = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const send = () => {
    // Logic to handle sending the user message and receiving the response
    // This could involve calling an API or processing the message locally
    // For demonstration purposes, let's assume a simple echo response
    const botMessage = { id: messages.length, text: newMessage, primary: true };
    setMessages([...messages, botMessage]);
    setNewMessage('');
  };

  return (
    <div id="app" className="chat-app">
      <div className="chatbox">
        <div className="chatbox__messages">
          {messages.map((message) => (
            <div key={message.id} className={`chatbox__messageBox ${message.primary ? 'chatbox__messageBox--primary' : ''}`}>
              <div className={`chatbox__message ${message.primary ? 'chatbox__message--primary' : ''}`}>
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div className="chatbox__inputPanel">
          <input
            className="chatbox__input"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyUp={(e) => e.key === 'Enter' && send()}
            placeholder="Ask me anything"
          />
          {/* You can add your send button or any other UI components here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
