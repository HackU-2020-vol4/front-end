import React, {Component} from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import SolutionSection from '../InputParts/SolutionSection';

class Step3Solution extends Component {
  render(){
    const keywordList = ["課題○○○", "課題○○○", "課題○○○"]

    return (
    <Container maxWidth="sm">
    <Grid container alignItems="center" justify="center">
      <Typography variant="h4">Step3 解決策を考えてみよう</Typography>
      <Typography variant="body1" gutterBottom>
        先ほど出した課題に対して解決策を書き出していきましょう．
        ここが一番の頑張り時です．ユニークな解決策をどんどんひねり出していきましょう！
      </Typography>
      <ul>
      {keywordList.map(element => (
        <div>
          <Typography variant="h6">{element} : </Typography>
          <SolutionSection/>
        </div>
        ))}
      </ul>
    </Grid>
    </Container>
  );
  }
}

export default Step3Solution;