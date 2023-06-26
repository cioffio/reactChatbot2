import './App.css';
import React from 'react';

function ChatForm(props) {
    return (
    <div>
    <form onSubmit={props.props.handleSubmit} className="input-form">
        <input
        type="text"
        value={props.props.inputValue}
        onChange={props.props.handleMessageChange}
        placeholder="Enter your message"
        disabled={props.props.loading}
        className="input-text"
        />
        <button type="submit" disabled={props.props.loading} className="material-symbols-rounded">
        <i className="fas fas fa-check"></i>
        </button>
    </form>
    </div>
    )
};

export default ChatForm;