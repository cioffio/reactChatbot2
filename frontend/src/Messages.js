import './App.css';
import React from 'react';


function Messages(props) {
    return(
        <div>
        {props.props.messages.map((msg) => (
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
        <div ref={props.props.responseRef}></div>
        </div>
    )
};

  

export default Messages;