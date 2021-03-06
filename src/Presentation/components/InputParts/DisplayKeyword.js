import React, { Component } from 'react';
import {Grid, IconButton, Typography} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CreateIcon from '@material-ui/icons/Create';

class DisplayKeyword extends Component {

    render(){
        const {
            element: { id },
            onDelete
        } = this.props;

        return (
        <Grid container spacing={1}>
            <Grid item xs={8}>
                <Typography variant="h5" gutterBottom>
                    {this.props.element.content}
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <IconButton onClick={() => onDelete(id)}>
                <HighlightOffIcon fontSize="large"/>
                </IconButton>
            </Grid>
        </Grid>
    );
    }
  }
  
  export default DisplayKeyword;