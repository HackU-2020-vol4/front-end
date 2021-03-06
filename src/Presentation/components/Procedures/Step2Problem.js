import React, {Component} from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import ProblemSection from '../InputParts/ProblemSection';

class Step2Problem extends Component {
  render(){
    const keywordList = ["キーワード1", "キーワード2", "キーワード3"]

    return (
    <Container maxWidth="sm">
    <Grid container alignItems="center" justify="center">
      <Typography variant="h4">Step2 課題を考えてみよう</Typography>
      <Typography variant="body1" gutterBottom>
        先ほど出したキーワードに対して，考えうる課題を書き出していきましょう．
        どんな些細な課題でもいいので，できるだけ多く書き出してください．
      </Typography>
      <ul>
      {keywordList.map(element => (
        <div>
          <p>{element} : </p>
          <ProblemSection/>
        </div>
        ))}
      </ul>
    </Grid>
    </Container>
  );
  }
}

export default Step2Problem;