import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Login from './Login'
import Registration from './Registration';
import Authenticator from '../API/Authenticator'
import { Grid, Header } from 'semantic-ui-react';


class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async login(loginComponent, loginInformation, setNegativeMessage) {
    try {
      let result = await Authenticator.loginUser(loginInformation);
      let isUserLoggedIn = await Authenticator.isUserLoggedIn();
      console.log("isUserLoggedIn "+ isUserLoggedIn);
    } catch (error) {
      console.log(error);
      loginComponent[setNegativeMessage](error);
    }
  }

  async register(registrationComponent, registrationInformation, setPositiveMessage, setNegativeMessage) {
    try {
      let result = await Authenticator.registerUser(registrationInformation);
      registrationComponent[setPositiveMessage](result);
    } catch (error) {
      registrationComponent[setNegativeMessage](error);
    }
  }

  renderLogin() {
    return <Login onClick={(loginComponent, loginInformation, setNegativeMessage) =>
      this.login(loginComponent, loginInformation, setNegativeMessage)} />;
  }

  renderRegistration() {
    return <Registration onClick={(registrationComponent, registrationInformation, setPositiveMessage, setNegativeMessage) =>
      this.register(registrationComponent, registrationInformation, setPositiveMessage, setNegativeMessage)} />;
  }

  render() {
    return (

      <Grid>
        <Grid.Column width="sixteen">
          <Header size='huge'>Learn &amp; Teach Online</Header>
        </Grid.Column>
        <Grid.Column width="eight">
          <Header as='h2'>Please Login</Header>
          {this.renderLogin()}
        </Grid.Column >

        <Grid.Column width="eight">
        <Header as='h2'>Please Login</Header>
          {this.renderRegistration()}
        </Grid.Column >
      </Grid>

    );
  }
}



export default Auth;
