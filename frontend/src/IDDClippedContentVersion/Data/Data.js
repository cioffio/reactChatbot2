import { memo } from 'react';
import React, { useState, useRef, useEffect } from 'react';
import DataFormClient from './DataFormClient.js';
import resets from '../../_resets.module.css';
import { Help_outline } from '../Help_outline/Help_outline';
import { StText_area_ThemeLightModeDisa } from '../StText_area_ThemeLightModeDisa/StText_area_ThemeLightModeDisa';
import classes from './Data.module.css';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon4 } from './VectorIcon4';
import { VectorIcon5 } from './VectorIcon5';
import { VectorIcon6 } from './VectorIcon6';
import { VectorIcon7 } from './VectorIcon7';
import { VectorIcon8 } from './VectorIcon8';
import { VectorIcon9 } from './VectorIcon9';
import { VectorIcon10 } from './VectorIcon10';
import { VectorIcon11 } from './VectorIcon11';
import { VectorIcon12 } from './VectorIcon12';
import { VectorIcon13 } from './VectorIcon13';
import { VectorIcon14 } from './VectorIcon14';
import { VectorIcon15 } from './VectorIcon15';


/* @figmaId 143:10608 */
function Data({ props }) {
  const [fullLegalName, setFullLegalName] = useState('');
  const [registeredAddress, setRegisteredAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const onButtonClick = () => {
    console.log('Button clicked!'); // Replace with your desired logic
  };


  return (
    <div>
      <DataFormClient
        props={{
          setFullLegalName,
          setRegisteredAddress,
          setLoading,
          fullLegalName,
          registeredAddress,
          loading,
        }}
        onButtonClick={onButtonClick}
      />
    </div>
  );
};

export default Data;
