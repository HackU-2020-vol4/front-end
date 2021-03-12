import React, { Component } from 'react';
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
        this.firstPageReload();
        var room_id = localStorage.getItem("roomid");
        this.interval = setInterval(() => {
        axios.get(`http://localhost:8080/vote/${this.props.solution_id}/${room_id}/index`)
        .then(results => {
        console.log(results.data)
          const keywords = Object.keys(results.data).length;
          this.setState({ count: keywords })
        })
        }, 5000);
    }
    firstPageReload(){
        var room_id = localStorage.getItem("roomid");
        axios.get(`http://localhost:8080/vote/${this.props.solution_id}/${room_id}/index`)
        .then(results => {
        console.log(results.data)
          const keywords = Object.keys(results.data).length;
          this.setState({ count: keywords })
        });
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