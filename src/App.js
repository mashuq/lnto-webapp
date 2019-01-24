import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Learn and teach online web application
          </p>
          <div><button class="ui primary button">Primary</button><button class="ui secondary button">Secondary</button></div>
        </header>
      </div>
    );
  }
}

export default App;
