import React, { Component } from 'react';
import {Container, Grid} from '@material-ui/core';
import DisplayKeyword from '../InputParts/DisplayKeyword';
import AddProblem from '../InputParts/AddProblem';

import '../../Styles/procedure.css';

class PloblemSection extends Component {

   constructor() {
    super();
    this.state = {
      keywordList: [],
      value: ""
    };
  }

  onChange(keyValue) {
    this.setState(keyValue);
  }

  add(keywordElement) {
    this.setState({
      keywordList: this.state.keywordList.concat(keywordElement),
      value: ""
    });
  }

  handleDelete(id) {
    const { keywordList } = this.state;
    const newkeywordList = keywordList.filter(element => element.id !== id);
    this.setState({ keywordList: newkeywordList });
  }


  render(){
    const { keywordList } = this.state;
    return (
      <Container maxWidth="sm">
      <Grid container alignItems="center" justify="center">
        <Grid item xs={12}>
          <AddProblem
          {...this.state}
          onChange={keyValue => this.onChange(keyValue)}
          add={keywordElement => this.add(keywordElement)}
        />
        </Grid>

        <ul>
          {keywordList.map(element => (
            <DisplayKeyword
              key={element.id}
              element={element}
              onDelete={id => this.handleDelete(id)}
              {...this.state}
            />
          ))}
        </ul>
      </Grid>
      </Container>
    );
  }
}

export default PloblemSection;