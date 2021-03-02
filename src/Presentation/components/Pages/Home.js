import React from 'react';
import DefaultLayout from '../templates/DefaultLayout';

import logo from '../../../logo.svg';
import '../../../App.css';

function Home() {
  return (
    <DefaultLayout>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Home</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </DefaultLayout>
  );
}

export default Home;