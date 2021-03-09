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
      value: ""
    };
  }
  //get
  componentDidMount() {
    var room_id = localStorage.getItem("roomid");
    axios.get(`http://localhost:8080/keywords/${room_id}`)
    .then(results => {
      this.setState({ keywordList: results.data}) 
      console.log(results)
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  onChange(keyValue) {
    this.setState(keyValue);
    console.log(keyValue)
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

export default Step1Keyword;