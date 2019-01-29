import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Form, Input, Message } from 'semantic-ui-react';

let loginInformation = {
  username: null,
  password: null, 
  positiveMessage: null,
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

  submitLogin(){
    
    this.props.onClick(this.state);
  }

  render() {
    return (
      <Form className="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <Input type="text" name="username" placeholder="Username" defaultValue={this.state.username}
                onChange={this.handleInputChange} iconPosition="left" icon="user" />
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <Input type="password" name="password" placeholder="Password" defaultValue={this.state.password}
                onChange={this.handleInputChange} iconPosition="left" icon="lock" />
            </div>
          </div>
          <div class="ui fluid large teal submit button" onClick={() => this.submitLogin()}>Login</div>
        </div>        
      </Form>
    );
  }
}

export default Login;