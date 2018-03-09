import React , { Component } from 'react';
// import ReactDOM from 'react-dom';

class InfosBox extends Component{
  render(){
    return (
        <div class="col s12 m4">
        <div class="icon-block">
        <h2 class="center brown-text"><i class="material-icons">{this.props.icon}</i></h2>
        <h5 class="center">Speeds up development</h5>

        <p class="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
        </div>
        </div>
    );
  }
}
export default InfosBox;



