import React, { Component } from 'react';
import './App.css';
import Header from 'components/Header';
import InfosBox from 'components/InfosBox';
import data from 'data/homedata.json';

class App extends Component {
  render() {
    const InfosBoxes = data.map((homedata) => {
      return <InfosBox icon={homedata.icon} />
    });
    return (
      <div className="App">
      <Header/>
      <div className="container">
        <div className="section">

          {/* <!--   Icon Section   --> */}
          <div className="row">
          {InfosBoxes}
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;