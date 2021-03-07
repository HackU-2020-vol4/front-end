import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { render } from "react-dom";


class Step4Vote extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }


  render() {
    const members = ["Araki", "Ibata", "Fukutome", "Woods", "Alex", "Tatsunami"];
    const dragons_2006_members = members.map((output, index) => {
      return `${index + 1}番目`;
      // は${output}
      
      // const dragons_2006_members_index = members.map((output, index) => {
      //   return index;
    });

    // for (let i = 0; i < dragons_2006_members.length; i++) {

    // }

    return (
      <div className="">
        <p>自分がいいと思うアイデアに投票しましょう！</p>

        {/* <a>考えた解決策</a>
        <Button variant="contained" color="action" onClick={() => this.setState({ count: this.state.count + 1 })}>
          Check
        </Button>
        <a>You clicked {this.state.count} times</a> */}

        <ul>
          {
            dragons_2006_members.map((d, p) => {
              return <li key={p}>
                {d}
                {
                  <Button id={p} variant="contained" color="action" onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Check{p}
                  </Button>
                }
                {
                  <p id={p}>You clicked {this.state.count} times</p>
                }
              </li>
            })
          }

        </ul>

        <Button variant="contained" color="disabled">
          <a href=''>前に戻る</a>
        </Button>

        <Button variant="contained" color="disabled" onClick={() => this.setState({ count: this.state.count * 0 })}>
          投票のリセット
        </Button>

      </div>
    );
  }

}


export default Step4Vote;