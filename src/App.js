import './App.css';
import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Component/HomePage';
import Video from './Component/VideoPage';
import Gif from './Component/GifPage';

class App extends React.Component {
  render () {
     return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/gif">
              <Gif />
            </Route>
            <Route exact path="/video">
              <Video />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;