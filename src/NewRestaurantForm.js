import React, { useState } from 'react';
import { Button, TextInput } from 'react-materialize';

const NewRestaurantForm = ({ onSave }) => {
  const [inputText, setInputText] = useState('');

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  }

  return(
    <div>
      <TextInput
        label="Restaurant Name"
        value={inputText}
        onChange={handleTextChange}
        data-test="newRestaurantName"
      />
      <Button
        onClick={() => onSave(inputText)}
        data-test="saveNewRestaurantButton">
          Save
      </Button>
    </div>
  )
}

export default NewRestaurantForm