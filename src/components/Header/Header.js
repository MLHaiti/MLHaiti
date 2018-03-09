import React , { Component } from 'react';
// import ReactDOM from 'react-dom';
import Nav from 'components/Header/Nav';
import MLParallax from 'components/MLParallax';
import {Parallax} from 'react-materialize';
import ml from 'images/ml.svg';

class Header extends Component{
  render(){
    return (
        <div>
      <Nav/>
      <MLParallax/>
      </div>
    );
  }
}
export default Header;