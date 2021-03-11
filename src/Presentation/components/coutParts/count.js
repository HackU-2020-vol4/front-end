import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';


class Count extends Component {

    constructor() {
        super();
        this.state = {
            count: 0,
        };
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
                count: this.state.count * 0
            });
        }
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <ThumbUpIcon variant="contained" color="action" style={{ fontSize: 100}} onClick={() => this.countUp()}></ThumbUpIcon>
                <Button variant="contained" color="action" onClick={() => this.countDown()}>投票の取り消し</Button>
                <p>{count}</p>
            </div>
        );
    }

};

export default Count;