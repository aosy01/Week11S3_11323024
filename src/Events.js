import React, { useState } from 'react';
import './App.css'; 

function useHandleInput() {
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setDisplayText(inputValue);
    setInputValue('');
  };

  return {
    inputValue,
    displayText,
    handleChange,
    handleClick
  };
}

export default useHandleInput;
