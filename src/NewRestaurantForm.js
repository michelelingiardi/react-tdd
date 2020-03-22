import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    textAlign: `center`
  }
}))

const NewRestaurantForm = ({ onSave }) => {
  const [inputText, setInputText] = useState('');
  const classes = useStyles();

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} sm={9}>
        <TextField
          id="newRestaurantNameId"
          label="nome do restaurante"
          fullWidth
          value={inputText}
          onChange={handleTextChange}
          data-test="newRestaurantName"
        />
      </Grid>

      <Grid item xs={12} sm={3} className={classes.paper}>
        <Button
          variant="contained"
          size="small"
          onClick={() => onSave(inputText)}
          data-test="saveNewRestaurantButton"
        >
          adicionar
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewRestaurantForm;
