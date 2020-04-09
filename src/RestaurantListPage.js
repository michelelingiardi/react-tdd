import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Grid from '@material-ui/core/Grid';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

export const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    minWidth: 500,
    minHeight: 0,
    maxHeight: 'calc(100vh - 32px)',
    '&:focus': {
      outline: 'none',
    },
  },
}));

const RestaurantListPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();

  const handleOpenNewRestaurantForm = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNewRestaurantForm = () => {
    setAnchorEl(null);
  };

  const handleAddRestaurant = (newRestaurantName) => {
    setRestaurants([newRestaurantName, ...restaurants]);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'addRestaurantPopoverForm' : undefined;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Button
          aria-describedby={id}
          variant="outlined"
          color="primary"
          onClick={handleOpenNewRestaurantForm}
          data-test="addRestaurantButton">
          incluir restaurante
        </Button>
        <Popover
          classes={classes}
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleCloseNewRestaurantForm}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <NewRestaurantForm onSave={handleAddRestaurant} />
        </Popover>
      </Grid>
      <Grid item xs={12}>
        <RestaurantList restaurants={restaurants} />
      </Grid>
    </Grid>
  );
};

export default RestaurantListPage;
