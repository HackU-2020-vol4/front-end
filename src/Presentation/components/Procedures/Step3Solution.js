import React, {Component} from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import SolutionSection from '../InputParts/SolutionSection';
import axios from 'axios';

class Step3Solution extends Component {
  constructor() {
    super();
    this.state = {
      keywordList: [],
      value: "",
    };
  }
  
  componentDidMount() {
    var room_id = localStorage.getItem("roomid");
    axios.get(`http://localhost:8080/associations/10/${room_id}`)
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
      <Typography variant="h4" style={{margin: "3vh auto"}}>Step3 解決策を考えてみよう</Typography>
      <Typography variant="body1" gutterBottom>
        先ほど出した課題に対して解決策を書き出していきましょう．
        ここが一番の頑張り時です．ユニークな解決策をどんどんひねり出していきましょう！
      </Typography>
      <ul>
      {keywordList.map(element => (
        <div>
          <Typography variant="h6" style={{margin: "3vh auto"}}>{element.Comment} : </Typography>
          <SolutionSection association_id={element.ID} />
        </div>
        ))}
      </ul>
    </Grid>
    </Container>
  );
  }
}

export default Step3Solution;