import React, { Component } from 'react';
import LandingPage from './layout/landing'
import AuthenticatedLayout from './layout/authenticated.layout'
import {Route, Switch} from 'react-router-dom'
import PrivateRoute from './layout/private.route'

class App extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/app" isAuthenticated={true} component={AuthenticatedLayout} />        
        <Route path="/" component={LandingPage} />
      </Switch>
    );
  }
}

export default App;
