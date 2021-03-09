import React, { Component } from 'react';
import {Grid, IconButton, Typography} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

class DisplayKeyword extends Component {

    render(){
        const {
            element: { id },
            onDelete
        } = this.props;
        
        return (
        <Grid container style={{margin: "3vh auto"}}>
            <Grid item xs={11}>
                <Typography variant="h6" gutterBottom>
                    ・ {this.props.element.Comment}
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <IconButton onClick={() => onDelete(id)} style={{padding: "0", color: "#305278" }}>
                <HighlightOffIcon fontSize="large"/>
                </IconButton>
            </Grid>
        </Grid>
    );
    }
  }
  
  export default DisplayKeyword;