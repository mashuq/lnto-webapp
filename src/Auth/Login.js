import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Form, Input, Button, Message, Segment } from 'semantic-ui-react';


let loginInformation = {
  username: null,
  password: null,
  usernameNegativeMessage: null,
  passwordNegativeMessage: null,
  negativeMessage: null,
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = loginInformation;
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;    
    this.setState({[name]: value});
  }

  setNegativeMessage(negativeMessage){
    this.setState({negativeMessage: negativeMessage});
  }

  submitLogin(){
    this.setState({usernameNegativeMessage: null});
    this.setState({passwordNegativeMessage: null});
    this.setState({negativeMessage: null});

    let valid = true;
    if(null == this.state.username){
      this.setState({usernameNegativeMessage: "Username cannot be null"});
      valid = false;
    }

    if(null == this.state.password){
      this.setState({passwordNegativeMessage: "Password cannot be null"});
      valid = false;
    }

    if(valid){
      this.props.onClick(this, this.state, this.setNegativeMessage.name);
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
        <Button fluid className="teal" onClick={() => this.submitLogin()}>Login</Button>
      </Segment>
      <Message negative className={`${this.state.negativeMessage ? 'visible' : 'hidden'}`} >{this.state.negativeMessage}</Message>
      <Message positive className={`${this.state.positiveMessage ? 'visible' : 'hidden'}`} >{this.state.positiveMessage}</Message>
    </Form>
    );
  }
}

export default Login;