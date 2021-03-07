// import React from 'react';
// import {Box} from '@material-ui/core';

// const Footer = () => {
//   return (
//     <Box
//         bottom={0}
//         h={50}
//         bgcolor='#C2DDE8'
//     >
//       <p>footer</p>
//     </Box>
//   );
// };

// export default Footer;

import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
} from "@material-ui/core";
// import { makeStyles, } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     bottomAppBar: {
//         Height: "20vh",
//         minHeight: "200px"
//     },
//     toolbar: {
//         alignItems: "flex-start",
//         justifyContent: "center",
//         paddingTop: theme.spacing(2),
//         paddingBottom: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//         alignSelf: 'flex-end',
//         verticalAlign: 'middle',
//         display: 'inline-flex'
//     },
// }));


const Footer = () => <>
        <AppBar position="static" elevation={0} component="footer" color="primary" >
            <Toolbar style={{ justifyContent: "center" }}>
                <Typography variant="caption">© 2021 G-Lab</Typography>
            </Toolbar>
        </AppBar>
    </>

export default Footer;