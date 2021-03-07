import React from 'react';
import Count from '../coutParts/count';

class Step4Vote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    } 

    countUp = () => {
        this.setState({
            count: this.state.count+1
        })
    };

    render() {
        return(
            <div>
                <Count title={"カウントアップボタン"} count={this.state.count} countUpFunc={()=>this.countUp() }/>
                <Count title={"カウントアップボタン"} count={this.state.count} countUpFunc={()=>this.countUp() } />
            </div>
        )
    }
}

export default Step4Vote;