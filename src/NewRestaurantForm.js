import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';

const useStyles = makeStyles(theme => ({
  paper: {
    textAlign: `center`,
  },
}));

const NewRestaurantForm = ({ onSave }) => {
  const classes = useStyles();

  const handleSaveNewRestaurant = (values, { resetForm }) => {
    onSave(values.restaurantName);
    resetForm();
  };

  const validateNewRestaurantName = (values) => {
    const errors = {}
    if (values.restaurantName === '') {
      errors.restaurantName = 'Digite o nome do restaurante.';
    }
    return errors;
  }

  return (
    <Grid container justify="center" alignItems="center">
      <Formik
        initialValues={{ restaurantName: '' }}
        validate={validateNewRestaurantName}
        onSubmit={handleSaveNewRestaurant}>
        {({ values, errors, handleChange, handleSubmit }) => (
          <>
            <form onSubmit={handleSubmit}>
              <Grid item xs={12} sm={9}>
                <TextField
                  id="newRestaurantNameId"
                  data-test="newRestaurantName"
                  label="nome do restaurante"
                  value={values.restaurantName}
                  name="restaurantName"
                  onChange={handleChange}
                  fullWidth
                  autoFocus
                />
                <FormHelperText data-test="newRestaurantNameError" error={true}>{errors.restaurantName}</FormHelperText>
              </Grid>
              <Grid item xs={12} sm={3} className={classes.paper}>
                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  data-test="saveNewRestaurantButton"
                >
                  adicionar
              </Button>
              </Grid>
            </form>
          </>
        )}
      </Formik>
    </Grid>
  );
};

export default NewRestaurantForm;
