import React, { Component } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import InfosBox from 'components/InfosBox';
import data from 'data/homedata.json';
import footerdata from 'data/footerdata.json';
import MLParallax from 'components/MLParallax';

class Home extends Component {
  render() {
    const InfosBoxes = data.map((homedata) => {
      return <InfosBox icon={homedata.icon} title = {homedata.title} desc={homedata.desc} />
    });
    return (
      <div className="App">
      <Header/>
      <MLParallax/>
      <div className="container">
        <div className="section">

          {/* <!--   Icon Section   --> */}         <div className="row">
          {InfosBoxes}
        </div>
        </div>
        </div>
        <Footer bio={footerdata.bio} />
      </div>
    );
  }
}

export default Home;