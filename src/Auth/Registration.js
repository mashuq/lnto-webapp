import React from 'react';
import 'semantic-ui-css/semantic.min.css'

class Registration extends React.Component{
    constructor(props) {
      super(props);
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.props.value[name] = value;
    }
  
    render(){
      return(
        <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="username" placeholder="Username" defaultValue={this.props.value.username} onChange={this.handleInputChange}/>
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" placeholder="Password" defaultValue={this.props.value.password} onChange={this.handleInputChange}/>
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="repassword" placeholder="Re-Type Password" defaultValue={this.props.value.repassword} onChange={this.handleInputChange}/>
            </div>
          </div>
          <div class="ui fluid large teal submit button" onClick={() => this.props.onClick()}>Register</div>
        </div>
        <div class="ui error message"></div>
      </form>
      );
    }
  }

  export default Registration;