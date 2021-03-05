import React from 'react';
import {Grid, TextField, IconButton} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function InputKeyword() {
    return (
        <Grid container spacing={1}>
            <Grid item xs={8}>
                <TextField id="standard-basic" label="キーワードを入力" />
            </Grid>
            <Grid item xs={2}>
                <IconButton >
                <CheckCircleIcon fontSize="large"/>
                </IconButton>
            </Grid>
            <Grid item xs={2}>
                <IconButton >
                <HighlightOffIcon fontSize="large"/>
                </IconButton>
            </Grid>
        </Grid>
    );
  }
  
  export default InputKeyword;