

import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import './Nav.css';
import logo from 'logo.ico';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
        <Navbar brand={<Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>} className="black" role="navigation" right>
            <NavItem href='#'>Getting started</NavItem>
            <NavItem href='#'>About</NavItem>
        </Navbar>
    );
  }
}

export default Nav;