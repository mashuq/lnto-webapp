import React from 'react';
import './Auth.css';
import 'semantic-ui-css/semantic.min.css'
import Login from './Login.js'
import Register from './Login.js'
import Registration from './Registration';

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
    console.log(loginInfo);
  }

  register(registrationInfo){
    console.log(registrationInfo);
  }

  renderLogin(loginInfo){
    return <Login value={loginInfo} onClick={()=>this.login(loginInfo)}/>;    
  }

  renderRegistration(registrationInfo){
    return <Registration value={registrationInfo} onClick={()=>this.login(registrationInfo)}/>;    
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
