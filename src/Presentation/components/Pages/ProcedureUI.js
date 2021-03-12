import React from 'react';
import DefaultLayout from '../templates/DefaultLayout';
import Stepper from '../Steppers/Stepper';

import '../../../App.css';

class ProcedureUI extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <Stepper roomid={this.props.location.state.roomid}/>
      </DefaultLayout>
    );
  }
}

export default ProcedureUI;