import React, { Component } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import InfosBox from 'components/InfosBox';
import data from 'data/homedata.json';
import footerdata from 'data/footerdata.json';
import { Row, Col, Input, Card, Icon, Button } from 'react-materialize';
import { SocialIcon } from 'react-social-icons';
import { connect } from 'react-redux';
import {userActions} from 'actions';
import './RegisterForm.css';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        fullname: '',
        username: '',
        phone: '',
        password: '',
        password_rm: '',
        email: ''
      },
      errors :{
        fullname: '',
        username: '',
        phone: '',
        password: '',
        password_rm: '',
        email: ''
      },
      formIsValid: false,
      submitted: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateFormInput = this.validateFormInput.bind(this);
  }
  handleInputChange(event) {
    const { name, value } = event.target;
    const { user ,errors} = this.state;
    const {valid , error } = this.validateFormInput(event);
    this.setState({
      user: {
        ...user,
        [name]: value
      },
      errors:{
        ...errors,
        [name]: error[name]
      },
      formIsValid: valid,
    });
  }
  validateFormInput(event){
    const { name, value } = event.target;
    let user = this.state.user;
    let error = {};
    let Valid = true;
    if(!user["fullname"]){
      Valid = false;
      error[name] = "can't be null";
    }
    if(!user.fullname.match(/^[a-z ,.'-]+$/i)){
      Valid = false;
      error[name] = "Only letters";
    }
      //Email
      if(!user["email"]){
        Valid = false;
        error["email"] = "Cannot be empty";
      }

      if(user["email"] !== ""){

          if (!user["email"].match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            Valid = false;
            error["email"] = "Email is not valid";
          }
    }
    return {Valid,error};
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    if (user.fullname && user.username && user.phone && user.password && user.password_rm && user.email) {
        dispatch(userActions.register(user));
    }
}

  render() {
    const { registering } = this.props;
    const { user,errors,formIsValid, submitted } = this.state;
    const inputlist = [
      { label: "Full name", name: "fullname", type: "text", icon: "account_circle" },
      { label: "Public Username", name: "username", type: "text", icon: "account_circle" },
      { label: "Phone", type: "tel", name: "phone", icon: "phone" },
      { label: "Email", type: "email", name: "email", icon: "email" },
      { label: "Password", type: "password", name: "password", icon: "lock" },
      { label: "Retype your password", type: "password", name: "password_rm", icon: "lock" }];
      const myinputs = inputlist.map(
        (myinput)=>{
          return(
            <div className="col input-field s6">
            <i className="material-icons prefix">{myinput.icon}</i>
            <input type={myinput.type} name={myinput.name} className="validate" onChange={this.handleInputChange} />
            <label className="" for="input_4">{myinput.label}</label>
            <span style={{color: "red"}}>{this.state.errors[myinput.name]}</span>
            {/* {submitted && !user[myinput.name] && <span className="helper-text" style={{ color: 'red' }}>{myinput.label} is required</span>} */}
            </div>
          );
        }
      );
    // const myinputs = inputlist.map((myinput) => {
    //   return (<div>
    //   <Input error={submitted && !user[myinput.name] && myinput.label +"is required"}  label={myinput.label} type={myinput.type} s={6} value={this.state[myinput.name]} name={myinput.name} onChange={this.handleInputChange}>
    //   <Icon>{myinput.icon}</Icon>
    //   </Input>
    //   </div>
    //   );
    // });
    return (
      <div className="App">
          <Header />
          <div className="">
            <Row>
              <form onSubmit={this.handleSubmit} name="form">
                <div className="col s12 m6 offset-m3">
                  <Card header={<div className="card-action black white-text">
                    <Row className="center black dark-blue">
                      Already have an account ? <a href="#">sign in</a>
                    </Row>
                    <Row className="center black">
                      <span center> Create your account using</span>
                      <Row ><Button className="black"><SocialIcon color="white" network="github" style={{ height: 25, width: 25 }} />Github </Button>
                        <Button className="black"><SocialIcon network="linkedin" style={{ height: 25, width: 25 }} />LinkedIn </Button></Row>
                    </Row>
                    <Row className="center">
                      or create a new one
                </Row>
                  </div>} children={<Row>{myinputs}</Row>} actions={<Row className="center"><Button type="submit" name="action" className="black" waves='light'>Register<Icon right>send</Icon></Button></Row>} />
                </div>
              </form>
            </Row>
          </div>
          <br /><br />
          <Footer bio={footerdata.bio} />
        </div>
        );
      }
    }
    
function mapStateToProps(state) {
  const {registering} = state.registration;
  return {
          registering
        };
      }
      
export default connect(mapStateToProps)(RegisterForm);