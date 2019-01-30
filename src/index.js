import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Auth from './Auth/Auth';
import * as serviceWorker from './serviceWorker';
import Authenticator from './API/Authenticator'
import Dashboard from './Dashboard/Dashboard'

(async () => {
    let userLoggedIn = await Authenticator.isUserLoggedIn();
    if(userLoggedIn){
        ReactDOM.render(<Dashboard />, document.getElementById('root'));
    }else{
        ReactDOM.render(<Auth />, document.getElementById('root'));
    }
})();

serviceWorker.unregister();
