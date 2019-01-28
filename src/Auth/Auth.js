import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Login from './Login'
import Registration from './Registration';
import Authenticator from '../API/Authenticator'

class Auth extends React.Component {
  loginInformation = {
    username: null,
    password: null, 
  }

  registrationInformation = {
    username: null,
    password: null, 
    repassword: null, 
  }

  login(loginInfo){
    Authenticator.loginUser(loginInfo);
  }

  register(registrationInfo){
    Authenticator.registerUser(registrationInfo);
  }

  renderLogin(loginInfo){
    return <Login value={loginInfo} onClick={()=>this.login(loginInfo)}/>;    
  }

  renderRegistration(registrationInfo){
    return <Registration value={registrationInfo} onClick={()=>this.register(registrationInfo)}/>;    
  }

  render() {
    return (

      <div class="ui grid">
        <div class="sixteen wide column">
          <div class="ui huge header">Learn &amp; Teach Online</div>
        </div>
        <div class="eight wide column">
          <h2 class="ui header">Please Login</h2>
          {this.renderLogin(this.loginInformation)}
        </div>

        <div class="eight wide column">
        <h2 class="ui header">Please Register</h2>
          {this.renderRegistration(this.registrationInformation)}
        </div>
      </div>
      
    );
  }
}



export default Auth;
