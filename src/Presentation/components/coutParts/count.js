import React, { Component } from 'react';

class Count extends Component {

    constructor() {
        super();
        this.state = {
            count: 0,
            roomid: "test",
        };
    }
    

    countUp() {
        var n = Number(localStorage.getItem(this.state.roomid));
        if(localStorage.getItem('test') == null) {
            if(n !== 0){
                n=0;
        }
    }
        if(n >= 3){
            localStorage.setItem(this.state.roomid, n = 3);
            this.setState({
                count: this.state.count
            });
        }else{
            localStorage.setItem(this.state.roomid, n += 1);
            this.setState({
                count: this.state.count + 1
            });
        }
        console.log(n);
    }
    countDown() {
        var n = Number(localStorage.getItem(this.state.roomid));
        if (n <= 0) {
            localStorage.setItem(this.state.roomid, n = 0);
            this.setState({
                count: 0
            });
        } else {
            localStorage.setItem(this.state.roomid, n -= 1);
            this.setState({
                count: this.state.count - 1
            });
        }
        console.log(n);
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <button onClick={() => this.countUp()}>ここをクリック</button>
                <button onClick={() => this.countDown()}>ここをクリック</button>
                <p>{count}</p>
            </div>
        );
    }

};

export default Count;