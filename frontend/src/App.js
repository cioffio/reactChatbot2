import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const responseRef = useRef(null);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Make a POST request to the backend endpoint
    const response = await fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    const updatedMessages = [
      ...messages,
      { content: message, sender: 'user', id: messages.length },
      { content: data.response, sender: 'bot', id: messages.length + 1 },
    ];
    setMessages(updatedMessages);

    setMessage('');
    scrollToBottom();
  };

  const scrollToBottom = () => {
    responseRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <h1>Chatbot</h1>
      <div className="message-container">
        {messages.map((msg) => (
          <div className={`message ${msg.sender}`} key={msg.id}>
            {msg.content}
          </div>
        ))}
        <div ref={responseRef}></div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Enter your message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
