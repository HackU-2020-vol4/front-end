import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Presentation/components/Pages/Home';
import Step from './Presentation/components/Pages/Step';
import Vote from './Presentation/components/Pages/Vote';


function App() {
  return (
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/Step' component={Step} />
        <Route path='/Vote' component={Vote} />
      </Router>
  );
}

export default App;