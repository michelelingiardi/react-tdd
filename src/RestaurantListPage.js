import React, { useState } from 'react'
import {
  Button,
  Col,
  Row,
} from 'react-materialize'
import NewRestaurantForm from './NewRestaurantForm'
import RestaurantList from './RestaurantList'

const RestaurantListPage = () => {
  var [restaurants, setRestaurants] = useState([]);
  var [showNewRestaurantForm, setShowNewRestaurantForm] = useState(false);

  const handleAddRestaurant = (newRestaurantName) => {
    setRestaurants([newRestaurantName, ...restaurants]);
    setShowNewRestaurantForm(false);
  }

  const addNewRestaurantForm = showNewRestaurantForm ? <NewRestaurantForm onSave={handleAddRestaurant} /> : null;

  return (
    <div>
      <Row>
        <Button
          onClick={() => setShowNewRestaurantForm(true)}
          data-test="addRestaurantButton">
          novo restaurante
        </Button>
      </Row>
      <Row>
        {addNewRestaurantForm}
      </Row>
      <Row>
        <RestaurantList restaurants={restaurants} />
      </Row>
    </div>
  )
}

module.exports = RestaurantListPage