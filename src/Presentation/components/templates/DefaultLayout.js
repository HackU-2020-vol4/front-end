import React from 'react';
import { Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Header from './Header';
import Footer from './Footer';
import theme from '../templates/theme'

const DefaultLayout = ({ children }) => {
  return (
      <div>
      <ThemeProvider theme={theme}>
      <Header />
      <Box >{children}</Box>
      <Footer />
      </ThemeProvider>
      </div>
  );
};

export default DefaultLayout;