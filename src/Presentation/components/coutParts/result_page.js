import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import axios from 'axios';
import '../../Styles/count.css';


class Result_page extends Component {

    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }


    componentDidMount() {

        var room_id = localStorage.getItem("roomid");
        // this.interval = setInterval(() => {
        axios.get(`http://localhost:8080/vote/${this.props.solution_id}/${room_id}/index`)
        .then(results => {
        console.log(results.data)
          const keywords = Object.keys(results.data).length;
          console.log("solution_id = " + this.props.solution_id)
          console.log("room_id = " + room_id)
          console.log("length = "+keywords)
          this.setState({ count: keywords })
        })

        // }, 5000);
    }

    render() {
        const { count } = this.state;
        return (
            <>
                投票数<span style={{ marginLeft: 10, fontSize: 40 }}>{count}</span>票
            </>
        );
    }

};

export default Result_page;