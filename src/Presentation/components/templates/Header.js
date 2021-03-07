// import React from 'react';
// import {Box} from '@material-ui/core';

// const Header = () => {
//     return (
//       <Box
//         top={0}
//         height={50}
//         bgcolor='#C2DDE8'
//       >
//         <p>header</p>
//       </Box>
//     );
//   };
  
//   export default Header;

import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Grid
} from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles';
import logo from '../../../logo.svg';

const useStyles = makeStyles((theme) => ({
    topAppBar: {
        Height: "20vh",
        minHeight: "120px"
    },
    toolbar: {
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
        verticalAlign: 'middle',
        display: 'inline-flex'
    },
}));

const AppBars = () => {

    const classes = useStyles();

    return (
        <AppBar position="static" elevation={0} className={classes.topAppBar}>
            <Toolbar className={classes.toolbar}>
                    <Grid container item direction="row" alignItems="center" xs={12} sm={6}>
                        <Grid item>
                            <img src={logo} alt="logo" height="70px" />
                        </Grid>
                        <Grid item>
                            <Typography className={classes.title} variant="h4" component="h1" noWrap color="#305728">
                                Hackathon Supporter
                            </Typography>
                        </Grid>
                    </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default AppBars;