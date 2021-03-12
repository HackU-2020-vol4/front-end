import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

import '../../Styles/count.css';


class Count extends Component {

    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }


    componentDidMount(){
        // this.interval = setInterval(() => {
            // this.setState({
            //     count: this.state.count + 1
            // });
        // }, 10000*Math.random(1000)+500)

        // this.interval = setInterval(() => {
            // this.setState({
            //     count: this.state.count - 1
            // });
        // }, 10000*Math.random(500)+300)
    }
    countUp() {
        
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