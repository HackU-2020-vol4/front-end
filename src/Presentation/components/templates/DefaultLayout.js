import React from 'react';
import {Container, Box} from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';

const DefaultLayout = ({ children }) => {
  return (
      <div>
      <Header />
      <Box >{children}</Box>
      <Footer />
      </div>
  );
};

export default DefaultLayout;