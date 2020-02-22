import React, { useState, useCallback, useEffect } from 'react'
import NewRestaurantForm from './NewRestaurantForm'
import RestaurantList from './RestaurantList'

const RestaurantListPage = () => {
  var [restaurants, setRestaurants] = useState([]);

  const handleAddRestaurant = (newRestaurantName) => {
    setRestaurants([newRestaurantName, ...restaurants]);
  }

  return (
    <div>
      <button
        data-test="addRestaurantButton">
          add restaurant
      </button>
      <NewRestaurantForm onSave={handleAddRestaurant} />
      <RestaurantList restaurants={restaurants}/>
    </div>
  )
}

module.exports = RestaurantListPage