import React, { Component } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import Count from '../coutParts/count';


class Step4Vote extends React.Component {
    constructor() {
        super();
        this.state = {
          keywordList: [],
          value: "",
        };
    }

    componentDidMount() {
        var room_id = localStorage.getItem("roomid");
        axios.get(`http://localhost:8080/solutions/0/${room_id}`)
        .then(results => {
          const keywords = results.data;
          this.setState({ keywordList: keywords });
        })
        .catch((data) =>{
          console.log(data)
        })
    }
    render() {

        console.log(this.state.keywordList);
        // const solutionList = ["解決策1", "解決策2", "解決策3"]
        return (
            <Container maxWidth="sm">
                <Grid container alignItems="center" justify="center">
                    <Typography variant="h4" style={{ margin: "3vh auto" }}>Step4 投票しよう</Typography>
                    <Typography variant="body1" gutterBottom>
                        自分がいいと思うアイデアに投票しましょう.
                    </Typography>
                    <div>

                        <ul>
                            {this.state.keywordList.map((element) => (
                                <div>
                                    <Typography variant="h6" style={{ margin: "3vh auto" }}>{element.Comment} :
                                <Count />
                                    </Typography>
                                </div>
                            ))}
                        </ul>
                    </div>
                </Grid>
            </Container>
        )
    }
}

export default Step4Vote;