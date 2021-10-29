import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from './pages/create';

import Home from './pages/home';
import Quotes from './pages/quotes';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/quotes" component={Quotes} />
            <Route  path="/create" component={Create} />
          </Switch>
        </Router>

      </div>
    );
  }
}
