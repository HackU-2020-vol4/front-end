import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import DefaultLayout from '../templates/DefaultLayout';
import {
  Box,
  Button,
  Typography,
  TextField
} from '@material-ui/core';
import '../../../App.css';
import axios from "axios";

const styles = theme => ({
  get_button: {
    marginTop: 45,
    marginRight: 30
  },
  textfield: {
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 10
  },
  start_button: {
    marginTop: 45,
    marginLeft: 30
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      rooms: [],
      roomid: '',
    };
  }
  handleClick(){
    this.props.history.push({
      pathname:'/procedure',
      state: {roomid: this.state.roomid}
    })
  }
  handleChange(e){
    this.setState({
      roomid: e.target.value
    })
    console.log(e.target.value)
  }

createRoomid = (response) => {
  axios.post(`http://localhost:8080/publishers/create`)
  .then(results => {
    console.log(results.data);
    this.setState({ rooms: results.data });
    this.setState({ roomid: results.data.RoomID });
  })
}

render() {
  const { classes } = this.props;
  return (
    <div className="App">
      <DefaultLayout>
        <Typography variant="h4" style={{margin: "3vh auto"}}>What's Hackathon Supporter?</Typography>
        <Typography variant="body1" gutterBottom>
          ハッカソンで何かを作りたいが何を作ればいいかわからない。。。
          <div style={{ whiteSpace: "pre-line" }}></div>
          何を作るか決めるのに時間がかかって開発時間が削れていく。。。
          <div style={{ whiteSpace: "pre-line" }}></div>
          そんな悩みを解決してくれるアプリです！！
          <Box p={1} bgcolor="background.paper"/>
          <div style={{ whiteSpace: "pre-line" }}></div>
          Hackathon Supporterは、アイディア出しから作るものの決定まで、チームをサポートします。
          <div style={{ whiteSpace: "pre-line" }}></div>
          対面はもちろん、オンライン通話をしながら使用することを想定しています。
        </Typography>
        <Button className={classes.get_button} onClick={() => this.createRoomid()} variant="contained">Get Room ID</Button>
        <TextField
          value={this.state.roomid} 
          onChange={this.handleChange}
          className ={classes.textfield}
          variant="filled"
          label="Room ID"
          color="secondary.light "
        />
        <Button className={classes.start_button} onClick={this.handleClick} variant="contained" disabled={this.state.roomid === ''}>Enter Room</Button>
      </DefaultLayout>
    </div>
  );
}
}

export default withRouter(withStyles(styles, { withTheme: true })(Home));