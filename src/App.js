import React from 'react';
import RestaurantListPage from './RestaurantListPage';
import Grid from '@material-ui/core/Grid';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item sm={12} md={10} lg={8}>
            <RestaurantListPage />
          </Grid>
        </Grid>
      </div>
    );
  }
}
