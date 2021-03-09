import React, {Component} from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import ProblemSection from '../InputParts/ProblemSection';
import axios from 'axios';

class Step2Problem extends Component {
  constructor() {
    super();
    this.state = {
      keywordList: [],
      value: "",
    };
  }
  componentDidMount() {
    var room_id = localStorage.getItem("roomid");
    axios.get(`http://localhost:8080/keywords/${room_id}`)
    .then(results => {
      const keywords = results.data;
      this.setState({ keywordList: keywords });
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  render(){
    const keywordList = this.state.keywordList
    return (
    <Container maxWidth="sm">
    <Grid container alignItems="center" justify="center">
      <Typography variant="h4"　style={{margin: "3vh auto"}}>Step2 課題を考えてみよう</Typography>
      <Typography variant="body1" gutterBottom>
        先ほど出したキーワードに対して，考えうる課題を書き出していきましょう．
        どんな些細な課題でもいいので，できるだけ多く書き出してください．
      </Typography>
      <ul>
      {keywordList.map(element => (
        <div>
          <Typography variant="h6" style={{margin: "3vh auto"}}>{element.Comment} : </Typography>
          <ProblemSection keyword_id={element.ID} />
        </div>
        ))}
      </ul>
    </Grid>
    </Container>
  );
  }
}

export default Step2Problem;