import React, { useState } from 'react';

const NewRestaurantForm = ({ onSave }) => {
  const [inputText, setInputText] = useState('');

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  }

  return(
    <div>
      <input 
        type="text"
        value={inputText}
        onChange={handleTextChange}
        data-test="newRestaurantName"
      />
      <button
        onClick={() => onSave(inputText)}
        data-test="saveNewRestaurantButton">
          Save
      </button>
    </div>
  )
}

export default NewRestaurantForm