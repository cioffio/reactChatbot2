import './App.css';
import React from 'react';

function DataForm(props) {   
    
    return (
        <div>
        <button onClick={props.props.generateReport}>Fill forms</button>
        <input 
          type='text' 
          onChange={props.props.handleLegalNameChange}
          value={props.props.fullLegalName}
          disabled={props.props.loading}
          placeholder="Full Legal Name"
          className="legal-name-input-text"
          />
        <input 
          type='text' 
          onChange={props.props.handleRegisteredAddressChange}
          value={props.props.registeredAddress}
          disabled={props.props.loading}
          placeholder="Registered Address"
          className="registered-address-input-text"
          />
        </div>
    )
};

export default DataForm;