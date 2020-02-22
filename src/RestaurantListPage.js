import React, { useState, useCallback, useEffect } from 'react'
import NewRestaurantForm from './NewRestaurantForm'

const RestaurantListPage = () => {
  var [restaurantName, setRestaurantName] = useState([]);

  const handleRestaurantName = (newRestaurantName) => {
    setRestaurantName(newRestaurantName);
  }

  return (
    <div>
      <p>{restaurantName}</p>
      <button
        data-test="addRestaurantButton">add restaurant</button>
      <NewRestaurantForm onSave={handleRestaurantName}/>
    </div>
  )
}

module.exports = RestaurantListPage