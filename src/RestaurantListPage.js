import React, { useState, useCallback, useEffect } from 'react'
import NewRestaurantForm from './NewRestaurantForm'
import RestaurantList from './RestaurantList'

const RestaurantListPage = () => {
  var [restaurants, setRestaurants] = useState([]);
  var [showNewRestaurantForm, setShowNewRestaurantForm] = useState(false);

  const handleAddRestaurant = (newRestaurantName) => {
    setRestaurants([newRestaurantName, ...restaurants]);
    setShowNewRestaurantForm(false);
  }

  const addNewRestaurant = showNewRestaurantForm ? <NewRestaurantForm onSave={handleAddRestaurant} /> : null;

  return (
    <div>
      <button
        onClick={() => setShowNewRestaurantForm(true)}
        data-test="addRestaurantButton">
          add restaurant
      </button>
      {addNewRestaurant}
      <RestaurantList restaurants={restaurants}/>
    </div>
  )
}

module.exports = RestaurantListPage