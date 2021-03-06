import React, { Component } from 'react';
import {Container, Grid, Typography, Button, TextField} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

class AddPloblem extends React.Component{
    onChange(e) {
        const { onChange } = this.props;
        onChange({
        value: e.target.value
        });
    }
    add() {
        const { value, keywordList, add } = this.props;
        if (value) {
        const keywordElement = {
            content: value,
            id: keywordList.length + 1
        };
        add(keywordElement);
        }
    }
    render() {
    const { value } = this.props;
    return (
        <Grid container alignItems="center" justify="center">
            <TextField 
            id="standard-basic"
            label="課題を入力" 
            value={value}
            style = {{width: 350}}
            onChange={e => this.onChange(e)} />
        <Button onClick={() => this.add()} variant="contained" startIcon={<AddIcon />}>
          Add
        </Button>
        </Grid>
    );
  }
}

export default AddPloblem;