import React, {Component} from 'react';

class Count extends Component {

    constructor() {
        super();
        this.state = {
          count: 0,
    };
    }

    countUp(){
    this.setState({
        count: this.state.count + 1
    });
    }

    render(){
        const { count } = this.state;
        return (
            <div>
                <button onClick={()=>this.countUp()}>ここをクリック</button>
                <p>{count}</p>
            </div>
        );
    }
    
};

export default Count;