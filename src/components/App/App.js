import React, { Component } from 'react';
import { history } from 'utils';
import { alertActions } from 'actions';
import { connect } from 'react-redux';
import Home from 'containers/Home';
import RegisterForm from 'containers/Security';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // this line is required to work on plunker because the app preview runs on a subfolder url
    history.push('/');

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }
  render() {
    const basePath = '/' + window.location.pathname.split('/')[1];
    const { alert } = this.props;
    return (
      <div>
        {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
        <Router history={history}>
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const  mapStateToProps = (state)=>{
  const { alert } = state;
  return {
    alert
  };
}

export default connect(mapStateToProps)(App);