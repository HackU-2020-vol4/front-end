import React, { Component } from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import DisplayKeyword from '../InputParts/DisplayKeyword';
import AddKeyword from '../InputParts/AddKeyword';
import axios from 'axios';
import '../../Styles/procedure.css';

class Step1Keyword extends Component {

   constructor() {
    super();
    this.state = {
      keywordList: [],
      value: "",
      keywords: [],
    };
  }
  // //get
  componentDidMount() {
    var room_id = localStorage.getItem("roomid");
    // this.interval = setInterval(() => {
    axios.get(`http://localhost:8080/keywords/${room_id}`)
    .then(results => {
      const keywords = results.data;
      this.setState({ keywordList: keywords });
    })
    .catch((data) =>{
      console.log(data)
    })
    // }, 5000);
  }
  //post


  onChange(keyValue) {
    this.setState(keyValue);
  }

  add(keywordElement) {
    console.log(keywordElement.Comment);
    var room_id = localStorage.getItem("roomid");
    axios.post(`http://localhost:8080/keywords/${room_id}/create`,{Comment: keywordElement.Comment})
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
        <Typography variant="h4" style={{margin: "3vh auto"}}>Step1 キーワードを出していこう</Typography>
        <Typography variant="body1" gutterBottom>
          テーマがあればテーマに関連したキーワードを，なければ思いつく限りのキーワードを書いていきましょう．
          何でもいいのでとりあえず思いつく限りの単語を書き出していくことが大切です．
        </Typography>
        <Grid item xs={12}>
          <AddKeyword
            {...this.state}
            onChange={keyValue => this.onChange(keyValue)}
            add={keywordElement => this.add(keywordElement)}
          />
        </Grid>

        <ul>
          {this.state.keywordList.map(element => (
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

export default Step1Keyword;