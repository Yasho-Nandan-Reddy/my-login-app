import React, { useState } from 'react';
import moment from 'moment';
import './home.css';

const Home = () => {
  const [chatColor, setChatColor] = useState('#0084ff');
  const [colorPanelShown, setColorPanelShown] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [tutorialSeen, setTutorialSeen] = useState(false);

  const colors = ['#0084ff', '#ffc300', '#4af844', '#7646ff', '#a695c7', '#ff5ca1', '#fa3c4c', '#f56b78', '#33343f'];

  const [messages, setMessages] = useState([
    { id: 0, text: 'Hi there', primary: false, date: moment().format('hh:mm') },
  ]);

  const prepareMessage = (primary ) => {
    if (primary == true){
        if (newMessage.length > 0) {
            const userMessage = { id: messages.length, text: newMessage, primary: true, date: moment().format('hh:mm') };
            setMessages(state => [...state , userMessage]);
        }
    }
    else{
        let botResponse = '';
      if (newMessage.toLowerCase().includes('hi')) {
        botResponse = 'Hey, whatsup';
      } else if (newMessage.toLowerCase().includes('what are you doing')) {
        botResponse = 'Not much, what about you?';
      } else {
        botResponse = 'I am a simple chatbot, and I do not understand this message.';
      }

      const botMessage = { id: messages.length + 1, text: botResponse, primary: false, date: moment().format('hh:mm') };
      setMessages(state => [...state , botMessage]);
    }
    };
  const send = () => {
      prepareMessage(true);
      prepareMessage(false);
      // Simple chatbot responses based on user input
      setNewMessage('');
      setTutorialSeen(true);
  };

  const setColor = (color) => {
    setChatColor(color);
    setColorPanelShown(false);
  };

  return (
    <div id="app" className="chat-app">
      <div className="colorPanel" style={{ display: colorPanelShown ? 'flex' : 'none', opacity: colorPanelShown ? 'flex' : 'none' }}>
        {/* Color panel content goes here */}
      </div>

      <div className="chatbox">
        <div className="chatbox__header">
          <div className="chatbox__headerText">Robert Smith</div>
          <div className="chatbox__onlineDot"></div>
          <div className="chatbox__button" onClick={() => setColorPanelShown(!colorPanelShown)}></div>
        </div>

        <div className="chatbox__messages">
          {messages.map((message) => (
            <div key={message.id} className={`chatbox__messageBox ${message.primary ? 'chatbox__messageBox--primary' : ''}`}>
              <div className={`chatbox__message ${message.primary ? 'chatbox__message--primary' : ''}`} style={{ background: message.primary ? chatColor : 'initial' }}>
                {message.text}
                <div className="chatbox__tooltip chatbox__tooltip--left">{message.date}</div>
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
            placeholder="Aa"
          />
          <div className="chatbox__tooltip chatbox__tooltip--bottom" style={{ opacity: newMessage.length > 2 && !tutorialSeen ? 0.7 : 0 }}>
            Press enter to send the message
          </div>
          {/* You can add your send button or any other UI components here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
