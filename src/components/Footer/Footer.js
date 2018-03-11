/* global $ */
import React , { Component } from 'react';
import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <footer class="page-footer teal">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Community bio</h5>
            <p class="grey-text text-lighten-4">{this.props.bio}</p>
          </div>
          {/* <div class="col l3 s12">
            <h5 class="white-text">Settings</h5>
            <ul>
              <li><a class="white-text" href="#!">Link 1</a></li>
              <li><a class="white-text" href="#!">Link 2</a></li>
              <li><a class="white-text" href="#!">Link 3</a></li>
              <li><a class="white-text" href="#!">Link 4</a></li>
            </ul>
          </div>
          <div class="col l3 s12">
            <h5 class="white-text">Connect</h5>
            <ul>
              <li><a class="white-text" href="#!">Link 1</a></li>
              <li><a class="white-text" href="#!">Link 2</a></li>
              <li><a class="white-text" href="#!">Link 3</a></li>
              <li><a class="white-text" href="#!">Link 4</a></li>
            </ul>
          </div> */}
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        copyright <a class="brown-text text-lighten-3" href="http://mlhaiti.org">MLHaiti</a>
        </div>
      </div>
    </footer>
    );
  }
}
export default Footer;