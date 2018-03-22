import React, { Component } from 'react';
import './App.css';
import Home from 'containers/Home';
import RegisterForm from 'containers/Security';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/register" component={RegisterForm} />
            <Route path="/" component={Home} />
        </Switch> 
      </Router>
          );
        }
      }
      
export default App;