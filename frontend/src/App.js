import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const responseRef = useRef(null);
  const [fullLegalName, setFullLegalName] = useState('');

  useEffect(() => {
    // Fetch initial message when the component mounts
    fetchMessage('Hello myGPT!');
  }, []);

  const fetchMessage = async (message) => {
    setLoading(true);

    // Make a POST request to the backend endpoint
    const response = await fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    // Update the messages with the received response
    const updatedMessages = [
      ...messages,
      { content: message, sender: 'user', id: messages.length },
      { content: data.response, sender: 'bot', id: messages.length + 1 },
    ];
    setMessages(updatedMessages);

    setInputValue('');
    setLoading(false);
    scrollToBottom();
  };

  const handleMessageChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      return;
    }

    // Fetch response when the user sends a message
    await fetchMessage(inputValue);
  };

  const scrollToBottom = () => {
    responseRef.current.scrollIntoView({ behavior: 'smooth' });
  };
// RW - CREATING FUNCTION /////////////////////////////////////////
  const generateReport = async () => {
    setLoading(true);

    // Make a POST request to the backend endpoint
    const response = await fetch('/api/report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({ message }),
    });
    const data = await response.json()
    setFullLegalName(data.full_legal_name)
    setLoading(false);
    // const handleReportChange = (event) => {
    //   setFullLegalName(response.json().full_legal_name)
    // }
  }

  const handleLegalNameChange = (event) => {
    setFullLegalName(event.target.value);
  }



// RW - END /////////////////////////////////////////
  return (
    <div className="App">
      <h1>MyGPT</h1>
      
      <div className="message-container">
      {messages.map((msg) => (
        <div className={`message ${msg.sender}`} key={msg.id}>
          <div className="logo-container">
          {msg.sender === 'bot' ? (
            <img src="logo192.png" alt="bot-img" className="logo" />
          ) : (
            <img src="icons8-user-100-2.png" alt="user-img" className="logo" />
          )}
          </div>
          <div className="text-container">
            {msg.content}
          </div>
        </div>
      ))}
      <div ref={responseRef}></div>
    </div>

      <div className="bottom-container">
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={inputValue}
          onChange={handleMessageChange}
          placeholder="Enter your message"
          disabled={loading}
          className="input-text"
        />
        <button type="submit" disabled={loading} className="material-symbols-rounded">
          <i className="fas fas fa-check"></i>
        </button>
      </form>
        <button onClick={generateReport}>Fill forms</button>
        <input 
          type='text' 
          onChangevalue={handleLegalNameChange}
          value={fullLegalName}
          placeholder="Full Legal Name"
          className="legal-name-input-text"
          />
    </div>
    </div>
  );
}

export default App;
