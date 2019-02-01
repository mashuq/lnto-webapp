import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Grid, Header } from 'semantic-ui-react';
import TopMenu from './TopMenu';
import SideMenu from './SideMenu';
import Email from '../Profile/Email';

class Dashboard extends React.Component {
  
  render() {
    return (
      <>
        <TopMenu></TopMenu>
        <SideMenu></SideMenu>
        <Email></Email>
      </>
    );
  }
}



export default Dashboard;
