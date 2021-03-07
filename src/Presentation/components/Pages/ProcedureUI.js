import React from 'react';
import DefaultLayout from '../templates/DefaultLayout';
import Stepper from '../Steppers/Stepper';

import '../../../App.css';

function ProcedureUI() {
  return (
    <DefaultLayout>
        <Stepper />
    </DefaultLayout>
  );
}

export default ProcedureUI;