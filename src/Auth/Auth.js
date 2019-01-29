import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Login from './Login'
import Registration from './Registration';
import Authenticator from '../API/Authenticator'
//import PasswordValidator from '../API/PasswordValidator'

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }  

  login(loginInfo){
    console.log("there");    
    console.log(loginInfo);    
  }

  async register(registrationComponent, registrationInformation, setPositiveMessage, setNegativeMessage){
    Authenticator.registerUser(registrationInformation).then(
      result => {
        registrationComponent[setPositiveMessage](result.data.message);
      },
      error => {
        registrationComponent[setNegativeMessage](error.response.data.message);
      }
    );
  }

  renderLogin(){
    return <Login onClick={(loginInfo)=>this.login(loginInfo)}/>;    
  }

  renderRegistration(){
    return <Registration onClick={(registrationComponent, registrationInformation, setPositiveMessage, setNegativeMessage)=>
      this.register(registrationComponent, registrationInformation, setPositiveMessage, setNegativeMessage)}/>;    
  }

  render() {
    return (

      <div class="ui grid">
        <div class="sixteen wide column">
          <div class="ui huge header">Learn &amp; Teach Online</div>
        </div>
        <div class="eight wide column">
          <h2 class="ui header">Please Login</h2>
          {this.renderLogin()}
        </div>

        <div class="eight wide column">
        <h2 class="ui header">Please Register</h2>
          {this.renderRegistration()}
        </div>
      </div>
      
    );
  }
}



export default Auth;
