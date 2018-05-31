import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/common/login';
import Signup from './components/common/signup';
import Home from './components/common/home';
import forgotPassword from './components/common/forgotPassword';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgotPassword" component={forgotPassword} />
      </Switch>
    );
  }
}
export default App;
