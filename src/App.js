import React from 'react';
import useHandleInput from './Events';

function App() {
  const { inputValue, displayText, handleChange, handleClick } = useHandleInput();

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Simpan</button>
      <p>Text yang disimpan: {displayText}</p>
    </div>
  );
}

export default App;
