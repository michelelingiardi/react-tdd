import React, { useEffect } from 'react';

const RestaurantList = ({ restaurants }) => {
  return (
    <ul>
      {restaurants.map( restaurantName => 
        <li key={restaurantName}>{restaurantName}</li>
      )}
    </ul>
  );
}

export default RestaurantList;