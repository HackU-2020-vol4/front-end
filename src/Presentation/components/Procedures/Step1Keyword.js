import React, { Component } from 'react';
import {Container, Grid, Typography, Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InputKeyword from '../InputParts/InputKeyword';
// import AddButton from '../InputParts/AddButton';

class Step1Keyword extends Component {

  constructor() {
    super()
    this.state={
      KeywordList: [],
      value: "",
    }
    this.addKeyword = this.addKeyword.bind(this)
  }

  addKeyword() {
    this.setState({
      KeywordList: this.state.KeywordList.concat(this.state.value),
      value: "",
    })
  }


  render(){
    return (
      <Container maxWidth="sm">
      <Grid container alignItems="center" justify="center">
        <Typography variant="h4">Step1 キーワードを出していこう</Typography>
        <Typography variant="body1" gutterBottom>
          テーマがあればテーマに関連したキーワードを，なければ思いつく限りのキーワードを書いていきましょう．
          何でもいいのでとりあえず思いつく限りの単語を書き出していくことが大切です．
        </Typography>
        <ul>
          <InputKeyword /> 
          {this.state.KeywordList.map((todo, idx) => {
            return <InputKeyword key={idx}/>})}
        </ul>
        <Button onClick={this.addKeyword} variant="contained" startIcon={<AddIcon />}>
          項目を追加
        </Button>
      </Grid>
      </Container>
    );
  }
  
}

export default Step1Keyword;