import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculate from './pages/Calculate';
import Header from './components/Header';
import Home from './components/Home';
import Quote from './components/Quote';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/calculator">
        <Calculate />
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
    </Switch>
  </Router>
);

export default App;
