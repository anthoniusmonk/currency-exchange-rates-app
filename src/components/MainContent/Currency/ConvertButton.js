import React from 'react';
import './ConvertButton.css'; // Import custom CSS for the button

const ConvertButton = ({ handleConvert }) => {
  return (
    <button type="button" className="convert-button" onClick={handleConvert}>
      Convert
    </button>
  );
};

export default ConvertButton;
