import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Grid, Header } from 'semantic-ui-react';
import TopMenu from './TopMenu';
import SideMenu from './SideMenu';

class Dashboard extends React.Component {
  
  render() {
    return (
      <>
        <TopMenu></TopMenu>
        <SideMenu></SideMenu>
      </>
    );
  }
}



export default Dashboard;
