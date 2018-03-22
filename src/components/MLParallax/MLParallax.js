/* global $ */
import React , { Component } from 'react';
import background from 'images/background.png';
import './MLParallax.css';
import { Link } from 'react-router-dom';

class MLParalax extends Component {
  componentDidMount(){
    $('.parallax').parallax();
  }
  render() {
    return (
    <div id="index-banner" className="parallax-container">
    <div className="section no-pad-bot">
      <div className="container">
        <br/><br/>
        <h1 className="header center teal-text text-lighten-2">Machine Learning for Haiti</h1>
        <div className="row center">
          <h5 className="header col s12 light">The greatest community to learn and contribute on AI and machine learnig project in haiti</h5>
        </div>
        <div className="row center">
          <Link to="/register" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Become a member</Link>
        </div>
        <br/><br/>

      </div>
    </div>
    <div className="parallax">
    <img src={background} alt="Unsplashed background img 1"/>
    </div>
  </div>
    );
  }
}
export default MLParalax;