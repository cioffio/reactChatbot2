import './App.css';
import React from 'react';
import Data from './IDDClippedContentVersion/Data/Data.js'
function DataForm(props) {   
    

  const generateReport = async () => {
    props.props.setLoading(true);
    props.onButtonClick(); // Call the callback function from the parent component


    // Make a POST request to the backend endpoint
    const response = await fetch('/api/report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
   
    const data1 = "Hello Everyone";
  

    const data = await response.json()
    props.props.setFullLegalName(data.full_legal_name);
    props.props.setRegisteredAddress(data.registered_address);
    props.props.setLoading(false);
  
  };

  const handleLegalNameChange = (event) => {
    props.props.setFullLegalName(event.target.value);
    
    };
  

  const handleRegisteredAddressChange = (event) => {
    props.props.setRegisteredAddress(event.target.value);

    };
  

    return (
        <div>
        <button onClick={generateReport}>Fill forms</button>
        <input 
          type='text' 
          onChange={handleLegalNameChange}
          value={props.props.fullLegalName}
          disabled={props.props.loading}
          placeholder="Full Legal Name"
          className="legal-name-input-text"
          />
        <input 
          type='text' 
          onChange={handleRegisteredAddressChange}
          value={props.props.registeredAddress}
          disabled={props.props.loading}
          placeholder="Registered Address"
          className="registered-address-input-text"
          />
           <div>
            <Data data="registered" />
        </div>
      </div>
    );
    
    }
export default DataForm;