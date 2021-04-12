import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../components/Home'

export default class RouteConfig extends React.Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/home" component={ Home } />
        </Switch>
      </Router>
    )
  }
}