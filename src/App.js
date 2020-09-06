import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Register from './components/home/Register';
import Login  from './components/home/Login';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
