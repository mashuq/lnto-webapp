import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Form, Input, Button, Message, Segment } from 'semantic-ui-react';

let registrationInformation = {
  username: null,
  password: null,
  repassword: null,
  usernameNegativeMessage: null,
  passwordNegativeMessage: null,
  repasswordNegativeMessage: null,
  positiveMessage: null,
  negativeMessage: null,
}

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = registrationInformation;
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  setPositiveMessage(positiveMessage){
    this.setState({positiveMessage: positiveMessage});
  }

  setNegativeMessage(negativeMessage){
    this.setState({negativeMessage: negativeMessage});
  }

  submitRegistration() {
    this.setState({usernameNegativeMessage: null});
    this.setState({passwordNegativeMessage: null});
    this.setState({repasswordNegativeMessage: null});
    this.setState({negativeMessage: null});
    this.setState({positiveMessage: null});

    let valid = true;
    if(null == this.state.username){
      this.setState({usernameNegativeMessage: "Username cannot be null"});
      valid = false;
    }

    if(null == this.state.password){
      this.setState({passwordNegativeMessage: "Password cannot be null"});
      valid = false;
    }

    if(null == this.state.repassword){
      this.setState({repasswordNegativeMessage: "Re-Type Password cannot be null"});
      valid = false;
    }
    
    if(this.state.password !== this.state.repassword){
      this.setState({negativeMessage: "Password do not match with Re-Typed Password"});
      valid = false;
    }   

    if(valid){
      this.props.onClick(this, this.state, this.setPositiveMessage.name, this.setNegativeMessage.name);
    }
  }

  render() {
    return (
      <Form className="ui large form">
        <Segment>
          <Form.Field>
            <Input type="text" name="username" placeholder="Username" defaultValue={this.state.username}
              onChange={this.handleInputChange} iconPosition="left" icon="user" />
            <Message negative className={`${this.state.usernameNegativeMessage ? 'visible' : 'hidden'}`} content={this.state.usernameNegativeMessage} />
          </Form.Field>
          <Form.Field>
            <Input type="password" name="password" placeholder="Password" defaultValue={this.state.password}
              onChange={this.handleInputChange} iconPosition="left" icon="lock" />
            <Message negative className={`${this.state.passwordNegativeMessage ? 'visible' : 'hidden'}`} content={this.state.passwordNegativeMessage} />  
          </Form.Field>
          <Form.Field>
            <Input type="password" name="repassword" placeholder="Re-Type Password" defaultValue={this.state.repassword}
              onChange={this.handleInputChange} iconPosition="left" icon="lock" />
            <Message negative className={`${this.state.repasswordNegativeMessage ? 'visible' : 'hidden'}`} content={this.state.repasswordNegativeMessage} />  
          </Form.Field>
          <Button fluid className="teal" onClick={() => this.submitRegistration()}>Register</Button>
        </Segment>
        <Message negative className={`${this.state.negativeMessage ? 'visible' : 'hidden'}`} >{this.state.negativeMessage}</Message>
        <Message positive className={`${this.state.positiveMessage ? 'visible' : 'hidden'}`} >{this.state.positiveMessage}</Message>
      </Form>
    );
  }
}

export default Registration;