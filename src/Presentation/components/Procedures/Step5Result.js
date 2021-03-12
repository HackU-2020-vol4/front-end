import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Result_page from '../coutParts/result_page'

class Step5Result extends React.Component {
    constructor() {
        super();
        this.state = {
            keywordList: [],
        };
    }

    componentDidMount() {
        var room_id = localStorage.getItem("roomid");
        axios.get(`http://localhost:8080/solutions/0/${room_id}`)
            .then(results => {
                const keywords = results.data;
                this.setState({ keywordList: keywords });
            })
            .catch((data) => {
                console.log(data)
            })
    }
    delete() {
        var room_id = localStorage.getItem("roomid");
        axios.delete(`http://localhost:8080/vote/0/${room_id}/all`)
    }
    render() {
        return (
            <Container maxWidth="sm">
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Typography variant="h4" style={{ margin: "3vh auto" }}>Step5 投票結果</Typography>
                    <div>
                        <ul>
                            {this.state.keywordList.map((element) => (
                                <div>
                                    <Typography variant="h6" style={{ margin: "3vh auto" }}>{element.Comment} :
                                        <Result_page solution_id={element.ID} />
                                    </Typography>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <DeleteForeverIcon
                        onClick={() => this.delete()}
                        variant="contained"
                        style={{ fontSize: 60 }}
                    >
                    </DeleteForeverIcon>
                    <a>DELETE</a>
                </Grid>
            </Container>
        )
    }
}

export default Step5Result;