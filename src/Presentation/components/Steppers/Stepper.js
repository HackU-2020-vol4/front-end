import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Stepper,
    Step,
    StepLabel,
    Box,
    Grid,
    Button
} from '@material-ui/core';
import StepIcons from "./StepperIcons"
import StepConnector from "./StepConnector"

import Step1Keyword from '../Procedures/Step1Keyword';
import Step2Problem from '../Procedures/Step2Problem';
import Step3Solution from '../Procedures/Step3Solution';
import Step4Vote from '../Procedures/Step4Vote';
import Step5Result from '../Procedures/Step5Result';


const style = makeStyles(theme => ({
    button: {
	marginRight: theme.spacing(1),
    },
    mainBox: {
        position: "relative",
        marginTop: "-8px",
        padding: "10px 20px",
        borderBottomRightRadius: "4px",
        borderBottomLeftRadius: "4px",
        background: theme.palette.background.default
    },
    stepper: {
        height: "calc(10vh - 40px)",
        minHeight: "55px"
    },
}));

const StepContent = ({ step }) => {
    switch (step) {
    case 0:
	return <Step1Keyword />;
    case 1:
	return <Step2Problem />;
    case 2:
	return <Step3Solution />;
    case 3:
	return <Step4Vote />;
    case 4:
    return <Step5Result />;
    default:
	return <></>;
    }
}

const Steppers = (props) => {
    const [activeStep, setActiveStep] = useState(1) // step x by default
    const classes = style();
    const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1)
    const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1)

    localStorage.setItem('roomid', props.roomid);
    return <>
        <Stepper alternativeLabel className={classes.stepper} connector={<StepConnector />} activeStep={activeStep}>
                {/* Change the number of loops here based on StepContent */}
    {[1, 2, 3, 4, 5].map(e => (<Step key={e}>
			 <StepLabel StepIconComponent={StepIcons} />
			 </Step>
                ))}
            </Stepper>
            <Box className={classes.mainBox}>
               <Grid
                container
                spacing={3}
                direction="column"
                justify="space-around"
                alignItems="center"
                style={{ height: "400px" }}
            >
        </Grid>
	<StepContent step={activeStep} />
    <h1>Room ID : {props.roomid}</h1>
    <Button disabled={activeStep === 0} className={classes.button} onClick={handleBack}>
	Back
    </Button>
	<Button disabled={activeStep === 4} variant="contained" color="primary" className={classes.button} onClick={handleNext}>
	{activeStep === 2 ? 'Pay' : 'Next'}
    </Button>
        </Box>
        </>
}

export default Steppers;