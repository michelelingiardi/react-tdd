import React from 'react';

const NewRestaurantForm = ({ onSave }) => {
  var state = { inputText: 'teste' }

  const handleTextChange = (event) => {
    state.inputText = event.target.value;
  }

  return(
    <div>
      <input 
        type="text"
        value={state.inputText}
        onChange={handleTextChange}
        data-test="newRestaurantName"
      />
      <button
        onClick={onSave(state.inputText)}
        data-test="saveNewRestaurantButton">
          Save
      </button>
    </div>
  )
}

export default NewRestaurantForm