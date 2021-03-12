import React, { Component } from 'react';
import {Container, Grid} from '@material-ui/core';
import DisplayKeyword from '../InputParts/DisplayKeyword';
import AddProblem from '../InputParts/AddProblem';
import axios from 'axios';

import '../../Styles/procedure.css';

class PloblemSection extends Component {

   constructor() {
    super();
    this.state = {
      keywordList: [],
      value: ""
    };
  }
  //get
  componentDidMount(){
    this.FirstGet()
    this.interval = setInterval(() => {
    axios.get(`http://54.168.42.94/associations/${this.props.keyword_id}`)
    .then(results => {
      const keywords = results.data;
      this.setState({ keywordList: keywords });
    })
    .catch((data) =>{
      console.log(data)
    })
    }, 2000);
  }

 FirstGet(){
    axios.get(`http://54.168.42.94/associations/${this.props.keyword_id}`)
    .then(results => {
      const keywords = results.data;
      this.setState({ keywordList: keywords });
    })
    .catch((data) =>{
      console.log(data)
    })
  } 


  onChange(keyValue) {
    this.setState(keyValue);
  }
  //add
  add(keywordElement) {
    var room_id = localStorage.getItem("roomid");
    axios.post(`http://54.168.42.94/associations/${this.props.keyword_id}/${room_id}/create`,{Comment: keywordElement.Comment})
    .then((response)=>{
      this.setState({
        keywordList: this.state.keywordList.concat(keywordElement),
        value: ""
      });
    })
    .catch((data)=>{
      console.log(data)
    })
  }
  //delete
  handleDelete(ID){
    axios.delete(`http://54.168.42.94/associations/${ID}`)
    axios.delete(`http://54.168.42.94/solutions/0/${ID}`)
    const { keywordList } = this.state;
    const newkeywordList = keywordList.filter(element => element.ID !== ID);
    this.setState({ keywordList: newkeywordList });
  }

  render(){
    const { keywordList } = this.state;
    return (
      <Container maxWidth="sm">
      <Grid container alignItems="center" justify="center">
        <Grid item xs={12}>
          {/* 入力 */}
          <AddProblem
          {...this.state}
          onChange={keyValue => this.onChange(keyValue)}
          add={keywordElement => this.add(keywordElement)}
        />
        </Grid>

        <ul>
          {/* 表示 */}
          {keywordList.map(element => (
            <DisplayKeyword
              key={element.ID}
              element={element}
              onDelete={ID => this.handleDelete(ID)}
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