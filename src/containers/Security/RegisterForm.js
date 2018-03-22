import React, { Component } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import InfosBox from 'components/InfosBox';
import data from 'data/homedata.json';
import footerdata from 'data/footerdata.json';
import { Row, Col, Input, Card, Icon, Button } from 'react-materialize';
import { SocialIcon } from 'react-social-icons';
// import Input from 'components/Form/input';
import './RegisterForm.css';

class RegisterForm extends Component {
  render() {
    const inputlist = [
      { label: "Full name", type: "text", icon: "account_circle" },
      { label: "Public Username", type: "text", icon: "account_circle" },
      { label: "Phone", type: "tel", icon: "phone" },
      { label: "Email", type: "email", icon: "email" },
      { label: "Password", type: "password", icon: "lock" },
      { label: "Retype your password", type: "password", icon: "lock" }];
    const Inputs = inputlist.map((myinput) => {
      return <Input label={myinput.label} type={myinput.type} s={6}><Icon>{myinput.icon}</Icon></Input>
    });
    return (
      <div className="App">
        <Header />
        <div className="">
          <Row>
            <div className="col s12 m6 offset-m3">
              <Card header={<div className="card-action black white-text">
                <Row className="center black dark-blue">
                  <p >Already have an account ? <a href="#">sign in</a> </p>
                </Row>
                <Row className="center black">
                  <span center> Create your account using</span>
                  <Row ><Button className="black"><SocialIcon color="white" network="github" style={{ height: 25, width: 25 }} />Github </Button>
                  <Button className="black"><SocialIcon  network="linkedin" style={{ height: 25, width: 25 }} />LinkedIn </Button></Row>
                </Row>
                <Row className="center">
                  or create a new one
                </Row>
              </div>} children={<Row>{Inputs}</Row>} actions={<Row className="center"><Button className="black" waves='light'>Register<Icon right>send</Icon></Button></Row>} />
            </div>
          </Row>
        </div>
          <br /><br /><br /><br />
          <Footer bio={footerdata.bio} />
        </div>
        );
      }
    }
export default RegisterForm;