import React, { Component } from 'react';
import Home from './Home';
import Welcome from './Welcome';
import Navigation from './Navigation';
import Login from './Login';
import Meetings from './Meetings';
import {Router} from '@reach/router';

class App extends Component {

constructor() {
  super();
  this.state = {
    user : 'Ronen'
  }
}

  render() {
    return(
      <div>
        <Navigation user={this.state.user}/>
        {this.state.user &&
      <Welcome user={this.state.user}/>}
      <Router>
      <Home path='/' user={this.state.user}/>
      <Login path='/login'/>
      <Meetings path='/meetings'/>
      </Router>
      </div>
    ) ;
  }
}

export default App;
