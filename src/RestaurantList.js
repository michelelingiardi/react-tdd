import React from 'react';
import {
  Collection,
  CollectionItem
} from 'react-materialize';

const RestaurantList = ({ restaurants }) => {
  return (
    <Collection header="restaurantes">
      { restaurants.length === 0
          &&  <CollectionItem style={ {color: 'gray'} }>(nenhum restaurante adicionado ainda)</CollectionItem>
      }
      {restaurants.map(restaurantName =>
        <CollectionItem key={restaurantName}>
          {restaurantName}
        </CollectionItem>
      )}
    </Collection>
  );
}

export default RestaurantList;