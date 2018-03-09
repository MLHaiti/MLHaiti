import React , { Component } from 'react';
// import ReactDOM from 'react-dom';

class InfosBox extends Component{
  render(){
    return (
        <div class="col s12 m4">
        <div class="icon-block">
        <h2 class="center brown-text"><i class="material-icons">{this.props.icon}</i></h2>
        <h5 class="center">{this.props.title}</h5>

        <p class="light">{this.props.desc}</p>
        </div>
        </div>
    );
  }
}
export default InfosBox;



