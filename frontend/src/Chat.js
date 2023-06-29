import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import DataForm from './DataForm.js';
import ChatForm from './ChatForm.js';
import Messages from './Messages.js';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const responseRef = useRef(null);

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
// TODO: create these variables using more compact notation (you can define a single that stores all of these, don't have time to look up and test the exact syntax)
  const [fullLegalName, setFullLegalName] = useState('');
  const [registeredAddress, setRegisteredAddress] = useState('');

  return (
    <div className="App">
      <h1>MyGPT</h1>
      
      <div className="message-container">
      <Messages 
        props = {{
          messages,
          responseRef
        }}
      />
      <div ref={responseRef}></div>
    </div>

      <div className="bottom-container">
      <ChatForm 
        props = {{
          handleSubmit,
          inputValue,
          handleMessageChange,
          loading
        }}
      />
      
      <DataForm 

        props={{
          // generateReport,
          // handleLegalNameChange,
          // handleRegisteredAddressChange,
          setFullLegalName,
          setRegisteredAddress,
          setLoading,
          fullLegalName,
          registeredAddress,
          loading
          }}    
      />
    </div>
    </div>
  );
};

export default Chat;