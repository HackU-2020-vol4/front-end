import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DefaultLayout from '../templates/DefaultLayout';
import {
  Box,
  Button,
  Typography,
  TextField
} from '@material-ui/core';
import '../../../App.css';

const useStyles = makeStyles(theme => ({
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
}));

function Home() {
  const classes = useStyles();
  const [room_id, setValue] = useState('default');
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
        <Button className={classes.get_button} onClick={()=>alert('Room IDが発行されました（されてない）')} variant="contained">Get Room ID</Button>
        <TextField
          onChange={(event) => setValue(event.target.room_id)}
          className ={classes.textfield}
          variant="filled"
          label="Room ID"
          color="secondary.light "
        />
        <Button className={classes.start_button} href="procedure"  variant="contained" disabled={room_id === "default"}>Start</Button>
      </DefaultLayout>
    </div>
  );
}

export default Home;