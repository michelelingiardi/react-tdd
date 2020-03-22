import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const RestaurantList = ({ restaurants }) => {
  return (
    <List header="restaurantes">
      { restaurants.length === 0
          && <ListItem style={ { color: 'gray' } }>(nenhum restaurante adicionado ainda)</ListItem>
      }
      {restaurants.map(restaurantName =>
        <ListItem key={restaurantName}>
          {restaurantName}
        </ListItem>,
      )}
    </List>
  );
};

export default RestaurantList;
