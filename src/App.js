import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Presentation/components/Pages/Home';
import ProcedureUI from './Presentation/components/Pages/ProcedureUI';


function App() {
  return (
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/procedure' component={ProcedureUI} />
      </Router>
  );
}

export default App;