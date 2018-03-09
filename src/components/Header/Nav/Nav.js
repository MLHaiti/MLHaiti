

import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import './Nav.css';
import logo from 'logo.ico';

class Nav extends Component {
  render() {
    return (
        <Navbar brand={<img src={logo} className="App-logo" alt="logo" />} className="black" role="navigation" right>
            <NavItem href='#'>Getting started</NavItem>
            <NavItem href='#'>About</NavItem>
        </Navbar>
    );
  }
}

export default Nav;