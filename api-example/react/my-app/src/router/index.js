import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../components/Home'
import About from '../components/About'

export default class RouteConfig extends React.Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/home" component={Home}  exact/>
          <Route path="/about" component={About} exact/>
        </Switch>
      </Router>
    )
  }
}