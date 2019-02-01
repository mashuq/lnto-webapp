import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Form, Input, Button, Message, Segment, Checkbox, Dropdown } from 'semantic-ui-react';


let email = {
  email: null, 
  emailNegativeMessage: null, 
  default: false, 
  addressType: null, 
}

class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = email;
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;    
    this.setState({[name]: value});
  }

  addressTypeOptions = [
      {text: "Personal", value:"PERSONAL"},
      {text: "Office", value:"OFFICIAL"},
      {text: "Guardian", value:"GUARDIAN"},
      {text: "Landlord", value:"LANDLORD"},
  ]

  saveEmail(){

  }

  
  render() {
    return (
      <Form className="ui large form">
      <Segment>
        <Form.Field>
          <Input type="text" name="email" placeholder="email" defaultValue={this.state.username}
            onChange={this.handleInputChange} iconPosition="left" icon="mail" />
          <Message negative className={`${this.state.emailNegativeMessage ? 'visible' : 'hidden'}`} content={this.state.emailNegativeMessage} />
        </Form.Field>
        <Form.Field>
          <Checkbox defaultValue={this.state.default} label="Default Email?" />
        </Form.Field>
        <Form.Field>
            <Dropdown placeholder='Type' fluid selection options={this.addressTypeOptions}/>
        </Form.Field>
        <Button fluid className="teal" onClick={() => this.saveEmail()}>Save Email</Button>
      </Segment>
      <Message negative className={`${this.state.negativeMessage ? 'visible' : 'hidden'}`} >{this.state.negativeMessage}</Message>
      <Message positive className={`${this.state.positiveMessage ? 'visible' : 'hidden'}`} >{this.state.positiveMessage}</Message>
    </Form>
    );
  }
}

export default Email;