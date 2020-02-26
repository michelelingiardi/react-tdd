import React, { useState } from 'react';
import { 
  Button, 
  TextInput,
  Row,
} from 'react-materialize';

const NewRestaurantForm = ({ onSave }) => {
  const [inputText, setInputText] = useState('');

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  }

  return(
    <Row>
      <TextInput
        s={12}
        m={8}
        l={10}
        label="nome do restaurante"
        value={inputText}
        onChange={handleTextChange}
        data-test="newRestaurantName"
      />
      <Button
        s={12}
        m={4}
        l={2}
        onClick={() => onSave(inputText)}
        data-test="saveNewRestaurantButton">
          adicionar
      </Button>
    </Row>
  )
}

export default NewRestaurantForm