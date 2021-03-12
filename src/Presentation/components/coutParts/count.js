import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import axios from 'axios';
import '../../Styles/count.css';


class Count extends Component {

    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    countUp() {
        var room_id = localStorage.getItem("roomid");
        axios.post(`http://localhost:8080/vote/${this.props.solution_id}/${room_id}/create`,{})
        this.setState({
            count: this.state.count + 1
        });
    }

    countDown() {
        if (this.state.count <= 0) {
            this.setState({
                count: 0
            });
        } else {
            var room_id = localStorage.getItem("roomid");
            axios.delete(`http://localhost:8080/vote/${this.props.solution_id}/${room_id}`)
            this.setState({
                count: this.state.count - 1
            });
        }
    }

    render() {
        const { count } = this.state;
        return (
            <>
                <span style={{ marginLeft: 10, fontSize: 40 }}>{count}</span>票
                <ThumbUpAltIcon color="action" style={{ marginBottom: -15, marginRight: 10, marginLeft: 10, fontSize: 60 }} onClick={() => this.countUp()}></ThumbUpAltIcon>
                <Button variant="contained" color="action" onClick={() => this.countDown()} style={{ backgroundColor: "#C2DDE8" }}>cancel</Button>
            </>
        );
    }

};

export default Count;