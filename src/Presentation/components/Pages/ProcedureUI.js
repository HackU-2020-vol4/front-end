import React from 'react';
import DefaultLayout from '../templates/DefaultLayout';
import Stepper from '../Steppers/Stepper';

import '../../../App.css';

function ProcedureUI() {
  return (
    <DefaultLayout>
        <h1>ProcedureUI</h1>
        <Stepper />
    </DefaultLayout>
  );
}

export default ProcedureUI;